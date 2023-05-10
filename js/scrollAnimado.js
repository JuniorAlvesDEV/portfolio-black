export default class scrollAnimado {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const tela = window.innerHeight * 0.7;
      const sectionTop = section.getBoundingClientRect().top - tela;
      if (sectionTop < 0) {
        section.classList.add("scroll-ativo");
      }
    });
  }

  startEvents() {
    window.addEventListener("scroll", this.animaScroll);
  }

  init() {
    this.startEvents();
  }
}
