// Severino — landing interactions
(function () {
  // --- WhatsApp CTA: edite número/mensagem aqui ---
  const WHATSAPP_NUMBER = "5515998491972";
  const WHATSAPP_MSG = "Oi, Severino! Quero começar a usar 🙂";
  const waUrl =
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MSG);

  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.setAttribute("href", waUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // --- mobile nav toggle ---
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // --- footer year ---
  const year = document.getElementById("year");
  if (year) year.textContent = "© " + new Date().getFullYear();
})();
