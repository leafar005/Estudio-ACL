/**
 * QUIZ APP — Calidad e ISO 9000
 * Interactive quiz engine with justifications
 */

(function () {
  'use strict';

  // ========================
  // STATE
  // ========================
  let state = {
    mode: null,           // 'all' | 'category' | 'traps' | 'random'
    categoryId: null,
    questions: [],
    currentIndex: 0,
    answers: [],          // { questionIndex, selectedOption, isCorrect, displayOptions }
    currentDisplayOptions: [],
    correctCount: 0,
    wrongCount: 0,
    startTime: null,
    answered: false
  };

  // ========================
  // DOM REFS
  // ========================
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const screens = {
    landing: $('#landing-screen'),
    quiz: $('#quiz-screen'),
    results: $('#results-screen')
  };

  // ========================
  // INIT
  // ========================
  function init() {
    updateCounts();
    buildCategoryGrid();
    bindLandingEvents();
    bindQuizEvents();
    bindResultsEvents();
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('resume') === 'true' && localStorage.getItem('paused_test')) {
      const saved = JSON.parse(localStorage.getItem('paused_test'));
      window.resumePausedTest(saved.state);
      window.history.replaceState({}, document.title, window.location.pathname);
      return;
    }
  }

  function updateCounts() {
    $('#count-all').textContent = `${QUESTIONS.length} preguntas`;
    const trapCount = QUESTIONS.filter(q => q.trap).length;
    $('#count-traps').textContent = `${trapCount} preguntas`;
  }

  // ========================
  // NAVIGATION
  // ========================
  function showScreen(name) {
    Object.values(screens).forEach(s => { if (s) s.classList.remove('active') });
    if (screens[name]) screens[name].classList.add('active');
    window.scrollTo(0, 0);

    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.style.display = (name === 'landing') ? 'flex' : 'none';
    }
  }

  // ========================
  // LANDING
  // ========================
  window.buildCategoryGrid = function buildCategoryGrid() {
    const grid = $('#category-grid');
    grid.innerHTML = '';
    
    const activeFormatBtn = document.querySelector('.category-format-switch .format-btn.active');
    const format = activeFormatBtn ? activeFormatBtn.dataset.format : 'quiz';
    
    CATEGORIES.forEach(cat => {
      let countText = '';
      if (format === 'flashcards') {
         let cards = (window.FlashcardsData && window.FlashcardsData['sgcs']) ? window.FlashcardsData['sgcs'] : [];
         let count = cards.filter(c => c.category === cat.id).length;
         countText = count + (count === 1 ? ' flashcard' : ' flashcards');
      } else {
         let count = QUESTIONS.filter(q => q.category === cat.id).length;
         countText = count + (count === 1 ? ' pregunta' : ' preguntas');
      }
      
      const btn = document.createElement('button');
      btn.className = 'category-btn';
      btn.dataset.categoryId = cat.id;
      btn.innerHTML = `
        <span class="category-btn-icon">${cat.icon}</span>
        <div class="category-btn-info">
          <div class="category-btn-name">${cat.name}</div>
          <div class="category-btn-count">${countText}</div>
        </div>
      `;
      btn.addEventListener('click', () => {
        const activeFormatBtn = document.querySelector('.category-format-switch .format-btn.active');
        const format = activeFormatBtn ? activeFormatBtn.dataset.format : 'quiz';
        if (format === 'flashcards') {
          window.location.href = `../shared/flashcards.html?topic=sgcs&category=${encodeURIComponent(cat.id)}&catName=${encodeURIComponent(cat.name)}`;
        } else {
          startQuiz('category', cat.id);
        }
      });
      grid.appendChild(btn);
    });
  }

  function bindLandingEvents() {
    $('#btn-mode-all').addEventListener('click', () => startQuiz('all'));
    $('#btn-mode-traps').addEventListener('click', () => startQuiz('traps'));
    $('#btn-mode-random').addEventListener('click', () => startQuiz('random'));
    $('#btn-mode-category').addEventListener('click', () => {
      document.querySelector('.mode-selector').style.display = 'none';
      $('#category-picker').classList.remove('hidden');
    });
    $('#btn-back-categories').addEventListener('click', () => {
      document.querySelector('.mode-selector').style.display = '';
      $('#category-picker').classList.add('hidden');
    });
  }

  // ========================
  // QUIZ START
  // ========================
  function startQuiz(mode, categoryId) {
    const doStart = () => {
      state.mode = mode;
      state.categoryId = categoryId || null;
      state.currentIndex = 0;
      state.answers = [];
      state.correctCount = 0;
      state.wrongCount = 0;
      state.answered = false;
      state.startTime = Date.now();

      // Select questions
      let pool = [...QUESTIONS];
      if (mode === 'category' && categoryId) {
        pool = pool.filter(q => q.category === categoryId);
      } else if (mode === 'traps') {
        pool = pool.filter(q => q.trap);
      }

      // Shuffle
      pool = shuffle(pool);

      if (mode === 'random') {
        const urlParams = new URLSearchParams(window.location.search);
        const numQuestions = parseInt(urlParams.get('num')) || 50;
        pool = pool.slice(0, numQuestions);
      }

      state.questions = pool;
      $('#quiz-total').textContent = pool.length;

      showScreen('quiz');
      if (document.getElementById('quiz-screen')) {
        document.getElementById('quiz-screen').style.opacity = '1';
      }
      renderQuestion();
    };

    if (localStorage.getItem('paused_test')) {
      if (!document.getElementById('landing-screen') && document.getElementById('quiz-screen')) {
        document.getElementById('quiz-screen').style.opacity = '0';
      }
      window.showCustomModal({
        title: 'Tienes un test pausado',
        desc: 'Si empiezas uno nuevo, perderás el progreso del test anterior. ¿Deseas empezar uno nuevo de todas formas?',
        buttons: [
          {
            text: 'Empezar nuevo',
            style: 'danger',
            action: () => {
              localStorage.removeItem('paused_test');
              if (typeof initResumeButton === 'function') initResumeButton();
              doStart();
            }
          },
          {
            text: 'Cancelar',
            style: 'secondary',
            action: () => {
              if (!document.getElementById('landing-screen')) {
                window.location.href = '../index.html';
              }
            }
          }
        ]
      });
      return;
    }
    doStart();
  }

  // ========================
  // QUIZ RENDERING
  // ========================
  function renderQuestion() {
    const q = state.questions[state.currentIndex];
    state.answered = false;

    // Update header
    $('#quiz-current').textContent = state.currentIndex + 1;
    $('#score-correct').textContent = state.correctCount;
    $('#score-wrong').textContent = state.wrongCount;

    const pct = ((state.currentIndex) / state.questions.length) * 100;
    $('#progress-bar').style.width = `${pct}%`;

    // Category & type badges
    const cat = CATEGORIES.find(c => c.id === q.category);
    $('#question-category').textContent = cat ? `${cat.icon} ${cat.name}` : q.category;

    const metaContainer = document.querySelector('.question-meta');
    metaContainer.querySelectorAll('.extra-badge').forEach(el => el.remove());

    let typeLabel = q.type === 'vf' ? 'V / F' : 'Opción múltiple';
    const typeEl = $('#question-type');
    typeEl.textContent = typeLabel;
    typeEl.style.background = '';
    typeEl.style.color = '';

    if (q.trap) {
      const b = document.createElement('span');
      b.className = 'question-type extra-badge';
      b.textContent = '⚠️ Trampa';
      b.style.background = 'rgba(239, 68, 68, 0.12)';
      b.style.color = '#ef4444';
      metaContainer.appendChild(b);
    }
    if (q.isEnumeration) {
      const b = document.createElement('span');
      b.className = 'question-type extra-badge';
      b.textContent = '📋 Enumeración';
      b.style.background = 'rgba(139, 92, 246, 0.12)';
      b.style.color = '#c4b5fd';
      metaContainer.appendChild(b);
    }
    if (q.isDefinition) {
      const b = document.createElement('span');
      b.className = 'question-type extra-badge';
      b.textContent = '📖 Definición';
      b.style.background = 'rgba(56, 189, 248, 0.12)';
      b.style.color = '#7dd3fc';
      metaContainer.appendChild(b);
    }

    // Question text
    $('#question-text').textContent = q.question;

    // Options
    const container = $('#options-container');
    container.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    let displayOptions = q.options.map((opt, i) => ({
      text: opt,
      originalIndex: i,
      isCorrect: i === q.correct
    }));

    // Shuffle options if it's multiple choice
    if (q.type === 'multi') {
      displayOptions = shuffle(displayOptions);
    }
    state.currentDisplayOptions = displayOptions;

    displayOptions.forEach((optObj, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.dataset.index = i;
      btn.innerHTML = `
        <span class="option-letter">${letters[i]}</span>
        <span class="option-text">${optObj.text}</span>
      `;
      btn.addEventListener('click', () => handleAnswer(i));
      container.appendChild(btn);
    });

    const pastAnswer = state.answers.find(a => a.questionIndex === state.currentIndex);

    if ($('#btn-prev')) {
      $('#btn-prev').style.display = state.currentIndex > 0 ? 'inline-block' : 'none';
    }
    if (!pastAnswer && state.currentIndex === 0) {
      $('#question-actions').classList.add('hidden');
    } else {
      $('#question-actions').classList.remove('hidden');
    }

    if (pastAnswer) {
      state.answered = true;
      state.currentDisplayOptions = pastAnswer.displayOptions;
      container.innerHTML = '';
      state.currentDisplayOptions.forEach((optObj, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn answered';
        if (i === pastAnswer.displayOptions.findIndex(o => o.isCorrect)) {
          btn.classList.add('correct');
        } else if (i === pastAnswer.selectedOption && !pastAnswer.isCorrect) {
          btn.classList.add('wrong');
        } else {
          btn.classList.add('dimmed');
        }
        btn.innerHTML = `
          <span class="option-letter">${letters[i]}</span>
          <span class="option-text">${optObj.text}</span>
        `;
        container.appendChild(btn);
      });
      
      const isCorrect = pastAnswer.isCorrect;
      const correctIndex = pastAnswer.displayOptions.findIndex(o => o.isCorrect);
      
      const panel = $('#justification-panel');
      const header = $('#justification-header');
      const icon = $('#justification-icon');
      const label = $('#justification-label');
      const text = $('#justification-text');

      panel.classList.remove('hidden');
      header.className = 'justification-header';

      if (isCorrect) {
        header.classList.add('correct-header');
        icon.textContent = '✅';
        label.textContent = '¡Correcto!';
      } else {
        header.classList.add('wrong-header');
        icon.textContent = '❌';
        const correctLetter = ['A', 'B', 'C', 'D', 'E', 'F'][correctIndex];
        label.textContent = `Incorrecto — La respuesta correcta es ${correctLetter}`;
      }

      text.innerHTML = formatJustification(q.justification);
      $('#btn-next').style.display = 'inline-block';
      const pctDone = ((state.currentIndex + 1) / state.questions.length) * 100;
      $('#progress-bar').style.width = `${pctDone}%`;
    } else {
      $('#justification-panel').classList.add('hidden');
      $('#btn-next').style.display = 'none';
    }

    // Re-animate card
    const card = $('#question-card');
    card.style.animation = 'none';
    card.offsetHeight; // reflow
    card.style.animation = '';
  }

  // ========================
  // ANSWER HANDLING
  // ========================
  function handleAnswer(selectedIndex) {
    if (state.answered) return;
    state.answered = true;

    const q = state.questions[state.currentIndex];
    const displayOptions = state.currentDisplayOptions;
    const isCorrect = displayOptions[selectedIndex].isCorrect;
    const correctIndex = displayOptions.findIndex(o => o.isCorrect);

    // Record
    state.answers.push({
      questionIndex: state.currentIndex,
      selectedOption: selectedIndex,
      displayOptions: displayOptions,
      isCorrect
    });

    if (isCorrect) state.correctCount++;
    else state.wrongCount++;
    
    window.QuizStats?.addAnswer({ 
      isCorrect, 
      topic: 'iso9000', 
      text: q.question,
      justification: q.justification,
      correctAnswer: displayOptions[correctIndex].text
    });

    // Update scores in header
    $('#score-correct').textContent = state.correctCount;
    $('#score-wrong').textContent = state.wrongCount;

    // Style options
    const optionBtns = $$('.option-btn');
    optionBtns.forEach((btn, i) => {
      btn.classList.add('answered');
      if (i === correctIndex) {
        btn.classList.add('correct');
      } else if (i === selectedIndex && !isCorrect) {
        btn.classList.add('wrong');
      } else {
        btn.classList.add('dimmed');
      }
    });

    // Show justification
    const panel = $('#justification-panel');
    const header = $('#justification-header');
    const icon = $('#justification-icon');
    const label = $('#justification-label');
    const text = $('#justification-text');

    panel.classList.remove('hidden');
    header.className = 'justification-header';

    if (isCorrect) {
      header.classList.add('correct-header');
      icon.textContent = '✅';
      label.textContent = '¡Correcto!';
    } else {
      header.classList.add('wrong-header');
      icon.textContent = '❌';
      const correctLetter = ['A', 'B', 'C', 'D', 'E', 'F'][correctIndex];
      label.textContent = `Incorrecto — La respuesta correcta es ${correctLetter}`;
    }

    text.innerHTML = formatJustification(q.justification);

    // Show next button
    $('#btn-next').style.display = 'inline-block';
    $('#question-actions').classList.remove('hidden');

    // Update progress
    const pctDone = ((state.currentIndex + 1) / state.questions.length) * 100;
    $('#progress-bar').style.width = `${pctDone}%`;

    // Scroll justification into view
    setTimeout(() => {
      panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }

  function formatJustification(text) {
    // Bold key terms
    return text
      .replace(/FALSO/g, '<strong style="color:#ef4444">FALSO</strong>')
      .replace(/VERDADERO/g, '<strong style="color:#10b981">VERDADERO</strong>')
      .replace(/(ISO \d{4,5}(?::\d{4})?)/g, '<strong>$1</strong>')
      .replace(/(QA|QC|PDCA|SGC|CMMI|CMM|SPICE|TQM|ENAC|AENOR|KLOC|MTBF|ROI|DoD)/g, '<strong>$1</strong>');
  }

  // ========================
  // QUIZ NAVIGATION
  // ========================
  function bindQuizEvents() {
    if ($('#btn-prev')) {
      $('#btn-prev').addEventListener('click', () => {
        if (state.currentIndex > 0) {
          state.currentIndex--;
          renderQuestion();
        }
      });
    }

    $('#btn-next').addEventListener('click', () => {
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
        renderQuestion();
      } else {
        showResults();
      }
    });

    $('#btn-quit').addEventListener('click', () => {
      if (state.answers.length > 0) {
        window.showCustomModal({
          title: '¿Guardar progreso?',
          desc: '¿Deseas guardar tu progreso para reanudar este test más tarde?',
          buttons: [
            {
              text: 'Guardar y Salir',
              style: 'primary',
              action: () => {
                const elapsed = Date.now() - state.startTime;
                const progress = {
                  path: window.location.pathname,
                  state: { ...state, accumulatedTime: (state.accumulatedTime || 0) + elapsed }
                };
                localStorage.setItem('paused_test', JSON.stringify(progress));
                resetToLanding();
              }
            },
            {
              text: 'Salir sin guardar',
              style: 'danger',
              action: () => {
                localStorage.removeItem('paused_test');
                resetToLanding();
              }
            },
            {
              text: 'Cancelar',
              style: 'secondary'
            }
          ]
        });
      } else {
        resetToLanding();
      }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Escape logic
      if (e.key === 'Escape') {
        // If a modal is open, it's handled by shared.js escapeHandler
        if (document.querySelector('.custom-modal-overlay.show')) return;
        
        if (screens.quiz && screens.quiz.classList.contains('active')) {
          e.preventDefault();
          $('#btn-quit').click();
          return;
        } else if (screens.results && screens.results.classList.contains('active')) {
           e.preventDefault();
           resetToLanding();
           return;
        } else if (screens.landing && screens.landing.classList.contains('active')) {
           // Go back to previous menu
           e.preventDefault();
           if (!$('#category-picker').classList.contains('hidden')) {
              $('#btn-back-categories').click();
           } else {
              window.location.href = '../index.html';
           }
           return;
        } else if (window.location.pathname.includes('quiz-global')) {
           // Special case for quiz-global which doesn't have a landing screen
           e.preventDefault();
           window.location.href = '../index.html';
           return;
        }
      }

      if (!screens.quiz || !screens.quiz.classList.contains('active')) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (state.currentIndex > 0) {
          state.currentIndex--;
          renderQuestion();
        }
        return;
      }

      if (!state.answered) {
        const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
        const idx = keyMap[e.key.toLowerCase()];
        if (idx !== undefined && idx < state.questions[state.currentIndex].options.length) {
          handleAnswer(idx);
        }
      } else {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
          e.preventDefault();
          $('#btn-next').click();
        }
      }
    });
  }

  // ========================
  // RESULTS
  // ========================
  function showResults() {
    showScreen('results');
    const total = state.questions.length;
    const correct = state.correctCount;
    const wrong = state.wrongCount;
    const pct = Math.round((correct / total) * 100);
    const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    let quizName = 'Simulacro';
    if (state.mode === 'all') quizName = 'Completo';
    else if (state.mode === 'traps') quizName = 'Solo Trampas';
    else if (state.mode === 'random') quizName = 'Aleatorio';
    else if (state.mode === 'category') {
      const cat = typeof CATEGORIES !== 'undefined' ? CATEGORIES.find(c => c.id === state.categoryId) : null;
      quizName = cat ? 'Categoría: ' + cat.name : 'Categoría';
    }

    const questionsList = state.answers.map(ans => {
      const q = state.questions[ans.questionIndex];
      return {
        text: q.question,
        isCorrect: ans.isCorrect,
        justification: q.justification,
        correctAnswer: ans.displayOptions.find(o => o.isCorrect).text
      };
    });

    window.QuizStats?.addQuizCompleted({ 
      pct, correct, total, elapsed, 
      topic: 'iso9000',
      quizName: quizName,
      questions: questionsList
    });

    // Add SVG gradient if needed
    addRingGradient();

    // Animate score ring
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (circumference * pct / 100);
    const ringFill = $('#ring-fill');
    ringFill.style.strokeDasharray = circumference;
    ringFill.style.strokeDashoffset = circumference;
    setTimeout(() => {
      ringFill.style.strokeDashoffset = offset;
    }, 100);

    // Animate percentage counter
    animateCounter($('#results-pct'), pct, '%');

    // Title & subtitle
    let title = '';
    if (pct >= 90) title = '🏆 ¡Excelente!';
    else if (pct >= 70) title = '👏 ¡Muy bien!';
    else if (pct >= 50) title = '📝 Aprobado';
    else title = '📖 Sigue estudiando';
    $('#results-title').textContent = title;
    $('#results-subtitle').textContent = `Has acertado ${correct} de ${total} preguntas`;

    // Stats
    $('#stat-correct').textContent = correct;
    $('#stat-wrong').textContent = wrong;
    $('#stat-time').textContent = formatTime(elapsed);

    // Build review list
    buildReviewList('all');
    bindReviewFilters();
  }

  function addRingGradient() {
    const svg = document.querySelector('.score-ring-svg');
    if (svg.querySelector('defs')) return;
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.id = 'ring-gradient';
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '100%');

    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', '#6366f1');
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', '#a78bfa');

    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.insertBefore(defs, svg.firstChild);
  }

  function animateCounter(el, target, suffix) {
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = `${current}${suffix}`;
    }, 25);
  }

  function buildReviewList(filter) {
    const list = $('#review-list');
    list.innerHTML = '';

    state.answers.forEach((ans, idx) => {
      if (filter === 'correct' && !ans.isCorrect) return;
      if (filter === 'wrong' && ans.isCorrect) return;

      const q = state.questions[ans.questionIndex];
      const cat = CATEGORIES.find(c => c.id === q.category);
      const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
      const correctIndex = ans.displayOptions.findIndex(o => o.isCorrect);

      const item = document.createElement('div');
      item.className = 'review-item';
      item.innerHTML = `
        <div class="review-item-header">
          <span class="review-item-status">${ans.isCorrect ? '✅' : '❌'}</span>
          <span class="review-item-num">#${idx + 1}</span>
          <span class="review-item-category">${cat ? cat.name : ''}</span>
        </div>
        <div class="review-item-question">${q.question}</div>
        <div class="review-item-detail">
          ${!ans.isCorrect ? `
            <div class="review-detail-row">
              <span class="review-detail-label wrong">Tu respuesta:</span>
              <span class="review-detail-value">${letters[ans.selectedOption]}. ${ans.displayOptions[ans.selectedOption].text}</span>
            </div>
          ` : ''}
          <div class="review-detail-row">
            <span class="review-detail-label correct">Correcta:</span>
            <span class="review-detail-value">${letters[correctIndex]}. ${ans.displayOptions[correctIndex].text}</span>
          </div>
          <div class="review-detail-justification">${formatJustification(q.justification)}</div>
        </div>
      `;

      item.addEventListener('click', () => {
        item.classList.toggle('expanded');
      });

      list.appendChild(item);
    });

    if (list.children.length === 0) {
      list.innerHTML = '<p style="text-align:center;color:var(--text-tertiary);padding:20px;">No hay preguntas en esta categoría.</p>';
    }
  }

  function bindReviewFilters() {
    $$('.review-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.review-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        buildReviewList(btn.dataset.filter);
      });
    });
  }

  // ========================
  // RESULTS ACTIONS
  // ========================
  function bindResultsEvents() {
    $('#btn-retry').addEventListener('click', () => {
      startQuiz(state.mode, state.categoryId);
    });

    $('#btn-home').addEventListener('click', resetToLanding);
  }

  function resetToLanding() {
    showScreen('landing');
    // Reset category picker visibility
    if (document.querySelector('.mode-selector')) {
      document.querySelector('.mode-selector').style.display = '';
    }
    if ($('#category-picker')) {
      $('#category-picker').classList.add('hidden');
    }
    if (typeof initResumeButton === 'function') {
      initResumeButton();
    }
  }

  // ========================
  // UTILITIES
  // ========================
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  // ========================
  // RESUME
  // ========================

  window.resumePausedTest = function(savedState) {
    state = savedState;
    state.startTime = Date.now();
    
    // Hide landing or other screens
    Object.values(screens).forEach(s => s?.classList?.remove('active'));
    if (screens.quiz) screens.quiz.classList.add('active');
    
    // Consume the paused test
    localStorage.removeItem('paused_test');
    const existingBtn = document.querySelector('.resume-test-btn');
    if (existingBtn) existingBtn.remove();
    
    // Resume UI
    $('#quiz-total').textContent = state.questions.length;
    renderQuestion();
  };

  // ========================
  // START
  // ========================
  // Auto-save on page unload
  window.addEventListener('beforeunload', () => {
    if (state && state.questions && state.questions.length > 0 && typeof screens !== 'undefined' && screens.quiz && screens.quiz.classList.contains('active')) {
      const elapsed = Date.now() - (state.startTime || Date.now());
      const progress = {
        path: window.location.pathname,
        state: { ...state, accumulatedTime: (state.accumulatedTime || 0) + elapsed }
      };
      localStorage.setItem('paused_test', JSON.stringify(progress));
    }
  });

  document.addEventListener('DOMContentLoaded', init);
})();
