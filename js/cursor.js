export default class Cursor {
  constructor(cursor) {
    this.cursor = document.querySelector(cursor);
  }

  mousePositionCursor(event) {
    const left = event.pageX;
    const top = event.pageY;
    this.cursor.style.left = `${left}px`;
    this.cursor.style.top = `${top}px`;
  }

  touchPositionCursor(event) {
    const left = event.changedTouches[0].pageX;
    const top = event.changedTouches[0].pageY;
    this.cursor.style.left = `${left}px`;
    this.cursor.style.top = `${top}px`;
  }

  scrollPositionCursor(event) {
    const left = event.pageX;
    const top = event.pageY;
    this.cursor.style.left = `${left}px`;
    this.cursor.style.top = `${top}px`;
  }

  clickCursor(event) {
    if (event.type === "mousedown" || event.type === "touchstart") {
      this.cursor.classList.add("click");
    } else {
      this.cursor.classList.remove("click");
    }
  }

  startEvent() {
    window.addEventListener("mousemove", this.mousePositionCursor);
    window.addEventListener("wheel", this.scrollPositionCursor);
    window.addEventListener("touchmove", this.touchPositionCursor);

    window.addEventListener("mousedown", this.clickCursor);
    window.addEventListener("mouseup", this.clickCursor);

    window.addEventListener("touchstart", this.clickCursor);
    window.addEventListener("touchend", this.clickCursor);
  }

  bindEvents() {
    this.mousePositionCursor = this.mousePositionCursor.bind(this);
    this.touchPositionCursor = this.touchPositionCursor.bind(this);
    this.scrollPositionCursor = this.scrollPositionCursor.bind(this);
    this.clickCursor = this.clickCursor.bind(this);
  }

  init() {
    this.bindEvents();
    this.startEvent();
  }
}
