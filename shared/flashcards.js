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
      window.FlashcardsData[t].forEach(c => cards.push({ ...c, topic: t }));
    });
    titleEl.textContent = 'Flashcards: Todos los temas';
  } else {
    cards = [{q: "Cargando flashcards o no hay disponibles para este tema...", a: ""}];
  }
  
  // Shuffle cards only if it's the global flashcards view
  if (!topic) {
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
    if (e.key === 'ArrowRight' || e.key === ' ') {
    if (e.key === ' ') {
        cardEl.classList.toggle('flipped');
        
    // if space, and flipped, go next. I dont like it
      /*if (e.key === ' ' && cardEl.classList.contains('flipped')) {
        if (currentIndex < cards.length - 1) {
          currentIndex++;
          renderCard();
        }
      } else if (e.key === ' ') {
         cardEl.classList.toggle('flipped');*/
         
      } else {
        if (currentIndex < cards.length - 1) {
          currentIndex++;
          renderCard();
        }
      }
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      if (currentIndex > 0) {
        currentIndex--;
        renderCard();
      }
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      cardEl.classList.toggle('flipped');
      e.preventDefault();
    }
  });
  
  renderCard();
});
