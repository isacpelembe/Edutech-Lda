const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobile-menu');
const menuBtnSpans = menuBtn.querySelectorAll('span');

const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('languageDropdown');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');

  menuBtnSpans.forEach((span, index) => {
    if (mobileMenu.classList.contains('active')) {
      if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
      if (index === 1) span.style.opacity = '0';
      if (index === 2) span.style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      span.style.transform = 'none';
      span.style.opacity = '1';
    }
  });
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuBtnSpans.forEach(span => {
      span.style.transform = 'none';
      span.style.opacity = '1';
    });
  });
});

langBtn.addEventListener('click', () => {
  langDropdown.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
    langDropdown.classList.remove('active');
  }
});
