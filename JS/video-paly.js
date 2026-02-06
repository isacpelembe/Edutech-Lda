//----------------------- VIDEO PLAY -----------------------//
const btnPlay = document.querySelector('.btn-play');
const modal = document.getElementById('videoModal');
const closeModal = modal.querySelector('.close-modal');
const iframe = document.getElementById('youtubeVideo');

const idioma = navigator.language.startsWith('pt') ? 'pt' : 'en';
btnPlay.innerHTML = btnPlay.dataset[idioma];

btnPlay.addEventListener('click', (e) => {
  e.preventDefault();
  iframe.src = 'https://www.youtube.com/embed/9-_W-G0rHZc?rel=0&modestbranding=1&autoplay=1&controls=1';
  modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  iframe.src = '';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    iframe.src = '';
  }
});
