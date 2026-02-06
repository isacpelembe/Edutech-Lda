document.addEventListener('DOMContentLoaded', () => {
  const newsCards = document.querySelectorAll('.news-card');
  const modal = document.querySelector('.modal');
  const closeBtn = modal.querySelector('.close');
  const modalCategory = modal.querySelector('.modal-category');
  const modalTitle = modal.querySelector('.modal-title');
  const modalImage = modal.querySelector('.modal-image');
  const modalText = modal.querySelector('.modal-text');

  document.querySelectorAll('.read-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.news-card');
      if (!card) return;
      const hiddenContent = card.querySelector('.modal-content-hidden');
      if (!hiddenContent) return;

      modalCategory.dataset.pt = card.dataset.category;       // PT
      modalCategory.dataset.en = card.dataset.enCategory || card.dataset.category; // EN

      const titleEl = card.querySelector('.news-title');
      modalTitle.dataset.pt = titleEl.dataset.pt || titleEl.textContent;
      modalTitle.dataset.en = titleEl.dataset.en || titleEl.textContent;

      const hiddenImage = hiddenContent.querySelector('img');
      if (hiddenImage) {
        modalImage.src = hiddenImage.src;
        modalImage.alt = hiddenImage.alt || modalTitle.dataset.pt;
      }

      modalText.innerHTML = '';
      const paragraphs = hiddenContent.querySelectorAll('p');
      paragraphs.forEach((p, i) => {
        const newP = document.createElement('p');
        newP.dataset.pt = p.dataset.pt || p.textContent;
        newP.dataset.en = p.dataset.en || p.textContent;
        modalText.appendChild(newP);
      });

      const currentLang = document.querySelector('html').lang || 'pt'; 
      updateLanguage(currentLang);

      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});
