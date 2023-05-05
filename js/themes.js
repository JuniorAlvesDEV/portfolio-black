export default function initThemes() {}

const arrowThemes = document.querySelector("[data-arrow-themes]");
const boxThemes = document.querySelector("[data-box-theme]");
const containerThemes = document.querySelector("[data-themes-container]");
const colorThemes = document.querySelectorAll("[data-theme-color]");
const bodyTheme = document.querySelector("body");

arrowThemes.addEventListener("click", () => {
  containerThemes.classList.toggle("open");
});

boxThemes.addEventListener("click", () => {
  containerThemes.classList.toggle("open");
});

function themeSelector() {
  const color = this.getAttribute("aria-label");
  bodyTheme.setAttribute("data-theme", color);
  containerThemes.classList.remove("open");
}

colorThemes.forEach((item) => {
  item.addEventListener("click", themeSelector);
});
