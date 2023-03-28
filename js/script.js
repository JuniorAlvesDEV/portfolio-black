function menuMobile() {
  const hamburguer = document.querySelector(".hamburguer");
  const html = document.querySelector("html");

  function abrirMenu() {
    html.classList.toggle("abrir-menu");
  }

  hamburguer.addEventListener("click", abrirMenu);
}
menuMobile();
