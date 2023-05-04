export default function initThemes() {}

const arrowThemes = document.querySelector("[data-arrow-themes]");
const containerThemes = document.querySelector("[data-themes-container]");
const colorThemes = document.querySelectorAll("[data-theme-color]");
const bodyTheme = document.querySelector("body");

arrowThemes.addEventListener("click", () => {
  containerThemes.classList.toggle("open");
});

function themeSelector() {
  const color = this.getAttribute("aria-label");
  bodyTheme.setAttribute("data-theme", color);
}

colorThemes.forEach((item) => {
  item.addEventListener("click", themeSelector);
});
