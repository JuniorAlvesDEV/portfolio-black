export default function formulario() {
  const form = document.querySelector("form");
  const btn = document.querySelector("form button");

  function formEviado(resposta) {
    if (resposta.ok) {
      form.classList.add("envio");
      form.innerHTML = '<p class="texto-form">Enviado com sucesso</p>';
    } else {
      form.classList.add("envio");
      form.innerHTML =
        '<p class="texto-form">Erro ao enviar, entre em contato via WhatsApp ou Email</p>';
    }
  }

  function enviarForm(event) {
    event.preventDefault();
    btn.disabled = true;
    btn.innerText = "Enviando...";

    const data = new FormData(form);

    fetch("./enviar.php", {
      method: "POST",
      body: data,
    }).then(formEviado);
  }

  form.addEventListener("submit", enviarForm);
}
