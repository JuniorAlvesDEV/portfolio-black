function iniciarTab() {
  const tabMenu = document.querySelectorAll(".js-tabMenu li");
  const tabConteudo = document.querySelectorAll(".js-tabConteudo section");

  if (tabConteudo.length && tabMenu.length) {
    tabConteudo[0].classList.add("tabAtiva");

    function ativarTab(i) {
      tabConteudo.forEach((section) => section.classList.remove("tabAtiva"));
      tabConteudo[i].classList.add("tabAtiva");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => ativarTab(index));
    });
  }
}
iniciarTab();

function iniciarLista() {
  const jsFaq = document.querySelectorAll(".js-faq dt");
  if (jsFaq.length) {
    jsFaq[0].classList.add("faqAtivo");
    jsFaq[0].nextElementSibling.classList.add("faqAtivo");

    function faqLista() {
      this.classList.add("faqAtivo");
      this.nextElementSibling.classList.toggle("faqAtivo");
    }

    jsFaq.forEach((item) => {
      item.addEventListener("click", faqLista);
    });
  }
}

iniciarLista();

function scrollSuave() {
  const links = document.querySelectorAll(".js-menu a[href^='#']");

  if (links.length) {
    function scroll(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const sessao = document.querySelector(href);
      sessao.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    links.forEach((link) => {
      link.addEventListener("click", scroll);
    });
  }
}

scrollSuave();

function scrollAnimado() {
  const sessoes = document.querySelectorAll(".js-scroll");
  const janelaMetadde = window.innerHeight * 0.75;
  if (sessoes.length) {
    function animaScroll() {
      sessoes.forEach((sessao) => {
        const sessaoTopo = sessao.getBoundingClientRect().top - janelaMetadde;
        if (sessaoTopo < 0) {
          sessao.classList.add("animar");
        } else {
          sessao.classList.remove("animar");
        }
      });
    }
  }

  window.addEventListener("scroll", animaScroll);
}

scrollAnimado();
