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
