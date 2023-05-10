import MenuMobile from "./menu.js";
import ScrollSuave from "./scrollSuave.js";
import ScrollAnimado from "./scrollAnimado.js";
import Themes from "./themes.js";
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

function initJSModules() {
  initMenuMobile.init();
  initScrollSuave.init();
  initScrollAnimado.init();
  initThemes.init();

  slideProjetos.init();
}
initJSModules();

formulario();
initInstagramImages();

// initTooltip();

////////////////////////////////////////////////////////////////
//
//

// Slide sobre sendo iniciado no final do fetch instagam

// import SlideSobre from "./slideSobre.js";

// const initSlideSobre = new SlideSobre(
//   '[data-slide-sobre="wrapper"]',
//   '[data-slide-sobre="slide"]'
// );

// initSlideSobre.init();
