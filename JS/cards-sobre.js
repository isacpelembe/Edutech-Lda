//----------------------- ACCORDION SOBRE NÓS -----------------------//
document.querySelectorAll(".accordion-item").forEach(item => {
  const icon = item.querySelector(".icon");
  const body = item.querySelector(".accordion-body");

  icon.addEventListener("click", (e) => {
    e.stopPropagation();

    const isOpen = body.classList.contains("show");

    document.querySelectorAll(".accordion-body").forEach(b => b.classList.remove("show"));
    document.querySelectorAll(".accordion-header .icon").forEach(i => {
      i.textContent = "+";
      i.style.transform = "rotate(0deg)";
    });

    if (!isOpen) {
      body.classList.add("show");
      icon.textContent = "−";
      icon.style.transform = "rotate(180deg)";
    }
  });
});

//----------------------- EFEITOS DOS CARDS MISSION -----------------------//
const toggles = document.querySelectorAll('.card-toggle');

toggles.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const activeCard = document.querySelector('.card.active');

    if (activeCard && activeCard !== card) {
      activeCard.classList.remove('active');
    }

    card.classList.toggle('active');
  });
});
