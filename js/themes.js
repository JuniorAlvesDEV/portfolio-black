export default function initThemes() {
  const boxThemes = document.querySelector("[data-box-theme]");
  const containerThemes = document.querySelector("[data-themes-container]");
  const colorThemes = document.querySelectorAll("[data-theme-color]");
  const bodyTheme = document.querySelector("body");

  if (localStorage.theme) {
    bodyTheme.setAttribute("data-theme", localStorage.theme);
  }

  boxThemes.addEventListener("click", () => {
    containerThemes.classList.toggle("open");
  });

  function themeSelector() {
    const color = this.getAttribute("aria-label");
    bodyTheme.setAttribute("data-theme", color);
    containerThemes.classList.remove("open");
    localStorage.theme = bodyTheme.getAttribute("data-theme");
  }

  colorThemes.forEach((item) => {
    item.addEventListener("click", themeSelector);
  });
}
