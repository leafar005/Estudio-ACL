// --- THEME MANAGEMENT ---
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  }
  
  // Add toggle button to body
  const btn = document.createElement('button');
  btn.className = 'theme-toggle';
  btn.title = "Cambiar Tema";
  btn.innerHTML = document.body.classList.contains('light-theme') ? '🌙' : '☀️';
  btn.onclick = () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    btn.innerHTML = isLight ? '🌙' : '☀️';
  };
  document.body.appendChild(btn);
}

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
    SPEEDRUNNER: { id: 'SPEEDRUNNER', icon: '⚡', title: 'Speedrunner', desc: 'Completa un test de 10 preguntas o más en menos de 1 minuto.' },
    NIGHT_OWL: { id: 'NIGHT_OWL', icon: '🦇', title: 'Búho Nocturno', desc: 'Completa un test entre la medianoche y las 5 AM.' },
    CMMI_MASTER: { id: 'CMMI_MASTER', icon: '⚙️', title: 'Maestro CMMI', desc: 'Completa 5 tests sobre CMMI.' },
    ISO_MASTER: { id: 'ISO_MASTER', icon: '📐', title: 'Gurú ISO 9000', desc: 'Completa 5 tests sobre ISO 9000.' }
  },

  load() {
    const saved = localStorage.getItem('quiz_stats');
    if (saved) {
      try {
        this.data = { ...this.data, ...JSON.parse(saved) };
      } catch (e) {}
    }
  },

  save() {
    localStorage.setItem('quiz_stats', JSON.stringify(this.data));
  },

  addAnswer(payload) {
    // support legacy signature
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
    
    // add to history
    this.data.historyQuestions.unshift({ date: Date.now(), topic, isCorrect, text, justification, correctAnswer });
    if (this.data.historyQuestions.length > 50) this.data.historyQuestions.pop();

    this.save();
    
    // Check achievements
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
    
    // Time achievements
    if (total >= 10 && elapsed < 60) this.unlock('SPEEDRUNNER');
    
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 5) this.unlock('NIGHT_OWL');
    
    // Topic achievements
    const topicQuizzes = this.data.historyQuizzes.filter(q => q.topic === topic).length;
    if (topic === 'cmmi' && topicQuizzes >= 5) this.unlock('CMMI_MASTER');
    if (topic === 'iso9000' && topicQuizzes >= 5) this.unlock('ISO_MASTER');
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
    
    // Trigger animation
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

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  window.QuizStats.load();
});
