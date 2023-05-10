export default class MenuMobile {
  constructor(hamburguer, itens) {
    this.hamburguer = document.querySelector(hamburguer);
    this.itens = document.querySelectorAll(itens);
  }

  abrirMenu() {
    document.documentElement.classList.toggle("abrir-menu");
  }

  fecharMenu() {
    document.documentElement.classList.remove("abrir-menu");
  }

  startEvents() {
    this.hamburguer.addEventListener("click", this.abrirMenu);
    this.itens.forEach((item) => {
      item.addEventListener("click", this.fecharMenu);
    });
  }

  init() {
    this.startEvents();
  }
}
