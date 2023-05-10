export default class Cursor {
  constructor(cursor) {
    this.cursor = document.querySelector(cursor);

    this.mousePositionCursor = this.mousePositionCursor.bind(this);
    this.touchPositionCursor = this.touchPositionCursor.bind(this);
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

  startEvent() {
    window.addEventListener("mousemove", this.mousePositionCursor);
    window.addEventListener("touchmove", this.touchPositionCursor);
  }

  init() {
    this.startEvent();
  }
}
