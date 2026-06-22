document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const topic = urlParams.get('topic');
  
  const titleEl = document.getElementById('topic-title');
  const titles = {
    'iso9000': 'Calidad e ISO 9000',
    'cmmi': 'CMMI Modelo + Evaluación',
    'otros-modelos': 'Otros Modelos + Medición',
    'sgcs': 'SGCS Práctica',
    'pai': 'Auditorías Internas'
  };
  if(topic && titles[topic]) {
    titleEl.textContent = `Flashcards: ${titles[topic]}`;
  }
  
  const category = urlParams.get('category');
  const catName = urlParams.get('catName');
  let cards = [];
  if (window.FlashcardsData && topic && window.FlashcardsData[topic]) {
    cards = window.FlashcardsData[topic].map(c => ({...c, topic: topic}));
    if (category) {
      cards = cards.filter(c => c.category === category);
      if(cards.length === 0) cards = [{q: `No hay flashcards para la categoría: ${catName || category}`, a: ""}];
      titleEl.textContent = `Flashcards: ${catName || category}`;
    }
  } else if (window.FlashcardsData && !topic) {
    cards = [];
    Object.keys(window.FlashcardsData).forEach(t => {
      let topicCards = window.FlashcardsData[t].map(c => ({ ...c, topic: t }));
      cards = cards.concat(topicCards);
    });
    titleEl.textContent = 'Flashcards: Todos los temas';
  } else {
    cards = [{q: "Cargando flashcards o no hay disponibles para este tema...", a: ""}];
  }
  
  if (topic) {
    cards = cards.sort(() => Math.random() - 0.5);
  }
  
  let currentIndex = 0;
  
  const cardEl = document.getElementById('flashcard');
  const qEl = document.getElementById('card-question');
  const aEl = document.getElementById('card-answer');
  const currEl = document.getElementById('current-card');
  const totalEl = document.getElementById('total-cards');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  
  totalEl.textContent = cards.length;
  
  const scrollbarWrapper = document.getElementById('scrollbar-wrapper');
  const sliderEl = document.getElementById('card-slider');
  const markersEl = document.getElementById('scrollbar-markers');
  const labelsEl = document.getElementById('scrollbar-labels');

  if (scrollbarWrapper && cards.length > 0) {
    scrollbarWrapper.style.display = 'block';
    sliderEl.max = cards.length - 1;
    sliderEl.value = 0;
    
    sliderEl.addEventListener('input', (e) => {
      currentIndex = parseInt(e.target.value);
      renderCard();
    });

    if (!topic && Object.keys(window.FlashcardsData).length > 0) {
      markersEl.style.display = 'flex';
      labelsEl.style.display = 'block';
      
      const topicColors = {
        'iso9000': '#ef4444',
        'cmmi': '#3b82f6',
        'otros-modelos': '#10b981',
        'sgcs': '#f59e0b',
        'pai': '#8b5cf6'
      };
      
      let currentOffset = 0;
      Object.keys(window.FlashcardsData).forEach(t => {
        const count = window.FlashcardsData[t].length;
        if(count === 0) return;
        const percentage = (count / cards.length) * 100;
        
        const segment = document.createElement('div');
        segment.style.width = `${percentage}%`;
        segment.style.height = '100%';
        segment.style.backgroundColor = topicColors[t] || 'var(--accent-primary)';
        segment.title = titles[t] || t;
        markersEl.appendChild(segment);
        
        const labelText = (titles[t] || t).split(' ')[0];
        const label = document.createElement('div');
        label.textContent = labelText;
        label.style.position = 'absolute';
        label.style.left = `${(currentOffset / cards.length) * 100}%`;
        label.style.transform = currentOffset === 0 ? 'none' : 'translateX(-50%)';
        labelsEl.appendChild(label);
        
        currentOffset += count;
      });
    } else {
      labelsEl.style.display = 'none';
      // markersEl acts as the grey track background, so we don't hide it
    }
  }
  
  function renderCard() {
    cardEl.classList.remove('flipped');
    setTimeout(() => {
      const card = cards[currentIndex];
      
      const frontTopic = document.getElementById('front-topic');
      const frontCategory = document.getElementById('front-category');
      const backTopic = document.getElementById('back-topic');
      const backCategory = document.getElementById('back-category');
      
      if (frontTopic) {
        const tName = card.topic ? titles[card.topic] || card.topic : "";
        const cName = card.category || "";
        
        frontTopic.textContent = tName;
        backTopic.textContent = tName;
        frontCategory.textContent = cName;
        backCategory.textContent = cName;
        
        frontTopic.style.display = tName ? 'block' : 'none';
        backTopic.style.display = tName ? 'block' : 'none';
        frontCategory.style.display = cName ? 'block' : 'none';
        backCategory.style.display = cName ? 'block' : 'none';
      }
      
      function parseMarkdown(text) {
        if (!text) return '';
        return text
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/\n/g, '<br>');
      }
      
      qEl.innerHTML = parseMarkdown(card.q);
      aEl.innerHTML = parseMarkdown(card.a);
      currEl.textContent = currentIndex + 1;
      
      btnPrev.disabled = currentIndex === 0;
      btnNext.disabled = currentIndex === cards.length - 1;
      btnPrev.style.opacity = btnPrev.disabled ? '0.5' : '1';
      btnNext.style.opacity = btnNext.disabled ? '0.5' : '1';
      
      if (sliderEl) {
        sliderEl.value = currentIndex;
      }
    }, 150); // wait for flip animation to hide content if it was flipped
  }
  
  cardEl.addEventListener('click', () => {
    cardEl.classList.toggle('flipped');
  });
  
  btnNext.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      renderCard();
    }
  });
  
  btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderCard();
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'd') {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
        renderCard();
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
      if (currentIndex > 0) {
        currentIndex--;
        renderCard();
      }
    } else if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || e.key === 'ArrowDown' || e.key === 's') {
      cardEl.classList.toggle('flipped');
      e.preventDefault();
    }
  });
  
  renderCard();
});
