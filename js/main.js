// ===== MAIN APP ENTRY POINT =====
import { showHome } from './ui.js';
import { startLesson, startRandomLesson, startFlashcards, checkAnswer, nextQuestion, flipCard, restartLesson } from './lesson.js';

// Expose functions to window for HTML onclick handlers
window.showHome = showHome;
window.startLesson = startLesson;
window.startRandomLesson = startRandomLesson;
window.startFlashcards = startFlashcards;
window.checkAnswer = checkAnswer;
window.nextQuestion = nextQuestion;
window.flipCard = flipCard;
window.restartLesson = restartLesson;

// Initialize app
showHome();
