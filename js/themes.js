export default class Themes {
  constructor(boxthemes, color, container) {
    this.boxThemes = document.querySelector(boxthemes);
    this.colorThemes = document.querySelectorAll(color);
    this.containerThemes = document.querySelector(container);

    this.toggleContainer = this.toggleContainer.bind(this);
    this.themeSelector = this.themeSelector.bind(this);
  }

  themeSelector(event) {
    const color = event.target.getAttribute("aria-label");
    document.body.setAttribute("data-theme", color);
    localStorage.theme = document.body.getAttribute("data-theme");
    this.containerThemes.classList.remove("open");
  }

  toggleContainer() {
    this.containerThemes.classList.toggle("open");
  }

  startEvents() {
    if (localStorage.theme) {
      document.body.setAttribute("data-theme", localStorage.theme);
    }

    this.colorThemes.forEach((item) => {
      item.addEventListener("click", this.themeSelector);
    });

    this.boxThemes.addEventListener("click", this.toggleContainer);
  }

  init() {
    this.startEvents();
  }
}
