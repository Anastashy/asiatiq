// ===== NAVIGATION & UI RENDERING =====
import { getState, saveState } from './state.js';
import { RECIPES, SHELF_LIFE } from './data.js';

// ===== SCREEN NAVIGATION =====
export function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

export function showHome() {
  renderHome();
  showScreen('home');
}

export function confirmClose() {
  if (confirm('Выйти из урока? Прогресс будет потерян.')) { 
    stopTimer(); 
    showHome(); 
  }
}

// ===== HOME RENDER =====
export function renderHome() {
  const state = getState();
  document.getElementById('streakDisplay').textContent = state.streak;
  document.getElementById('xpDisplay').textContent = state.xp;
  document.getElementById('correctDisplay').textContent = state.correct;

  const list = document.getElementById('recipeList');
  list.innerHTML = RECIPES.map(r => {
    const prog = state.recipeProgress[r.id] || 0;
    return `
      <div class="recipe-card" onclick="window.showRecipeDetail(${r.id})">
        <div class="recipe-emoji">${r.emoji}</div>
        <div class="recipe-info">
          <div class="recipe-name">${r.name}</div>
          <div class="recipe-desc">${r.sub}</div>
          <div class="recipe-progress">
            <div class="recipe-progress-fill" style="width: ${prog}%"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ===== RECIPE DETAIL =====
let currentRecipeId = 0;

export function showRecipeDetail(id) {
  currentRecipeId = id;
  const r = RECIPES[id];
  document.getElementById('rdEmoji').textContent = r.emoji;
  document.getElementById('rdName').textContent = r.name;
  document.getElementById('rdSub').textContent = r.sub;

  const content = document.getElementById('rdContent');
  content.innerHTML = `
    <div>
      <div class="section-title">Ингредиенты</div>
      <table class="ing-table">
        <thead><tr><th>Наименование</th><th>Бол.</th><th>Мал.</th></tr></thead>
        <tbody>
          ${r.ingredients.map(i => `<tr><td>${i.name}</td><td>${i.big}</td><td>${i.small}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div>
      <div class="section-title">Технология приготовления</div>
      <div class="step-list">
        ${r.steps.map((s, i) => `
          <div class="step-item">
            <div class="step-num">${i + 1}</div>
            <div class="step-text">${s}</div>
          </div>
        `).join('')}
      </div>
    </div>
    <div>
      <div class="section-title">Выход</div>
      <div class="tech-block">${r.output}</div>
    </div>
  `;

  showScreen('recipe-detail');
}

export function getCurrentRecipeId() {
  return currentRecipeId;
}

export function startLessonForCurrent() {
  window.startLesson('quiz', currentRecipeId);
}

export function startFlashcardForCurrent() {
  window.startFlashcards(currentRecipeId);
}

// Timer stubs - will be implemented in lesson.js
let timerInterval = null;

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

window.showRecipeDetail = showRecipeDetail;
window.showHome = showHome;
window.confirmClose = confirmClose;
window.startLessonForCurrent = startLessonForCurrent;
window.startFlashcardForCurrent = startFlashcardForCurrent;

// ===== SHELF LIFE UI =====
let currentSlCategory = Object.keys(SHELF_LIFE)[0];

export function showShelfLife() {
  renderShelfLifeScreen();
  showScreen('shelf-life');
}

export function renderShelfLifeScreen() {
  const cats = Object.keys(SHELF_LIFE);
  const tabs = document.getElementById('slTabs');
  tabs.innerHTML = cats.map(cat => `
    <button class="sl-tab ${cat === currentSlCategory ? 'active' : ''}" onclick="switchSlTab('${cat}')">${cat}</button>
  `).join('');
  renderSlContent();
}

export function switchSlTab(cat) {
  currentSlCategory = cat;
  document.querySelectorAll('.sl-tab').forEach(t => {
    t.classList.toggle('active', t.textContent === cat);
  });
  renderSlContent();
}

export function renderSlContent() {
  const items = SHELF_LIFE[currentSlCategory];
  document.getElementById('slContent').innerHTML = items.map(item => {
    const badges = [
      item.hot  ? `<span class="sl-badge hot">🌡️ ${item.hot}</span>` : '',
      item.cold ? `<span class="sl-badge cold">❄️ ${item.cold}</span>` : '',
      item.room ? `<span class="sl-badge room">🏠 ${item.room}</span>` : '',
    ].filter(Boolean).join('');
    const note = item.note ? `<div class="sl-note">${item.note}</div>` : '';
    return `
      <div class="sl-item">
        <div class="sl-name">${item.name}</div>
        <div class="sl-badges">${badges}${note}</div>
      </div>`;
  }).join('');
}

window.showShelfLife = showShelfLife;
window.switchSlTab = switchSlTab;
