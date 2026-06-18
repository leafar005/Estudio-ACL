document.addEventListener('DOMContentLoaded', () => {
  // Add small delay to ensure QuizStats is fully loaded
  setTimeout(renderPage, 50);

  // Tabs logic
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update buttons
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update content
      contents.forEach(c => c.classList.remove('active'));
      document.getElementById(tab.dataset.target).classList.add('active');
      
      // Update URL silently
      window.history.replaceState({}, '', '?tab=' + tab.dataset.target);
    });
  });

  // Check URL params
  const params = new URLSearchParams(window.location.search);
  const requestedTab = params.get('tab');
  if (requestedTab) {
    const targetBtn = document.querySelector(`.tab-btn[data-target="${requestedTab}"]`);
    if (targetBtn) targetBtn.click();
  }
});

function formatDate(ms) {
  const d = new Date(ms);
  return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

function formatTime(secs) {
  if (secs < 60) return secs + 's';
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return m + 'm ' + s + 's';
}

function renderPage() {
  const stats = window.QuizStats;
  if (!stats) return;

  const data = stats.data;

  // Render Tests
  const testsList = document.getElementById('tests-list');
  if (data.historyQuizzes && data.historyQuizzes.length > 0) {
    testsList.innerHTML = data.historyQuizzes.map(q => `
      <div class="history-card" style="flex-direction: column; align-items: stretch; gap: 10px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div class="history-info">
            <span class="history-title">${q.quizName || 'Simulacro'} • <span style="font-size: 0.85em; color: var(--text-secondary);">${q.topic.toUpperCase()}</span></span>
            <span class="history-date">${formatDate(q.date)} • ⏱️ ${formatTime(q.elapsed)}</span>
            <span class="history-date" style="margin-top: 5px;">Aciertos: <span style="color:var(--correct)">${q.correct}</span> / ${q.total}</span>
          </div>
          <div class="history-stats">
            <div class="history-pct">${q.pct}%</div>
          </div>
        </div>
        ${q.questions && q.questions.length > 0 ? `
        <details class="history-details" style="margin-top: 10px; font-size: 0.9rem;">
          <summary style="cursor: pointer; color: var(--accent); font-weight: 600; padding: 5px 0;">Ver preguntas del test</summary>
          <div style="margin-top: 10px; display: flex; flex-direction: column; gap: 8px;">
            ${q.questions.map(question => `
              <div style="padding: 10px; background: rgba(0,0,0,0.1); border-radius: 8px; border-left: 2px solid ${question.isCorrect ? 'var(--correct)' : 'var(--wrong)'};">
                <div style="display: flex; justify-content: space-between; gap: 10px; margin-bottom: 5px;">
                  <span style="font-weight: 600;">${question.text || 'Pregunta desconocida'}</span>
                  <span>${question.isCorrect ? '✅' : '❌'}</span>
                </div>
                ${question.justification ? `
                  <div style="margin-top: 8px; font-size: 0.85rem; padding-top: 8px; border-top: 1px solid var(--border-subtle);">
                    <div style="margin-bottom: 4px;"><strong>Respuesta correcta:</strong> ${question.correctAnswer || 'No disponible'}</div>
                    <div style="color: var(--text-secondary); line-height: 1.4;">${question.justification}</div>
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </details>
        ` : ''}
      </div>
    `).join('');
  } else {
    testsList.innerHTML = '<div class="empty-state">No has completado ningún simulacro todavía.</div>';
  }

  // Render Preguntas
  const pregList = document.getElementById('preguntas-list');
  if (data.historyQuestions && data.historyQuestions.length > 0) {
    pregList.innerHTML = data.historyQuestions.map((q, idx) => `
      <div class="history-card ${q.isCorrect ? 'correct-border' : 'wrong-border'}" style="flex-direction: column; align-items: stretch; gap: 10px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div class="history-info">
            <span class="history-date">${formatDate(q.date)} • ${q.topic.toUpperCase()}</span>
            <span class="history-title" style="font-size: 0.95rem; margin-top: 5px;">${q.text || 'Pregunta desconocida'}</span>
          </div>
          <div class="history-stats">
            <span style="font-size: 1.5rem;">${q.isCorrect ? '✅' : '❌'}</span>
          </div>
        </div>
        ${q.justification ? `
        <details class="history-details" style="margin-top: 10px; font-size: 0.9rem;">
          <summary style="cursor: pointer; color: var(--accent); font-weight: 600; padding: 5px 0;">Ver respuesta y justificación</summary>
          <div style="margin-top: 10px; padding: 10px; background: rgba(0,0,0,0.1); border-radius: 8px; border-left: 2px solid ${q.isCorrect ? 'var(--correct)' : 'var(--wrong)'};">
            <div style="margin-bottom: 8px;"><strong>Respuesta correcta:</strong> ${q.correctAnswer || 'No disponible'}</div>
            <div style="color: var(--text-secondary); line-height: 1.5;">${q.justification}</div>
          </div>
        </details>
        ` : ''}
      </div>
    `).join('');
  } else {
    pregList.innerHTML = '<div class="empty-state">No has contestado ninguna pregunta todavía.</div>';
  }

  // Render Logros
  const logrosList = document.getElementById('logros-list');
  const allAch = Object.values(stats.ACHIEVEMENTS);
  logrosList.innerHTML = allAch.map(a => {
    const isUnlocked = data.achievements.includes(a.id);
    return `
      <div class="ach-card ${isUnlocked ? '' : 'locked'}">
        <div class="ach-icon">${a.icon}</div>
        <div class="ach-title">${a.title}</div>
        <div class="ach-desc">${isUnlocked ? a.desc : '???'}</div>
        ${isUnlocked ? '<div style="margin-top:10px;font-size:0.8rem;color:var(--correct)">Desbloqueado</div>' : ''}
      </div>
    `;
  }).join('');
  
  // Add Reset Stats Button at the end of the container if it doesn't exist
  if (!document.getElementById('reset-stats-container')) {
    const container = document.querySelector('.container');
    const resetHtml = `
      <div id="reset-stats-container" style="text-align: center; margin-top: 50px; padding-top: 30px; border-top: 1px solid var(--border-subtle);">
        <button id="reset-stats-btn" style="background: transparent; border: 1px solid var(--wrong); color: var(--wrong); padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.2s;">
          ⚠️ Reiniciar todas las estadísticas
        </button>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', resetHtml);
    
    document.getElementById('reset-stats-btn').addEventListener('click', () => {
      if (confirm('¿Estás totalmente seguro de que quieres borrar todos tus tests, historial y logros conseguidos? Esta acción no se puede deshacer.')) {
        if (window.QuizStats) {
          window.QuizStats.reset();
          location.reload();
        }
      }
    });
  }
}
