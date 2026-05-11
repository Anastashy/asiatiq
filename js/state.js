// ===== STATE MANAGEMENT =====
import { RECIPES } from './data.js';

let state = {
  xp: parseInt(localStorage.getItem('ramenXP') || '0'),
  streak: parseInt(localStorage.getItem('ramenStreak') || '0'),
  correct: parseInt(localStorage.getItem('ramenCorrect') || '0'),
  recipeProgress: JSON.parse(localStorage.getItem('ramenProgress') || '{}'),
};

let lessonState = {
  questions: [],
  current: 0,
  hearts: 3,
  correctCount: 0,
  earnedXP: 0,
  selectedAnswer: null,
  answered: false,
  mode: 'quiz',
  targetRecipe: null,
};

function saveState() {
  localStorage.setItem('ramenXP', state.xp);
  localStorage.setItem('ramenStreak', state.streak);
  localStorage.setItem('ramenCorrect', state.correct);
  localStorage.setItem('ramenProgress', JSON.stringify(state.recipeProgress));
}

function getState() { return state; }
function getLessonState() { return lessonState; }
function setLessonState(newState) { lessonState = { ...lessonState, ...newState }; }

export { state, lessonState, saveState, getState, getLessonState, setLessonState, RECIPES };
