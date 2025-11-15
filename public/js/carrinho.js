
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ carrinho.js carregado com sucesso");
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  const lista = document.getElementById("lista-carrinho");
  const totalSpan = document.getElementById("total");
  const finalizarBtn = document.getElementById("finalizar");


  function atualizarCarrinho() {
    if (!lista || !totalSpan) return;

    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${item.nome} - R$ ${item.preco.toFixed(2)} 
        <button class="remover-item" data-index="${index}">🗑️</button>
      `;
      lista.appendChild(li);
      total += item.preco;
    });

    totalSpan.textContent = total.toFixed(2);

  
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

 
    const botoesRemover = document.querySelectorAll(".remover-item");
    botoesRemover.forEach(botao => {
      botao.addEventListener("click", () => {
        const index = botao.dataset.index;
        removerDoCarrinho(index);
      });
    });
  }

  function adicionarAoCarrinho(nome, preco) {
    preco = parseFloat(preco);
    if (isNaN(preco)) {
      console.error("Preço inválido:", preco);
      return;
    }
    carrinho.push({ nome, preco });
    atualizarCarrinho();
  }


  function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
  }

 
  function finalizarCompra() {
    if (carrinho.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
    localStorage.setItem("total", total.toFixed(2));
    window.location.href = "pagamento.html";
  }


  const botoes = document.querySelectorAll(".add-carrinho");
  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const nome = botao.dataset.nome;
      const preco = botao.dataset.preco;
      adicionarAoCarrinho(nome, preco);
    });
  });

  if (finalizarBtn) {
    finalizarBtn.addEventListener("click", finalizarCompra);
  }

  atualizarCarrinho();
});
