import MenuMobile from "./menu.js";
import ScrollSuave from "./scrollSuave.js";
import ScrollAnimado from "./scrollAnimado.js";
import Themes from "./themes.js";
import Cursor from "./cursor.js";

import initInstagramImages from "./instagram.js";
import initTooltip from "./tooltips.js";
import Slide from "./slide.js";
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
const slideProjetos = new Slide("[data-slide]", "[data-slide-wrapper]");
const initCursor = new Cursor("[data-cursor]");

function initJSModules() {
  initMenuMobile.init();
  initScrollSuave.init();
  initScrollAnimado.init();
  initThemes.init();
  initCursor.init();
}
initJSModules();

formulario();
initInstagramImages();
slideProjetos.init();

initTooltip();

////////////////////////////////////////////////////////////////
//
//

// SLIDE SOBRE SENDO INICIADO AO TERMINO DO FECTH INSTAGRAM

// import SlideSobre from "./slideSobre.js";

// const initSlideSobre = new SlideSobre(
//   '[data-slide-sobre="wrapper"]',
//   '[data-slide-sobre="slide"]'
// );

// initSlideSobre.init();
