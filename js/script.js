import menuMobile from "./menu.js";
import scrollSuave from "./scrollSuave.js";
import scrollAnimado from "./scrollAnimado.js";
import tagConhecimentos from "./tagConhecimentos.js";
import Slide from "./slide.js";

menuMobile();
scrollSuave();
scrollAnimado();
tagConhecimentos();
const slide = new Slide(".slide", ".slide-wrapper");
slide.init();
