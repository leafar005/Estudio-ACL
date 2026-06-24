
// --- CUSTOM MODALS ---
window.showCustomModal = function(options) {
  const overlay = document.createElement('div');
  overlay.className = 'custom-modal-overlay';
  
  const box = document.createElement('div');
  box.className = 'custom-modal-box';
  
  let html = '';
  if (options.title) html += `<h3 class="custom-modal-title">${options.title}</h3>`;
  if (options.desc) html += `<p class="custom-modal-desc">${options.desc}</p>`;
  
  html += `<div class="custom-modal-actions">`;
  const uniqueId = Date.now() + Math.random().toString(36).substr(2, 9);
  options.buttons.forEach((btn, i) => {
    html += `<button class="custom-modal-btn ${btn.style || 'secondary'}" id="modal-btn-${uniqueId}-${i}">${btn.text}</button>`;
  });
  html += `</div>`;
  
  box.innerHTML = html;
  overlay.appendChild(box);
  document.body.appendChild(overlay);
  
  // Force reflow for animation
  overlay.offsetHeight;
  overlay.classList.add('show');
  
  const close = () => {
    overlay.classList.remove('show');
    document.removeEventListener('keydown', escapeHandler, true);
    setTimeout(() => overlay.remove(), 300);
  };
  
  let cancelAction = null;
  options.buttons.forEach((btn, i) => {
    if (btn.text.toLowerCase().includes('cancelar')) {
      cancelAction = () => { close(); if (btn.action) btn.action(); };
    }
    document.getElementById(`modal-btn-${uniqueId}-${i}`).addEventListener('click', () => {
      close();
      if (btn.action) btn.action();
    });
  });

  const escapeHandler = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (cancelAction) cancelAction();
      else close();
    }
  };
  document.addEventListener('keydown', escapeHandler, true);
};

// --- THEME MANAGEMENT DELETED ---

// --- STATS & ACHIEVEMENTS MANAGEMENT ---
window.QuizStats = {
  data: {
    quizzesCompleted: 0,
    questionsAnswered: 0,
    correctAnswers: 0,
    topics: {},
    achievements: [],
    historyQuizzes: [],
    historyQuestions: []
  },
  
  ACHIEVEMENTS: {
    FIRST_BLOOD: { id: 'FIRST_BLOOD', icon: '🩸', title: 'Primera Sangre', desc: 'Responde tu primera pregunta.' },
    WARM_UP: { id: 'WARM_UP', icon: '🏃', title: 'Calentamiento', desc: 'Completa tu primer simulacro.' },
    CENTURION: { id: 'CENTURION', icon: '💯', title: 'Centurión', desc: 'Responde 100 preguntas en total.' },
    SCHOLAR: { id: 'SCHOLAR', icon: '🦉', title: 'Erudito', desc: 'Responde 500 preguntas en total.' },
    PERFECT: { id: 'PERFECT', icon: '🏆', title: 'Perfeccionista', desc: 'Obtén un 100% de precisión en un simulacro.' },
    TEN_QUIZZES: { id: 'TEN_QUIZZES', icon: '🔟', title: 'Constante', desc: 'Completa 10 simulacros.' },
    FIFTY_QUIZZES: { id: 'FIFTY_QUIZZES', icon: '🔥', title: 'Máquina', desc: 'Completa 50 simulacros.' },
    SNIPER: { id: 'SNIPER', icon: '🎯', title: 'Francotirador', desc: 'Acierta 50 preguntas en total.' },
    SPEEDRUNNER: { id: 'SPEEDRUNNER', icon: '⚡', title: 'Speedrunner', desc: 'Completa un test de 10+ preguntas en menos de 1 minuto.' },
    NIGHT_OWL: { id: 'NIGHT_OWL', icon: '🦇', title: 'Búho Nocturno', desc: 'Completa un test entre medianoche y las 5 AM.' },
    CONCURRENCY_MASTER: { id: 'CONCURRENCY_MASTER', icon: '🔒', title: 'Maestro Concurrencia', desc: 'Completa 5 tests sobre Concurrencia.' },
    OPTIMIZATION_MASTER: { id: 'OPTIMIZATION_MASTER', icon: '⚡', title: 'Gurú Optimización', desc: 'Completa 5 tests sobre Optimización.' },
    SECURITY_MASTER: { id: 'SECURITY_MASTER', icon: '🛡️', title: 'Experto Seguridad', desc: 'Completa 5 tests sobre Seguridad.' },
    RECOVERY_MASTER: { id: 'RECOVERY_MASTER', icon: '💾', title: 'Maestro Recuperación', desc: 'Completa 5 tests sobre Recuperación.' }
  },

  load() {
    const saved = localStorage.getItem('acl_quiz_stats');
    if (saved) {
      try {
        this.data = { ...this.data, ...JSON.parse(saved) };
      } catch (e) {}
    }
  },

  save() {
    localStorage.setItem('acl_quiz_stats', JSON.stringify(this.data));
  },

  addAnswer(payload) {
    let isCorrect, topic, text, justification, correctAnswer;
    if (typeof payload === 'boolean') {
      isCorrect = arguments[0];
      topic = arguments[1] || 'general';
      text = 'Pregunta desconocida';
      justification = '';
      correctAnswer = '';
    } else {
      isCorrect = payload.isCorrect;
      topic = payload.topic || 'general';
      text = payload.text || 'Pregunta desconocida';
      justification = payload.justification || '';
      correctAnswer = payload.correctAnswer || '';
    }

    this.data.questionsAnswered++;
    if (isCorrect) this.data.correctAnswers++;
    
    if (!this.data.topics[topic]) {
      this.data.topics[topic] = { total: 0, correct: 0 };
    }
    this.data.topics[topic].total++;
    if (isCorrect) this.data.topics[topic].correct++;
    
    this.data.historyQuestions.unshift({ date: Date.now(), topic, isCorrect, text, justification, correctAnswer });
    if (this.data.historyQuestions.length > 50) this.data.historyQuestions.pop();

    this.save();
    
    if (this.data.questionsAnswered === 1) this.unlock('FIRST_BLOOD');
    if (this.data.correctAnswers >= 50) this.unlock('SNIPER');
    if (this.data.questionsAnswered === 100) this.unlock('CENTURION');
    if (this.data.questionsAnswered === 500) this.unlock('SCHOLAR');
  },

  addQuizCompleted(payload) {
    let pct, correct, total, elapsed, topic, quizName, questions;
    if (typeof payload === 'number') {
      pct = payload;
      correct = 0; total = 0; elapsed = 0; topic = 'general'; quizName = 'Simulacro'; questions = [];
    } else {
      pct = payload.pct;
      correct = payload.correct;
      total = payload.total;
      elapsed = payload.elapsed;
      topic = payload.topic || 'general';
      quizName = payload.quizName || 'Simulacro';
      questions = payload.questions || [];
    }

    this.data.quizzesCompleted++;
    
    this.data.historyQuizzes.unshift({ date: Date.now(), topic, quizName, pct, correct, total, elapsed, questions });
    if (this.data.historyQuizzes.length > 20) this.data.historyQuizzes.pop();

    this.save();
    
    if (this.data.quizzesCompleted === 1) this.unlock('WARM_UP');
    if (this.data.quizzesCompleted === 10) this.unlock('TEN_QUIZZES');
    if (this.data.quizzesCompleted === 50) this.unlock('FIFTY_QUIZZES');
    if (pct === 100) this.unlock('PERFECT');
    
    if (total >= 10 && elapsed < 60) this.unlock('SPEEDRUNNER');
    
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 5) this.unlock('NIGHT_OWL');
    
    const topicQuizzes = this.data.historyQuizzes.filter(q => q.topic === topic).length;
    if (topic === 'concorrencia' && topicQuizzes >= 5) this.unlock('CONCURRENCY_MASTER');
    if (topic === 'optimizacion' && topicQuizzes >= 5) this.unlock('OPTIMIZATION_MASTER');
    if (topic === 'seguridade' && topicQuizzes >= 5) this.unlock('SECURITY_MASTER');
    if (topic === 'recuperacion' && topicQuizzes >= 5) this.unlock('RECOVERY_MASTER');
  },

  reset() {
    this.data = {
      quizzesCompleted: 0,
      questionsAnswered: 0,
      correctAnswers: 0,
      topics: {},
      achievements: [],
      historyQuizzes: [],
      historyQuestions: []
    };
    this.save();
  },

  unlock(id) {
    if (!this.data.achievements.includes(id)) {
      this.data.achievements.push(id);
      this.save();
      this.showToast(this.ACHIEVEMENTS[id]);
    }
  },

  showToast(ach) {
    const toast = document.createElement('div');
    toast.className = 'achievement-toast';
    toast.innerHTML = `<span style="font-size: 2rem;">${ach.icon}</span> 
      <div>
        <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8;">Logro Desbloqueado</div>
        <div style="font-size: 1.1rem;">${ach.title}</div>
      </div>`;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 500);
    }, 4000);
  },

  renderIndexWidget(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const accuracy = this.data.questionsAnswered > 0 
      ? Math.round((this.data.correctAnswers / this.data.questionsAnswered) * 100) 
      : 0;

    container.innerHTML = `
      <div class="stats-widget">
        <a href="estadisticas/index.html?tab=tests" class="stat-item" style="text-decoration:none;">
          <span class="stat-value">${this.data.quizzesCompleted}</span>
          <span class="stat-label">Tests</span>
        </a>
        <a href="estadisticas/index.html?tab=preguntas" class="stat-item" style="text-decoration:none;">
          <span class="stat-value">${this.data.questionsAnswered}</span>
          <span class="stat-label">Preguntas</span>
        </a>
        <div class="stat-item">
          <span class="stat-value">${accuracy}%</span>
          <span class="stat-label">Precisión</span>
        </div>
        <a href="estadisticas/index.html?tab=logros" class="stat-item" style="text-decoration:none;" title="${this.data.achievements.length} de ${Object.keys(this.ACHIEVEMENTS).length}">
          <span class="stat-value">${this.data.achievements.length}</span>
          <span class="stat-label">Logros 🏆</span>
        </a>
      </div>
    `;
  }
};

// --- PAUSED TEST MANAGEMENT ---
function initResumeButton() {
  const saved = localStorage.getItem('acl_paused_test');
  if (saved) {
    try {
      const progress = JSON.parse(saved);
      const existing = document.querySelector('.resume-test-btn');
      if (existing) existing.remove();
      
      const btn = document.createElement('button');
      btn.className = 'resume-test-btn';
      btn.innerHTML = '▶️ Reanudar Test';
      btn.title = 'Reanudar el test pausado';

      btn.onclick = () => {
        let basePath = window.location.pathname;
        if (basePath.endsWith('index.html')) {
          basePath = basePath.substring(0, basePath.lastIndexOf('/index.html'));
        } else if (basePath.endsWith('/')) {
          basePath = basePath.substring(0, basePath.length - 1);
        }
        
        let targetPath = progress.path;
        if (targetPath.endsWith('index.html')) {
          targetPath = targetPath.substring(0, targetPath.lastIndexOf('/index.html'));
        } else if (targetPath.endsWith('/')) {
          targetPath = targetPath.substring(0, targetPath.length - 1);
        }

        if (basePath === targetPath && typeof window.resumePausedTest === 'function') {
          window.resumePausedTest(progress.state);
        } else {
          window.location.href = progress.path + '?resume=true';
        }
      };
      
      document.body.appendChild(btn);
    } catch (e) {
      console.error(e);
    }
  } else {
    const existing = document.querySelector('.resume-test-btn');
    if (existing) existing.remove();
  }
}

function checkPausedTestOnLoad() {
  const saved = localStorage.getItem('acl_paused_test');
  if (saved && !sessionStorage.getItem('acl_prompted_resume') && !window.location.search.includes('resume=true')) {
    sessionStorage.setItem('acl_prompted_resume', 'true');
    try {
      const progress = JSON.parse(saved);
      window.showCustomModal({
        title: 'Test en progreso',
        desc: 'Tienes un test guardado. ¿Deseas reanudarlo ahora?',
        buttons: [
          {
            text: 'Sí, reanudar',
            style: 'primary',
            action: () => {
              let basePath = window.location.pathname;
              if (basePath.endsWith('index.html')) basePath = basePath.substring(0, basePath.lastIndexOf('/index.html'));
              else if (basePath.endsWith('/')) basePath = basePath.substring(0, basePath.length - 1);
              let targetPath = progress.path;
              if (targetPath.endsWith('index.html')) targetPath = targetPath.substring(0, targetPath.lastIndexOf('/index.html'));
              else if (targetPath.endsWith('/')) targetPath = targetPath.substring(0, targetPath.length - 1);

              if (basePath === targetPath && typeof window.resumePausedTest === 'function') {
                window.resumePausedTest(progress.state);
              } else {
                window.location.href = progress.path + '?resume=true';
              }
            }
          },
          {
            text: 'No, descartar',
            style: 'danger',
            action: () => {
              localStorage.removeItem('acl_paused_test');
              const existing = document.querySelector('.resume-test-btn');
              if (existing) existing.remove();
            }
          },
          {
            text: 'Más tarde',
            style: 'secondary'
          }
        ]
      });
    } catch(e) {
      console.error(e);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initResumeButton();
  window.QuizStats.load();
  checkPausedTestOnLoad();
});
