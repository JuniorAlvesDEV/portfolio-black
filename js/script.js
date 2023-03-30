function menuMobile() {
  const hamburguer = document.querySelector(".hamburguer");
  const html = document.querySelector("html");

  function abrirMenu() {
    html.classList.toggle("abrir-menu");
  }

  hamburguer.addEventListener("click", abrirMenu);
}
menuMobile();

const jsScroll = document.querySelectorAll(".js-scroll");

function animaScroll() {
  jsScroll.forEach((sessao) => {
    const tela = window.innerHeight * 0.7;
    const sessaoTop = sessao.getBoundingClientRect().top - tela;

    if (sessaoTop < 0) {
      sessao.classList.add("scroll-ativo");
    } else {
      sessao.classList.remove("scroll-ativo");
    }
  });
}

window.addEventListener("scroll", animaScroll);
