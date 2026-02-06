//------------------------ FUNÇÃO DOS CARDS INDEPENDENTES ------------------//
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.expandir-card');

  cards.forEach(card => {
    const btn = card.querySelector('.toggle-btn');
    const content = card.querySelector('.full-text');

    content.style.maxHeight = '0px';

    btn.addEventListener('click', () => {
      const isActive = card.classList.contains('active');

      if (!isActive) {
        
        card.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        btn.textContent = '×';
      } else {

        card.classList.remove('active');
        content.style.maxHeight = '0px';
        btn.textContent = '+';
      }
    });

    const observer = new MutationObserver(() => {
      if(card.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
    observer.observe(content, { childList: true, subtree: true });
  });
});
