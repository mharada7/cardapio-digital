// Lógica principal do cardápio.

// 1. Encontra no HTML a caixa onde os cards vão ficar
const listaItens = document.getElementById('lista-itens');

// Estado: o que o cliente escolheu (muda conforme ele usa a página)
let categoriaAtual = 'todos';
let textoBusca = '';
let carrinho = [];  // cada linha: { id: 1, quantidade: 2 }

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
        <div class="card-rodape">
          <strong>${formatarPreco(item.preco)}</strong>
          <button type="button" class="botao-adicionar" data-id="${item.id}">+ Adicionar</button>
        </div>
      </div>
    </article>
  `;
}

// 4. Percorre a lista de itens e coloca todos os cards na tela
function mostrarItens(itens) {
  // lista vazia: mostra um aviso no lugar dos cards
  if (itens.length === 0) {
    listaItens.innerHTML = '<p class="sem-resultados">Nenhum item encontrado. 😕</p>';
    return;
  }

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

// 6. Devolve só os itens cujo nome ou descrição contém o texto buscado
function filtrarPorBusca(itens, texto) {
  if (texto === '') {
    return itens;
  }

  return itens.filter(function (item) {
    const nome = item.nome.toLowerCase();
    const descricao = item.descricao.toLowerCase();
    return nome.includes(texto) || descricao.includes(texto);
  });
}

// Redesenha a lista de acordo com o estado atual (categoria + busca)
function atualizarLista() {
  const daCategoria = filtrarPorCategoria(categoriaAtual);
  const resultado = filtrarPorBusca(daCategoria, textoBusca);
  mostrarItens(resultado);
}

// Faz o campo de busca "escutar" cada letra digitada
const campoBusca = document.getElementById('campo-busca');

campoBusca.addEventListener('input', function () {
  textoBusca = campoBusca.value.trim().toLowerCase();
  atualizarLista();
});

// 7. Faz cada botão de categoria "escutar" o clique
const botoesCategoria = document.querySelectorAll('.categoria');

botoesCategoria.forEach(function (botao) {
  botao.addEventListener('click', function () {
    // tira o destaque de todos os botões...
    botoesCategoria.forEach(function (outroBotao) {
      outroBotao.classList.remove('ativa');
    });
    // ...e coloca só no botão clicado
    botao.classList.add('ativa');

    // guarda a categoria escolhida e redesenha
    categoriaAtual = botao.dataset.categoria;
    atualizarLista();
  });
});

// 8. Carrinho: adiciona 1 unidade do item (ou cria a linha, se ainda não existir)
function adicionarAoCarrinho(id) {
  const linha = carrinho.find(function (linhaDoCarrinho) {
    return linhaDoCarrinho.id === id;
  });

  if (linha) {
    linha.quantidade = linha.quantidade + 1;
  } else {
    carrinho.push({ id: id, quantidade: 1 });
  }

  atualizarContador();
}

// Soma as quantidades de todas as linhas e mostra no botão flutuante
const botaoCarrinho = document.getElementById('botao-carrinho');
const contadorCarrinho = document.getElementById('contador-carrinho');

function atualizarContador() {
  let totalDeUnidades = 0;

  carrinho.forEach(function (linha) {
    totalDeUnidades = totalDeUnidades + linha.quantidade;
  });

  contadorCarrinho.textContent = totalDeUnidades;
  botaoCarrinho.hidden = totalDeUnidades === 0;  // esconde quando está vazio
}

// Um único "ouvinte" na lista cuida dos cliques em TODOS os botões "Adicionar"
listaItens.addEventListener('click', function (evento) {
  const botao = evento.target.closest('.botao-adicionar');
  if (!botao) {
    return;  // o clique não foi num botão "Adicionar": ignora
  }

  const id = Number(botao.dataset.id);  // "3" (texto) vira 3 (número)
  adicionarAoCarrinho(id);
});

// 9. Painel do carrinho
const painelCarrinho = document.getElementById('painel-carrinho');
const listaCarrinho = document.getElementById('lista-carrinho');
const totalCarrinho = document.getElementById('total-carrinho');
const botaoFechar = document.getElementById('fechar-carrinho');

// Acha o item completo (nome, preço...) no cardápio a partir do id
function buscarItem(id) {
  return itensCardapio.find(function (item) {
    return item.id === id;
  });
}

// Soma preço × quantidade de todas as linhas do carrinho
function calcularTotal() {
  return carrinho.reduce(function (soma, linha) {
    const item = buscarItem(linha.id);
    return soma + item.preco * linha.quantidade;
  }, 0);
}

// Desenha as linhas do carrinho e o total dentro do painel
function mostrarCarrinho() {
  // carrinho vazio: mostra um aviso no lugar das linhas
  if (carrinho.length === 0) {
    listaCarrinho.innerHTML = '<li class="carrinho-vazio">Seu carrinho está vazio. ☕</li>';
    totalCarrinho.textContent = formatarPreco(0);
    return;
  }

  let html = '';

  carrinho.forEach(function (linha) {
    const item = buscarItem(linha.id);
    html += `
      <li class="linha-carrinho">
        <div class="linha-info">
          <span>${item.nome}</span>
          <span class="linha-subtotal">${formatarPreco(item.preco * linha.quantidade)}</span>
        </div>
        <div class="controle-quantidade">
          <button type="button" class="botao-quantidade" data-acao="diminuir" data-id="${item.id}"
                  aria-label="Diminuir ${item.nome}">−</button>
          <span>${linha.quantidade}</span>
          <button type="button" class="botao-quantidade" data-acao="aumentar" data-id="${item.id}"
                  aria-label="Aumentar ${item.nome}">+</button>
        </div>
      </li>
    `;
  });

  listaCarrinho.innerHTML = html;
  totalCarrinho.textContent = formatarPreco(calcularTotal());
}

// Tira 1 unidade do item; se chegar a zero, remove a linha do carrinho
function diminuirDoCarrinho(id) {
  const linha = carrinho.find(function (linhaDoCarrinho) {
    return linhaDoCarrinho.id === id;
  });

  linha.quantidade = linha.quantidade - 1;

  if (linha.quantidade === 0) {
    // cria um carrinho novo com todas as linhas, MENOS a deste id
    carrinho = carrinho.filter(function (linhaDoCarrinho) {
      return linhaDoCarrinho.id !== id;
    });
  }

  atualizarContador();
}

// Um único "ouvinte" no painel cuida de todos os botões + e −
listaCarrinho.addEventListener('click', function (evento) {
  const botao = evento.target.closest('.botao-quantidade');
  if (!botao) {
    return;
  }

  const id = Number(botao.dataset.id);

  if (botao.dataset.acao === 'aumentar') {
    adicionarAoCarrinho(id);
  } else {
    diminuirDoCarrinho(id);
  }

  mostrarCarrinho();  // redesenha o painel com os valores novos
});

// Abrir e fechar o painel
botaoCarrinho.addEventListener('click', function () {
  mostrarCarrinho();
  painelCarrinho.showModal();
});

botaoFechar.addEventListener('click', function () {
  painelCarrinho.close();
});

// Clicar no fundo escuro (fora da caixa do painel) também fecha
painelCarrinho.addEventListener('click', function (evento) {
  if (evento.target === painelCarrinho) {
    painelCarrinho.close();
  }
});

// 10. Começa tudo: mostra o cardápio completo
atualizarLista();
