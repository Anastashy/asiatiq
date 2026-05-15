// ===== QUESTION GENERATORS & LESSON LOGIC =====
import { RECIPES, SHELF_LIFE } from './data.js';
import { getLessonState, setLessonState, getState, saveState } from './state.js';
import { showScreen } from './ui.js';

// Utility functions
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function getWrongAmounts(correct, isSmall) {
  const nums = [10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 100, 110, 140, 150, 180, 200, 220, 260];
  return shuffle(nums.filter(n => n !== correct)).slice(0, 3).map(n => n + ' г');
}

// Question generators
export function makeQuizQuestion(recipe) {
  if (recipe.single) {
    // single-portion: use amount / amountNum
    const valid = recipe.ingredients.filter(i => i.amountNum >= 10 && !i.unit);
    const ing = rand(valid.length ? valid : recipe.ingredients.filter(i => !i.unit));
    const correct = ing.amount;
    const wrongNums = [10,15,20,25,30,40,50,60,80,100,120,130].filter(n => n !== ing.amountNum);
    const wrongs = shuffle(wrongNums).slice(0,3).map(n => n + ' г');
    const options = shuffle([correct, ...wrongs]);
    return {
      type: 'quiz',
      questionType: 'Угадай граммовку',
      question: `${recipe.emoji} ${recipe.name}\n\nСколько нужно:\n«${ing.name}»?`,
      options,
      correct,
      detail: `${ing.name}: ${ing.amount}`,
      recipe,
    };
  }

  const ing = rand(recipe.ingredients.filter(i => i.bigNum > 0.25));
  const isSmall = Math.random() > 0.5;
  const correct = isSmall ? ing.small : ing.big;
  const size = isSmall ? 'малую' : 'большую';

  let wrongOptions = [];
  if (ing.unit === 'шт') {
    const wrongNums = [0.5, 1, 2, 3, 4].filter(n => n !== (isSmall ? ing.smallNum : ing.bigNum));
    wrongOptions = shuffle(wrongNums).slice(0, 3).map(n => n < 1 ? '½ шт' : n + ' шт');
  } else {
    wrongOptions = getWrongAmounts(isSmall ? ing.smallNum : ing.bigNum, isSmall);
  }

  const options = shuffle([correct, ...wrongOptions.slice(0, 3)]);

  return {
    type: 'quiz',
    questionType: 'Угадай граммовку',
    question: `${recipe.emoji} ${recipe.name} — ${size} порция\n\nСколько нужно:\n«${ing.name}»?`,
    options,
    correct,
    detail: `${ing.name}: бол. ${ing.big} / мал. ${ing.small}`,
    recipe,
  };
}

export function makeWhichRecipeQuestion(allRecipes) {
  const recipe = rand(allRecipes);
  const uniqueIng = recipe.ingredients.find(i =>
    !allRecipes.filter(r => r.id !== recipe.id).some(r =>
      r.ingredients.some(ri => ri.name === i.name)
    )
  ) || rand(recipe.ingredients.filter(i => !['Лапша (сырая/отварная) пф', 'Нори', 'Яйцо маринованное пф', 'Ростки сои маринованные пф', 'Грибы шиитаке отварные пф', 'Лук зеленый очищ. пф'].includes(i.name)));

  const wrongRecipes = shuffle(allRecipes.filter(r => r.id !== recipe.id)).slice(0, 3);
  const options = shuffle([recipe, ...wrongRecipes]);

  return {
    type: 'which',
    questionType: 'Какой это рецепт?',
    question: `В каком рамэне используется:\n«${uniqueIng.name}»?`,
    options: options.map(r => r.emoji + ' ' + r.name),
    correct: recipe.emoji + ' ' + recipe.name,
    detail: `Это ингредиент рецепта "${recipe.name}"`,
    recipe,
  };
}

export function makeMissingQuestion(recipe) {
  const allNames = recipe.ingredients.map(i => i.name);
  const correct = rand(allNames);
  const wrongPool = RECIPES.flatMap(r => r.ingredients.map(i => i.name)).filter(n => !allNames.includes(n));
  const wrongs = shuffle([...new Set(wrongPool)]).slice(0, 3);
  const options = shuffle([correct, ...wrongs]);

  return {
    type: 'missing',
    questionType: 'Что забыли добавить?',
    question: `${recipe.emoji} ${recipe.name}\n\nКакой из этих ингредиентов входит в рецепт?`,
    options,
    correct,
    detail: `«${correct}» — ингредиент рецепта "${recipe.name}"`,
    recipe,
  };
}

export function makeFlashcard(recipe) {
  return {
    type: 'flashcard',
    recipe,
  };
}

// Lesson management
export function startLesson(mode, recipeId) {
  const questions = [];

  if (mode === 'flashcard') {
    const recipes = recipeId !== undefined ? [RECIPES[recipeId]] : RECIPES;
    recipes.forEach(r => questions.push(makeFlashcard(r)));
  } else {
    const targetRecipes = recipeId !== undefined ? [RECIPES[recipeId]] : RECIPES;
    const count = 8;

    for (let i = 0; i < count; i++) {
      const recipe = rand(targetRecipes);
      if (mode === 'quiz' || mode === 'all') {
        questions.push(makeQuizQuestion(recipe));
      } else if (mode === 'which') {
        questions.push(makeWhichRecipeQuestion(RECIPES));
      } else if (mode === 'missing') {
        questions.push(makeMissingQuestion(recipe));
      }
    }
  }

  setLessonState({
    questions: shuffle(questions),
    current: 0,
    hearts: 3,
    correctCount: 0,
    earnedXP: 0,
    selectedAnswer: null,
    answered: false,
    mode,
    targetRecipeId: recipeId,
  });

  renderLesson();
  showScreen('lesson');
}

export function startRandomLesson(mode) {
  startLesson(mode, undefined);
}

export function startFlashcards(recipeId) {
  startLesson('flashcard', recipeId);
}

// Timer
const TIMER_SECONDS = 15;
const CIRCUMFERENCE = 2 * Math.PI * 18;
let timerInterval = null;
let timerLeft = TIMER_SECONDS;

export function startTimer() {
  stopTimer();
  timerLeft = TIMER_SECONDS;
  renderTimerUI();
  timerInterval = setInterval(() => {
    timerLeft--;
    renderTimerUI();
    if (timerLeft <= 0) {
      stopTimer();
      onTimerExpired();
    }
  }, 1000);
}

export function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function renderTimerUI() {
  const arc = document.getElementById('timerArc');
  const num = document.getElementById('timerNum');
  const wrap = document.getElementById('timerWrap');
  if (!arc || !num || !wrap) return;

  const pct = timerLeft / TIMER_SECONDS;
  const offset = CIRCUMFERENCE * (1 - pct);
  arc.style.strokeDashoffset = offset;
  num.textContent = timerLeft;

  arc.classList.remove('warn', 'danger');
  num.classList.remove('warn', 'danger');
  wrap.classList.remove('pulse');

  if (timerLeft <= 5) {
    arc.classList.add('danger');
    num.classList.add('danger');
    wrap.classList.add('pulse');
  } else if (timerLeft <= 10) {
    arc.classList.add('warn');
    num.classList.add('warn');
  }
}

export function hideTimer() {
  document.getElementById('timerWrap').style.display = 'none';
}

export function showTimer() {
  document.getElementById('timerWrap').style.display = 'block';
}

export function onTimerExpired() {
  const ls = getLessonState();
  if (ls.answered) return;

  const q = ls.questions[ls.current];
  if (q.type === 'flashcard') return;

  setLessonState({ answered: true, selectedAnswer: null });
  showFeedback(false, q, true);
}

// Lesson rendering
export function renderLesson() {
  const ls = getLessonState();
  const q = ls.questions[ls.current];
  const total = ls.questions.length;
  const progressPct = ((ls.current) / total) * 100;

  document.getElementById('lessonProgress').style.width = `${progressPct}%`;
  updateHearts();

  const body = document.getElementById('lessonBody');
  const bottom = document.getElementById('lessonBottom');
  const feedback = document.getElementById('feedbackBar');

  feedback.style.display = 'none';
  feedback.className = 'feedback-bar';
  bottom.style.display = 'flex';

  if (q.type === 'flashcard') {
    renderFlashcard(q, body, bottom);
    hideTimer();
  } else {
    renderMultiChoice(q, body, bottom);
    showTimer();
    startTimer();
  }
}

export function renderMultiChoice(q, body, bottom) {
  const lines = q.question.split('\n');
  const emojiLine = lines.find(l => l.trim().match(/^[\p{Emoji}]+$/u));
  const textLines = lines.filter(l => l !== emojiLine).join('<br>');

  body.innerHTML = `
    <div class="question-type">${q.questionType}</div>
    ${emojiLine ? `<div class="question-emoji">${emojiLine}</div>` : ''}
    <div class="question-text">${textLines}</div>
    <div class="options-grid" id="optionsGrid"></div>
  `;

  const grid = document.getElementById('optionsGrid');
  const letters = ['A', 'B', 'C', 'D'];

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <span class="option-letter">${letters[idx]}</span>
      <span>${opt}</span>
    `;
    btn.onclick = () => selectOption(btn, opt);
    grid.appendChild(btn);
  });

  bottom.innerHTML = `<button class="btn-check" id="btnCheck" onclick="window.checkAnswer()" disabled>ПРОВЕРИТЬ</button>`;
}

export function renderFlashcard(q, body, bottom) {
  const r = q.recipe;
  body.innerHTML = `
    <div class="flashcard-container" id="flashcardContainer" onclick="flipCard()">
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <div class="fc-emoji">${r.emoji}</div>
          <div class="fc-name">${r.name}</div>
          <div class="fc-hint">Нажми чтобы увидеть рецепт</div>
        </div>
        <div class="flashcard-back">
          <div class="fc-title">${r.name}</div>
          <div class="ingredients-list">
            ${r.ingredients.map(i => `
              <div class="ing-row">
                <span class="ing-name">${i.name}</span>
                <span class="ing-amount">${i.big}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  bottom.style.display = 'none';
}

export function flipCard() {
  document.getElementById('flashcardContainer').classList.toggle('flipped');
}

export function selectOption(btn, value) {
  if (getLessonState().answered) return;

  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  setLessonState({ selectedAnswer: value });
  document.getElementById('btnCheck').disabled = false;
}

export function checkAnswer() {
  const ls = getLessonState();
  if (ls.answered) return;

  const q = ls.questions[ls.current];
  const isCorrect = ls.selectedAnswer === q.correct;

  setLessonState({ answered: true });
  stopTimer();

  if (isCorrect) {
    setLessonState({ correctCount: ls.correctCount + 1, earnedXP: ls.earnedXP + 10 });
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
      const txt = btn.querySelector('span:last-child').textContent;
      if (txt === q.correct) btn.classList.add('correct');
      btn.disabled = true;
    });
  } else {
    setLessonState({ hearts: ls.hearts - 1 });
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
      const txt = btn.querySelector('span:last-child').textContent;
      if (txt === ls.selectedAnswer) btn.classList.add('wrong');
      if (txt === q.correct) btn.classList.add('correct');
      btn.disabled = true;
    });
    document.getElementById('lesson').classList.add('shake');
    setTimeout(() => document.getElementById('lesson').classList.remove('shake'), 400);
  }

  showFeedback(isCorrect, q);
}

export function showFeedback(isCorrect, q, timedOut = false) {
  const fb = document.getElementById('feedbackBar');
  const title = document.getElementById('feedbackTitle');
  const detail = document.getElementById('feedbackDetail');
  const btn = document.getElementById('btnContinue');

  fb.style.display = 'flex';
  fb.className = `feedback-bar ${isCorrect ? 'correct' : 'wrong'}`;

  if (timedOut) {
    title.textContent = '⏱️ Время вышло!';
    detail.textContent = `Правильно: ${q.correct}`;
  } else if (isCorrect) {
    title.textContent = '🎉 Верно!';
    detail.textContent = q.detail;
  } else {
    title.textContent = '❌ Неверно';
    detail.textContent = q.detail;
  }

  btn.className = `btn-continue ${isCorrect ? 'correct' : 'wrong'}`;
  document.getElementById('lessonBottom').style.display = 'none';
}

export function updateHearts() {
  const ls = getLessonState();
  const heartsEl = document.getElementById('heartsDisplay');
  heartsEl.innerHTML = Array(3).fill(0).map((_, i) => 
    `<span class="heart ${i >= ls.hearts ? 'lost' : ''}">❤️</span>`
  ).join('');
}

export function nextQuestion() {
  const ls = getLessonState();
  ls.current++;

  if (ls.hearts <= 0) {
    showResults();
    return;
  }

  if (ls.current >= ls.questions.length) {
    showResults();
    return;
  }

  renderLesson();
}

export function showXP(text) {
  const popup = document.getElementById('xpPopup');
  popup.textContent = text;
  popup.classList.add('show');
  setTimeout(() => popup.classList.remove('show'), 600);
}

export function showResults() {
  const ls = getLessonState();
  const state = getState();

  state.xp += ls.earnedXP;
  state.correct += ls.correctCount;
  if (ls.correctCount === ls.questions.length) {
    state.streak++;
  } else {
    state.streak = 0;
  }

  if (ls.targetRecipeId !== undefined) {
    const prog = state.recipeProgress[ls.targetRecipeId] || 0;
    state.recipeProgress[ls.targetRecipeId] = Math.min(100, prog + Math.round((ls.correctCount / ls.questions.length) * 20));
  }

  saveState();

  const trophy = ls.hearts <= 0 ? '😢' : ls.correctCount === ls.questions.length ? '🏆' : '⭐';
  const title = ls.hearts <= 0 ? 'Попробуй ещё!' : ls.correctCount === ls.questions.length ? 'Отлично!' : 'Хорошо!';
  const sub = ls.hearts <= 0 ? 'Закончились жизни' : 'Урок пройден';

  document.getElementById('resultTrophy').textContent = trophy;
  document.getElementById('resultTitle').textContent = title;
  document.getElementById('resultSub').textContent = sub;
  document.getElementById('resXP').textContent = ls.earnedXP;
  document.getElementById('resCorrect').textContent = `${ls.correctCount}/${ls.questions.length}`;
  document.getElementById('resHearts').textContent = ls.hearts;

  showScreen('results');

  if (ls.correctCount === ls.questions.length && ls.hearts > 0) {
    showXP(`+${ls.earnedXP} XP ⭐`);
  }
}

export function restartLesson() {
  const ls = getLessonState();
  startLesson(ls.mode, ls.targetRecipeId);
}

// Expose to window for HTML onclick handlers
window.startLesson = startLesson;
window.startRandomLesson = startRandomLesson;
window.startFlashcards = startFlashcards;
window.checkAnswer = checkAnswer;
window.nextQuestion = nextQuestion;
window.flipCard = flipCard;
window.restartLesson = restartLesson;

// ===== SHELF LIFE QUIZ =====
export function makeShelfLifeQuestion() {
  const cats = Object.keys(SHELF_LIFE);
  const cat  = rand(cats);
  const items = SHELF_LIFE[cat].filter(i => i.hot || i.cold || i.room);
  const item  = rand(items);

  // pick which shelf to quiz (hot/cold/room)
  const opts = [];
  if (item.hot)  opts.push({ label: '🌡️ +4+6°C', val: item.hot });
  if (item.cold) opts.push({ label: '❄️ -18°C',   val: item.cold });
  if (item.room) opts.push({ label: '🏠 Комн.',    val: item.room });
  const chosen = rand(opts);

  const correct = chosen.val;

  // pool of wrong answers
  const allVals = [...new Set(
    Object.values(SHELF_LIFE).flat()
      .map(i => [i.hot, i.cold, i.room])
      .flat()
      .filter(v => v && v !== correct)
  )];
  const wrongs = shuffle(allVals).slice(0, 3);
  const options = shuffle([correct, ...wrongs]);

  return {
    type: 'quiz',
    questionType: '⏱️ Сроки годности',
    question: `${chosen.label}\n\nСрок хранения:\n«${item.name}»?`,
    options,
    correct,
    detail: `${item.name} — ${chosen.label}: ${correct}`,
    recipe: { emoji: '⏱️', name: item.name },
    isShelfLife: true,
  };
}

export function startShelfLifeQuiz() {
  const questions = Array.from({ length: 10 }, () => makeShelfLifeQuestion());
  setLessonState({
    questions,
    current: 0,
    hearts: 3,
    correctCount: 0,
    earnedXP: 0,
    selectedAnswer: null,
    answered: false,
    mode: 'shelflife',
    targetRecipeId: undefined,
  });
  renderLesson();
  showScreen('lesson');
}

window.startShelfLifeQuiz = startShelfLifeQuiz;
