// Lógica principal do cardápio.

// 1. Encontra no HTML a caixa onde os cards vão ficar
const listaItens = document.getElementById('lista-itens');

// 2. Transforma um número (18.9) em texto de dinheiro ("R$ 18,90")
function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// 3. Monta o HTML de UM card a partir de UM item
function criarCard(item) {
  return `
    <article class="card">
      <img src="${item.imagem}" alt="${item.nome}">
      <div class="card-info">
        <h2>${item.nome}</h2>
        <p>${item.descricao}</p>
        <strong>${formatarPreco(item.preco)}</strong>
      </div>
    </article>
  `;
}

// 4. Percorre a lista de itens e coloca todos os cards na tela
function mostrarItens(itens) {
  let html = '';

  itens.forEach(function (item) {
    html += criarCard(item);
  });

  listaItens.innerHTML = html;
}

// 5. Devolve só os itens da categoria escolhida ("todos" devolve a lista inteira)
function filtrarPorCategoria(categoria) {
  if (categoria === 'todos') {
    return itensCardapio;
  }

  return itensCardapio.filter(function (item) {
    return item.categoria === categoria;
  });
}

// 6. Faz cada botão de categoria "escutar" o clique
const botoesCategoria = document.querySelectorAll('.categoria');

botoesCategoria.forEach(function (botao) {
  botao.addEventListener('click', function () {
    // tira o destaque de todos os botões...
    botoesCategoria.forEach(function (outroBotao) {
      outroBotao.classList.remove('ativa');
    });
    // ...e coloca só no botão clicado
    botao.classList.add('ativa');

    // lê o data-categoria do botão e mostra os itens filtrados
    const categoria = botao.dataset.categoria;
    mostrarItens(filtrarPorCategoria(categoria));
  });
});

// 7. Começa tudo: mostra o cardápio completo
mostrarItens(itensCardapio);
