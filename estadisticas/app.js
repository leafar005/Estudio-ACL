/**
 * Estadísticas App — Estudio ACL
 */
(function() {
  'use strict';

  function init() {
    window.QuizStats.load();
    
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab) {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      const targetBtn = document.querySelector(`.tab-btn[data-target="${tab}"]`);
      const targetContent = document.getElementById(tab);
      if (targetBtn) targetBtn.classList.add('active');
      if (targetContent) targetContent.classList.add('active');
    }

    renderTests();
    renderPreguntas();
    renderLogros();
    bindTabs();
    bindReset();
  }

  function renderTests() {
    const container = document.getElementById('tests-list');
    const quizzes = window.QuizStats.data.historyQuizzes || [];
    
    if (quizzes.length === 0) {
      container.innerHTML = '<p class="empty-state">Aún no has completado ningún simulacro. ¡Empieza uno!</p>';
      return;
    }

    container.innerHTML = '';
    quizzes.forEach(quiz => {
      const date = new Date(quiz.date);
      const dateStr = date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
      const borderClass = quiz.pct >= 50 ? 'correct-border' : 'wrong-border';
      
      const card = document.createElement('div');
      card.className = `history-card ${borderClass}`;
      card.innerHTML = `
        <div class="history-info">
          <span class="history-date">${dateStr}</span>
          <span class="history-title">${quiz.quizName || 'Simulacro'}</span>
          <span style="font-size: 0.85rem; color: var(--text-secondary);">${quiz.correct || 0}/${quiz.total || 0} correctas · ${formatTime(quiz.elapsed || 0)}</span>
        </div>
        <div class="history-stats">
          <div class="history-pct">${quiz.pct}%</div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function renderPreguntas() {
    const container = document.getElementById('preguntas-list');
    const questions = window.QuizStats.data.historyQuestions || [];
    
    if (questions.length === 0) {
      container.innerHTML = '<p class="empty-state">Aún no has respondido ninguna pregunta.</p>';
      return;
    }

    container.innerHTML = '';
    questions.forEach(q => {
      const date = new Date(q.date);
      const dateStr = date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
      const borderClass = q.isCorrect ? 'correct-border' : 'wrong-border';
      
      const card = document.createElement('div');
      card.className = `history-card ${borderClass}`;
      card.style.cursor = 'pointer';
      card.innerHTML = `
        <div class="history-info" style="flex: 1;">
          <span class="history-date">${dateStr} · ${q.topic || 'general'}</span>
          <span class="history-title" style="font-size: 0.95rem;">${q.isCorrect ? '✅' : '❌'} ${q.text || 'Pregunta'}</span>
          <div class="question-detail" style="display:none; margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.08);">
            ${q.correctAnswer ? `<p style="font-size: 0.85rem; color: #10b981; margin-bottom: 4px;">✅ ${q.correctAnswer}</p>` : ''}
            ${q.justification ? `<p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">${q.justification}</p>` : ''}
          </div>
        </div>
      `;
      card.addEventListener('click', () => {
        const detail = card.querySelector('.question-detail');
        detail.style.display = detail.style.display === 'none' ? 'block' : 'none';
      });
      container.appendChild(card);
    });
  }

  function renderLogros() {
    const container = document.getElementById('logros-list');
    const unlocked = window.QuizStats.data.achievements || [];
    const allAchievements = window.QuizStats.ACHIEVEMENTS;
    
    container.innerHTML = '';
    Object.values(allAchievements).forEach(ach => {
      const isUnlocked = unlocked.includes(ach.id);
      const card = document.createElement('div');
      card.className = `ach-card ${isUnlocked ? '' : 'locked'}`;
      card.innerHTML = `
        <div class="ach-icon">${ach.icon}</div>
        <div class="ach-title">${ach.title}</div>
        <div class="ach-desc">${ach.desc}</div>
      `;
      container.appendChild(card);
    });
  }

  function bindTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        const target = document.getElementById(btn.dataset.target);
        if (target) target.classList.add('active');
      });
    });
  }

  function bindReset() {
    document.getElementById('btn-reset').addEventListener('click', () => {
      window.showCustomModal({
        title: '¿Resetear estadísticas?',
        desc: 'Se borrarán todos los datos: historial de tests, preguntas y logros. Esta acción no se puede deshacer.',
        buttons: [
          {
            text: 'Sí, borrar todo',
            style: 'danger',
            action: () => {
              window.QuizStats.reset();
              renderTests();
              renderPreguntas();
              renderLogros();
            }
          },
          { text: 'Cancelar', style: 'secondary' }
        ]
      });
    });
  }

  function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  document.addEventListener('DOMContentLoaded', init);
})();
