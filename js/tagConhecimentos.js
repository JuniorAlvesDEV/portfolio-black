export default function tagConhecimentos() {
  const tecnologia = document.querySelectorAll(".techs img");
  const tag = document.querySelectorAll(".tech-nome");
  function abrirTag() {
    console.log("link");
  }

  tecnologia.forEach((img, index) => {
    function abrirTag() {
      tag[index].classList.add("ativo");
    }

    function fecharTag() {
      tag[index].classList.remove("ativo");
    }

    img.addEventListener("mouseover", abrirTag);
    img.addEventListener("touchstart", abrirTag);
    img.addEventListener("mouseout", fecharTag);
  });
}
