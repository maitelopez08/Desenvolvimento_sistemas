document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("meuForm");
  var msg = document.getElementById("mensagem-erro");

  form.addEventListener("submit", function (event) {
    msg.style.color = "red";
    msg.textContent = ""; // limpa mensagens anteriores

    var numeroComanda = document.getElementById("numeroComanda").value.trim();
    var categoriaProduto = document.getElementById("categoriaProduto").value.trim();
    var categoria = document.getElementById("categoria").value.trim();
    var nomeProduto = document.getElementById("nomeProduto").value.trim();
    var quantidade = document.getElementById("quantidade").value.trim();
    var preco = document.getElementById("preco").value.trim();
    var unidade = document.querySelectorAll('input[name="unidade"]');

    if (numeroComanda === "") {
      msg.textContent = "Preencha o campo Número da Comanda.";
      event.preventDefault();
      return;
    }

    if (categoriaProduto === "") {
      msg.textContent = "Selecione uma opção em Id do Produto.";
      event.preventDefault();
      return;
    }

    if (categoria === "") {
      msg.textContent = "Preencha o campo Categoria.";
      event.preventDefault();
      return;
    }

    if (nomeProduto === "") {
      msg.textContent = "Preencha o campo Nome do Produto.";
      event.preventDefault();
      return;
    }

    if (quantidade === "") {
      msg.textContent = "Preencha o campo Quantidade.";
      event.preventDefault();
      return;
    }

    if (preco === "") {
      msg.textContent = "Preencha o campo Preço.";
      event.preventDefault();
      return;
    }

    let unidadeSelecionada = false;
    for (let i = 0; i < unidade.length; i++) {
      if (unidade[i].checked) {
        unidadeSelecionada = true;
        break;
      }
    }

    if (!unidadeSelecionada) {
      msg.textContent = "Selecione a unidade: Un ou Kg.";
      event.preventDefault();
      return;
    }

    // Se todos passaram
    msg.style.color = "green";
    msg.textContent = "Formulário válido! Enviando...";
  });
});
