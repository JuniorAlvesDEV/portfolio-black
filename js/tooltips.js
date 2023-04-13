export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function onHover(event) {
    const tooltipBox = boxTooltip(this);
    tooltipBox.style.top = event.pageY + 5 + "px";
    tooltipBox.style.left = event.pageX + 5 + "px";

    this.addEventListener("mouseleave", onLeave);
    this.addEventListener("mousemove", onMove);

    function onMove(event) {
      tooltipBox.style.top = event.pageY + 10 + "px";
      tooltipBox.style.left = event.pageX + 10 + "px";
    }

    function onLeave() {
      tooltipBox.remove();
      this.removeEventListener("mouseleave", onLeave);
      this.removeEventListener("mousemove", onMove);
    }
  }

  function boxTooltip(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onHover);
  });

  boxTooltip();
}
