import MenuMobile from "./menu.js";
import ScrollSuave from "./scrollSuave.js";
import ScrollAnimado from "./scrollAnimado.js";
import Themes from "./themes.js";
import Cursor from "./cursor.js";
import Slide from "./Slide.js";

import initInstagramImages from "./instagram.js";
import initTooltip from "./tooltips.js";
import formulario from "./formulario.js";

const initMenuMobile = new MenuMobile(
  "[data-hamburguer]",
  "[data-js-selector]"
);
const initScrollSuave = new ScrollSuave("a[href^='#']");
const initScrollAnimado = new ScrollAnimado("[data-scroll-animado]");
const initThemes = new Themes(
  "[data-box-theme]",
  "[data-theme-color]",
  "[data-themes-container]"
);
const initCursor = new Cursor("[data-cursor]");

const initSlideProjetos = new Slide(
  '[data-slide-projetos="wrapper"]',
  '[data-slide-projetos="slide"]'
);

function initJSModules() {
  initMenuMobile.init();
  initScrollSuave.init();
  initScrollAnimado.init();
  initThemes.init();
  initCursor.init();

  setTimeout(() => {
    initSlideProjetos.init();
    initSlideProjetos.slideCenter(0);
  }, 1000);
}
initJSModules();

formulario();
initInstagramImages();
initTooltip();

const memoria = window;
console.log(memoria);
console.log("memoria");
