const dropdown = document.getElementById('deviceDropdown');
const selected = dropdown.querySelector('.selected');
const optionsList = dropdown.querySelector('.options');
const hiddenInput = dropdown.querySelector('input[type="hidden"]');

selected.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

optionsList.querySelectorAll('li:not(.optgroup-label):not(.disabled)').forEach(li => {
  li.addEventListener('click', () => {
    selected.textContent = li.textContent;
    hiddenInput.value = li.dataset.value;
    dropdown.classList.remove('open');
  });
});

document.addEventListener('click', e => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});

function updateDropdownLanguage(lang = 'pt') {
  optionsList.querySelectorAll('li').forEach(li => {
    if (li.dataset[lang]) {
      li.textContent = li.dataset[lang];
    }
  });

  if (!hiddenInput.value) {
    selected.textContent = dropdown.dataset.placeholder;
  }
}
