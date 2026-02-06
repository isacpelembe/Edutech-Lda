//----------------------- CONTADORES DINAMICOS -----------------------//
  const counters = document.querySelectorAll('.counter');

  const animateCounter = (counter) => {
    const target = Number(counter.dataset.target);
    const prefix = counter.dataset.prefix || '';
    let current = 0;
    const step = Math.max(1, target / 140);

    const update = () => {
      if (current < target) {
        current += step;
        counter.textContent =
          prefix + Math.floor(current).toLocaleString();
        requestAnimationFrame(update);
      } else {
        counter.textContent =
          prefix + target.toLocaleString();
      }
    };

    update();
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(counter => counterObserver.observe(counter));

