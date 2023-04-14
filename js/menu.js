export default function menuMobile() {
  const hamburguer = document.querySelector(".hamburguer");
  const html = document.querySelector("html");
  const itens = document.querySelectorAll(".js-seletor");

  function abrirMenu() {
    html.classList.toggle("abrir-menu");
  }

  hamburguer.addEventListener("click", abrirMenu);

  itens.forEach((item) => {
    item.addEventListener("click", () => {
      html.classList.remove("abrir-menu");
    });
  });
}
