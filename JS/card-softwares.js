/*------------- BADGE AUTOMÁTICO -------------*/
document.querySelectorAll(".card").forEach(card => {
  const h2 = card.querySelector("h2");
  if (!h2) return;

  const title = h2.innerText.toUpperCase();

  const badge = document.createElement("span");
  badge.classList.add("card-badge");

  if (title.includes("AIO")) {
    badge.textContent = "ALL IN ONE";
    badge.classList.add("aio");
  } else {
    badge.textContent = "LAPTOP";
  }

  h2.insertAdjacentElement("afterend", badge);
});

/*------------- DOWNLOAD -------------*/
const files = {
  UNISCEDL20: "https://drive.google.com/uc?export=download&id=TEU_ID_AQUI",
  UNISCEDL21: "https://drive.usercontent.google.com/u/0/uc?id=1OGlzl_Cd1uImnXRdSMnoyGN9FZyhwuT_&export=download",
  UNISCEDL23: "https://drive.usercontent.google.com/u/0/uc?id=1o7bYHfSsWpxttIsy-Joa9YqxaqzluBeQ&export=download",
  EDUTECHL25: "https://drive.usercontent.google.com/u/0/uc?id=1NTvySucDhmBS6ZSLQ3xAjFunxenp_wKr&export=download",
  EDUTECHAIO25: "https://drive.google.com/uc?export=download&id=TEU_ID_AQUI"
};

document.querySelectorAll(".download-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.file;
    if (!files[key]) return;

    const a = document.createElement("a");
    a.href = files[key];
    a.download = "";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});

/*------------- DESCRIÇÃO AUTOMÁTICA COM TRADUÇÃO (PT POR PADRÃO) -------------*/
document.querySelectorAll(".card").forEach(card => {
  const h2 = card.querySelector("h2");
  const p = card.querySelector("p");
  if (!h2 || !p) return;

  const title = h2.innerText.toUpperCase();

  if (title.includes("AIO")) {
    const ptText =
      "Bios & Firmware - Atualizações oficiais para All-in-One, focadas em estabilidade do sistema, compatibilidade de hardware e melhorias de desempenho.";

    const enText =
      "BIOS & Firmware - Official updates for All-in-One computers, focused on system stability, hardware compatibility, and performance improvements.";

    p.setAttribute("data-pt", ptText);
    p.setAttribute("data-en", enText);

    p.innerText = ptText;

  } else {
    const ptText =
      "Bios & Firmware - Atualizações essenciais para laptops, garantindo melhor inicialização, estabilidade, segurança e compatibilidade de componentes.";

    const enText =
      "BIOS & Firmware - Essential updates for laptops, ensuring better booting, stability, security, and component compatibility.";

    p.setAttribute("data-pt", ptText);
    p.setAttribute("data-en", enText);

    p.innerText = ptText;
  }
});
