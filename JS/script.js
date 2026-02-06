//----------------------- TRADUÇÃO COMPLETA -----------------------//
function updateLanguage(lang) {

  document.querySelectorAll('[data-pt][data-en]').forEach(el => {
    
    if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && el.placeholder !== undefined) {
      el.placeholder = lang === 'pt' ? el.dataset.pt : el.dataset.en;
      return;
    }

    if (el.tagName === 'OPTION' || el.tagName === 'OPTGROUP') {
      el.textContent = lang === 'pt' ? el.dataset.pt : el.dataset.en;
      return;
    }

    if (el.classList.contains('btn-text') || el.classList.contains('icon-html')) {
      el.innerHTML = lang === 'pt' ? el.dataset.pt : el.dataset.en;
      return;
    }

    el.textContent = lang === 'pt' ? el.dataset.pt : el.dataset.en;
  });
}

//----------------------- EVENTO SELECT DE IDIOMA -----------------------//
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('languageDropdown');

langBtn.addEventListener('click', e => {
  e.stopPropagation();
  langDropdown.classList.toggle('active');
});

document.addEventListener('click', e => {
  if (!langDropdown.contains(e.target) && !langBtn.contains(e.target)) {
    langDropdown.classList.remove('active');
  }
});

langDropdown.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', () => {
    const lang = item.getAttribute('data-lang');
    langDropdown.classList.remove('active');
    updateLanguage(lang);
    console.log('Idioma selecionado:', lang);
  });
});

//----------------------- ANO AUTOMATICO -----------------------//
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentYear").textContent =
    new Date().getFullYear();
});

