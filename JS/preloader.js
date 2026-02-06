//------------------------ AREA DE PRELOADER ------------------------//
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const canvas = document.getElementById("linesCanvas");
  const ctx = canvas.getContext("2d");
  const switchNode = document.getElementById("switch");
  const routerNode = document.getElementById("router");
  const devices = document.querySelectorAll(".devices-container .node");
  const countEl = document.getElementById("device-count");
  const network = document.querySelector(".network");

  function resizeCanvas() {
    canvas.width = network.offsetWidth;
    canvas.height = network.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  function getCenter(el) {
    const rect = el.getBoundingClientRect();
    const containerRect = network.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2 - containerRect.left,
      y: rect.top + rect.height / 2 - containerRect.top
    };
  }

  const packets = [];
  devices.forEach(d => {
    packets.push({
      node: d,
      progress: Math.random(),
      speed: 0.005 + Math.random() * 0.02,
      color: d.dataset.color || "#66D4EC"
    });
  });

  function updateDeviceCount() {
    const active = Array.from(devices).filter(d => d.classList.contains("online")).length;
    countEl.textContent = `Dispositivos ativos: ${active}/${devices.length}`;
  }
  updateDeviceCount();

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const routerCenter = getCenter(routerNode);
    const switchCenter = getCenter(switchNode);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(routerCenter.x, routerCenter.y);
    ctx.lineTo(switchCenter.x, switchCenter.y);
    ctx.shadowBlur = 8;
    ctx.shadowColor = "#00AED9";
    ctx.stroke();

    devices.forEach(d => {
      const devCenter = getCenter(d);
      ctx.strokeStyle = "rgba(0,174,217,0.5)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(switchCenter.x, switchCenter.y);
      ctx.lineTo(devCenter.x, devCenter.y);
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#00AED9";
      ctx.stroke();
    });

    packets.forEach(p => {
      p.progress += p.speed;
      if (p.progress > 1) p.progress = 0;
      const from = switchCenter;
      const to = getCenter(p.node);
      const x = from.x + (to.x - from.x) * p.progress;
      const y = from.y + (to.y - from.y) * p.progress;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();

  setTimeout(() => {
    preloader.style.transition = "opacity 1s";
    preloader.style.opacity = "0";
    setTimeout(() => preloader.remove(), 1000);
  }, 3000);
});
