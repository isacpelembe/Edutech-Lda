//---------------------- AREA DE SLIDER ----------------------//
document.addEventListener("DOMContentLoaded", () => {

  const slider = document.querySelector(".slider");
  const slides = slider.querySelectorAll(".slide");
  const dots = slider.querySelectorAll(".dots span");
  const nextBtn = slider.querySelector(".nav-btn.next");
  const prevBtn = slider.querySelector(".nav-btn.prev");

  let currentIndex = 0;
  let isAnimating = false;

  const TRANSITION_TIME = 2000; 
  const AUTOPLAY_INTERVAL = 5000;

  function loadBackground(slide) {
    if (slide.dataset.loaded) return;

    const bg = slide.dataset.bg;
    if (!bg) return;

    slide.style.backgroundImage = `url('${bg}')`;
    slide.dataset.loaded = "true";
  }

  function showSlide(index) {
    if (isAnimating || index === currentIndex) return;
    isAnimating = true;

    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    loadBackground(slides[index]);
    loadBackground(slides[(index + 1) % slides.length]);

    currentIndex = index;

    setTimeout(() => {
      isAnimating = false;
    }, TRANSITION_TIME);
  }

  function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
  }

  nextBtn?.addEventListener("click", nextSlide);
  prevBtn?.addEventListener("click", prevSlide);

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.slide, 10);
      showSlide(index);
    });
  });

  // ---------------- Swipe para touch ---------------- //
  let startX = 0;
  let endX = 0;
  const THRESHOLD = 50;

  slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  slider.addEventListener("touchend", e => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > THRESHOLD) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  }, { passive: true });

  // ---------------- Autoplay ---------------- //
  let autoplay = setInterval(nextSlide, AUTOPLAY_INTERVAL);

  slider.addEventListener("mouseenter", () => clearInterval(autoplay));
  slider.addEventListener("mouseleave", () => {
    autoplay = setInterval(nextSlide, AUTOPLAY_INTERVAL);
  });

  // ---------------- Inicializa ---------------- //
  loadBackground(slides[0]);
  loadBackground(slides[1]);
  slides[0].classList.add("active");
  dots[0].classList.add("active");

});
