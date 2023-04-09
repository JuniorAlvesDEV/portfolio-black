function menuMobile() {
  const hamburguer = document.querySelector(".hamburguer");
  const html = document.querySelector("html");
  const itens = document.querySelectorAll(".js-seletor");

  function abrirMenu() {
    html.classList.toggle("abrir-menu");
  }

  function fecharMenu() {
    html.classList.remove("abrir-menu");
  }

  hamburguer.addEventListener("click", abrirMenu);
  itens[0].addEventListener("click", fecharMenu);
  itens[1].addEventListener("click", fecharMenu);
  itens[2].addEventListener("click", fecharMenu);
}
menuMobile();

function scrollAnimado() {
  const jsScroll = document.querySelectorAll(".js-scroll");

  function animaScroll() {
    jsScroll.forEach((sessao) => {
      const tela = window.innerHeight * 0.7;
      const sessaoTop = sessao.getBoundingClientRect().top - tela;

      if (sessaoTop < 0) {
        sessao.classList.add("scroll-ativo");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}
scrollAnimado();

function scrollSuave() {
  const linkInterno = document.querySelectorAll("a[href^='#']");

  function scrolSessao(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const sessao = document.querySelector(href);
    const sessaoTopo = sessao.offsetTop - 80;

    window.scrollTo({
      top: sessaoTopo,
      behavior: "smooth",
    });
  }

  linkInterno.forEach((link) => {
    link.addEventListener("click", scrolSessao);
  });
}
scrollSuave();

function tagConhecimentos() {
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

tagConhecimentos();
