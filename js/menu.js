export default function menuMobile() {
  const hamburguer = document.querySelector(".hamburguer");
  const html = document.querySelector("html");
  const itens = document.querySelectorAll(".js-seletor");

  function abrirMenu() {
    html.classList.toggle("abrir-menu");
  }

  function fecharMenu() {
    html.classList.remove("abrir-menu");
  }

  hamburguer.addEventListener("click", abrirMenu);
  itens[0].addEventListener("click", fecharMenu);
  itens[1].addEventListener("click", fecharMenu);
  itens[2].addEventListener("click", fecharMenu);
}
