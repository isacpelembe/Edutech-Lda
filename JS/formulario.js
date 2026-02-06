//---------------------- AREA DE ENVIO DE MENSAGEM FORMULARIO -----------//
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const modal = document.getElementById("successModal");
  const closeBtn = modal.querySelector(".close");
  const whatsappLink = document.getElementById("whatsappLink");

  function isMobile() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    status.textContent = "Enviando...";

    const formData = new FormData(form);

    fetch("enviar.php", {
      method: "POST",
      body: formData
    })
    .then(res => res.text())
    .then(msg => {
      status.textContent = "";
      form.reset();

      const texto = `Olá 👋
Enviei uma mensagem pelo site:

Nome: ${formData.get("nome")}
Telefone: ${formData.get("telefone")}
Email: ${formData.get("email")}

Mensagem:
${formData.get("mensagem")}`;

      const numero = "258833355955";
      const base = isMobile() ? "https://wa.me/" : "https://web.whatsapp.com/send?phone=";
      whatsappLink.href = base + numero + "&text=" + encodeURIComponent(texto);

      // MOSTRA O POPUP
      modal.style.display = "block";
    })
    .catch(() => {
      status.textContent = "Erro ao enviar.";
    });
  });

  closeBtn.addEventListener("click", () => modal.style.display = "none");

  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
});
