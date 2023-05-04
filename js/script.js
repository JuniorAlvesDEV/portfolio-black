import menuMobile from "./menu.js";
import scrollSuave from "./scrollSuave.js";
import scrollAnimado from "./scrollAnimado.js";
import Slide from "./slide.js";
import formulario from "./formulario.js";
import initTooltip from "./tooltips.js";
import initThemes from "./themes.js";

menuMobile();
scrollSuave();
scrollAnimado();
formulario();
const slide = new Slide(".slide", ".slide-wrapper");
slide.init();
initThemes();
initTooltip();
