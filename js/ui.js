// ===== NAVIGATION & UI RENDERING =====
import { getState, saveState } from './state.js';
import { RECIPES } from './data.js';

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
