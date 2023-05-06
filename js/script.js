import menuMobile from "./menu.js";
import scrollSuave from "./scrollSuave.js";
import scrollAnimado from "./scrollAnimado.js";
import Slide from "./slide.js";
import formulario from "./formulario.js";
import initTooltip from "./tooltips.js";
import initThemes from "./themes.js";
import initInstagramImages from "./instagram.js";

menuMobile();
scrollSuave();
scrollAnimado();
formulario();
initThemes();
initInstagramImages();

const slideProjetos = new Slide("[data-slide]", "[data-slide-wrapper]");
slideProjetos.init();

initTooltip();
