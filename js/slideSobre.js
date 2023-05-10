export default class SlideSobre {
  constructor(wrapper, slide) {
    this.wrapper = document.querySelector(wrapper);
    this.slide = document.querySelector(slide);

    this.initialPosition = 0;
    this.finalPosition = 0;

    this.movementStart = 0;
    this.movementStop = 0;
  }

  // CLIQUE E TOQUE SOBRE A IMAGEM

  startMouse(event) {
    event.preventDefault();
    this.initialPosition = event.clientX;
    this.slide.addEventListener("mousemove", this.mouseMovement);
    this.slideTransition(false);
  }

  startTouch(event) {
    this.initialPosition = event.changedTouches[0].clientX;
    this.slide.addEventListener("touchmove", this.touchMovement);
    this.slideTransition(false);
  }

  // MOVIMENTO DO CLICK E TOQUE

  mouseMovement(event) {
    const mouseAxisX = event.clientX;
    const axisX = this.calcPosition(mouseAxisX);
    this.slideMove(axisX);
  }

  touchMovement(event) {
    const touchAxisX = event.changedTouches[0].clientX;
    const axisX = this.calcPosition(touchAxisX);
    this.slideMove(axisX);
  }

  // FIM DO CLIQUE E TOQUE

  onLeave() {
    this.slide.removeEventListener("mousemove", this.mouseMovement);
    this.slide.removeEventListener("touchmove", this.mouseMovement);
    this.movementStop = this.finalPosition;
    this.changeImgsOnLeave();
    this.slideTransition(true);
  }

  // CALCULAR POSIÇÕES

  calcPosition(clientX) {
    this.movementStart = this.initialPosition - clientX;
    return this.movementStop - this.movementStart;
  }

  // MOVER SLIDE

  slideMove(axisX) {
    this.finalPosition = axisX;
    this.slide.style.transform = `translate3D(${axisX}px, 0 , 0)`;
  }

  ///////////////////////////////// CONFIGURAÇÕES DE POSICIONAMENTO DE IMAGEM

  // DESESTRUTURAR IMAGENS EM ARRAY

  positionConfigs() {
    this.itens = [...this.slide.children].map((element) => {
      const position = this.calcImgPosition(element);
      return {
        position: position,
        element: element,
      };
    });
  }

  // CALCULAR POSIÇÃO CENTRO IMAGEM

  calcImgPosition(img) {
    const margin = (this.wrapper.offsetWidth - img.offsetWidth) / 2;
    return -(img.offsetLeft - margin);
  }

  // POSICIONAR IMAGEM AO CENTRO

  slideCenter(index) {
    const currentSlide = this.itens[index];
    this.slideMove(currentSlide.position);
    this.navImgs(index);
    this.movementStop = currentSlide.position;
    this.activeImg();
  }

  // SALVAR INDEX DAS IMAGENS ANTERIOR, ATUAL E PROXIMA

  navImgs(index) {
    const last = this.itens.length - 1;
    this.navImages = {
      prev: index ? index - 1 : undefined,
      current: index,
      next: index === last ? undefined : index + 1,
    };
  }

  // TROCAR IMAGENS

  changeImgsOnLeave() {
    if (this.movementStart > 100 && this.navImages.next !== undefined) {
      this.nextImg();
    } else if (this.movementStart < -100 && this.navImages.prev !== undefined) {
      this.prevImg();
    } else {
      this.slideCenter(this.navImages.current);
    }
  }

  // ATIVAR PROXIMA

  nextImg() {
    if (this.navImages.next !== undefined) {
      this.slideCenter(this.navImages.next);
    }
  }
  // ATIVAR ANTERIOR

  prevImg() {
    if (this.navImages.prev !== undefined) {
      this.slideCenter(this.navImages.prev);
    }
  }

  // REPOSICIONAR IMAGEM COM MUDANÇAS DE TAMANHO DE TELA

  resize() {
    setTimeout(() => {
      this.positionConfigs();
      this.slideCenter(this.navImages.current);
    }, 1000);
  }

  resizeWindow() {
    window.addEventListener("resize", this.resize);
  }

  ///////////////////////////////// CONFIGURAÇÕES DE ANIMAÇÃO

  //  ATIVAR ANIMAÇÃO

  slideTransition(start) {
    this.slide.style.transition = start ? "transform 0.5s" : "";
  }

  // ADICIONAR CLASSE A IMAGEM ATIVA

  activeImg() {
    this.itens.forEach((item) => {
      item.element.classList.remove("img-active");
    });
    this.itens[this.navImages.current].element.classList.add("img-active");
  }

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  // INICIAR EVENTOS DE CLIQUE E TOQUE

  startEvents() {
    this.wrapper.addEventListener("mousedown", this.startMouse);
    this.wrapper.addEventListener("touchstart", this.startTouch);
    this.wrapper.addEventListener("mouseup", this.onLeave);
    this.wrapper.addEventListener("touchend", this.onLeave);
  }

  // BIND DOS EVENTOS

  bindEvents() {
    this.startMouse = this.startMouse.bind(this);
    this.startTouch = this.startTouch.bind(this);
    this.mouseMovement = this.mouseMovement.bind(this);
    this.touchMovement = this.touchMovement.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.resize = this.resize.bind(this);
  }

  // INICIALIZAR MODULO

  init() {
    this.bindEvents();
    this.startEvents();
    this.positionConfigs();
    this.slideTransition(true);
    this.resizeWindow();

    return this;
  }
}
