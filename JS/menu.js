// ---------- ELEMENTOS ----------//
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');

let menuOpen = false;

// ---------- ABRIR MENU ----------//
menuBtn.addEventListener('click', () => {
  menuOpen = true;
  mobileMenu.classList.add('active');
});

// ---------- FECHAR MENU ----------//
closeBtn.addEventListener('click', () => {
  menuOpen = false;
  mobileMenu.classList.remove('active');
});

// ---------- FECHAR MENU AO CLICAR EM UM LINK ----------//
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.remove('active');
  });
});

//----------------------- MOBILE MENU ANIMATION -------------------------//
const canvas = document.getElementById('techCanvas');
const ctx = canvas.getContext('2d');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const points = [];
const pointCount = 25;

for (let i = 0; i < pointCount; i++) {
  points.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    radius: Math.random() * 2 + 1
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < points.length; i++) {
    const p1 = points[i];

    p1.x += p1.vx;
    p1.y += p1.vy;

    if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
    if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

    ctx.beginPath();
    ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,174,217,0.8)';
    ctx.fill();

    for (let j = i + 1; j < points.length; j++) {
      const p2 = points[j];
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0,174,217,${1 - dist / 100})`;
        ctx.lineWidth = 1;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animate);
}

animate();

//------------------ LINK ATIVO DO MENU -------------------//
const links = document.querySelectorAll('.nav-links li a');

let currentPath = window.location.pathname.split("/").pop(); 
if (currentPath === "") currentPath = "index.html";

links.forEach(link => {
  let linkPath = link.getAttribute('href').split("/").pop();
  if (linkPath === currentPath) {
    link.classList.add('active');
  }
});

