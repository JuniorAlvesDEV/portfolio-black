export default class ScrollSuave {
  constructor(linkInterno) {
    this.linkInterno = document.querySelectorAll(linkInterno);
  }

  scrollSessao(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const sessao = document.querySelector(href);
    const sessaoTopo = sessao.offsetTop - 80;

    window.scrollTo({
      top: sessaoTopo,
      behavior: "smooth",
    });
  }

  startEvents() {
    this.linkInterno.forEach((link) => {
      link.addEventListener("click", this.scrollSessao);
    });
  }

  init() {
    this.startEvents();
  }
}
