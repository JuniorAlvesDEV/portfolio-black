export default function scrollAnimado() {
  const jsScroll = document.querySelectorAll(".js-scroll");

  function animaScroll() {
    jsScroll.forEach((sessao) => {
      const tela = window.innerHeight * 0.7;
      const sessaoTop = sessao.getBoundingClientRect().top - tela;

      if (sessaoTop < 0) {
        sessao.classList.add("scroll-ativo");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}
