# Café Aconchego: Cardápio Digital (HTML/CSS/JS puro)

## Sobre o projeto
Cardápio digital de **demonstração** de uma cafeteria fictícia, o "Café Aconchego".
O cliente lê um QR Code na mesa, navega pelo cardápio, monta o carrinho e envia o
pedido pelo WhatsApp.

- **Objetivo:** peça de portfólio do site https://mharada7.github.io/harada-tecnologias/
- **Hospedagem:** GitHub Pages (site estático)
- **Referência:** a versão antiga em React fica em `C:\ManausTecnologias\cardapio-react`.
  Ela serve **só de referência** de funcionalidades, dados (`src/data/menu.js`) e
  visual (`tailwind.config.js`). Não copiar código React.
- **Fora do escopo:** painel admin, login, backend.

## Regras técnicas
- Só **HTML + CSS + JavaScript puro** ("vanilla"). Sem React, sem Node, sem npm, sem
  build, sem Tailwind.
- Scripts carregados com `<script src="...">` comum (sem `type="module"`), na ordem
  certa (`dados.js` antes de `app.js`). Assim o site abre até com duplo clique no
  `index.html`.
- Uma biblioteca externa só entra se for realmente necessária (ex.: QR Code) e é
  carregada por CDN.
- Código, nomes de variáveis e comentários em **português**, simples e legíveis
  para um iniciante.
- Mobile first: o uso principal é no celular, na mesa.

## Identidade visual (herdada da versão React)
- Cores "café": `#fdf8f0` (fundo creme), `#d98a28` (caramelo/destaque),
  `#a4551a`, `#6c3919` (marrom escuro), `#3d1d0a` (quase preto).
- Fontes: **Playfair Display** (títulos) e **Inter** (texto), via Google Fonts.
- Cores definidas como variáveis CSS em `:root`, o que facilita o modo escuro depois.

## Estrutura de pastas (planejada)
```
cardapio-digital/
├── index.html     # estrutura da página
├── css/
│   └── style.css  # todo o visual
├── js/
│   ├── dados.js   # array com os itens do cardápio (fácil de editar)
│   └── app.js     # lógica: desenhar itens, filtros, carrinho, pedido
├── CLAUDE.md
└── README.md      # (depois) apresentação para o portfólio
```

## Como rodar
1. Abra a pasta `cardapio-digital` no VS Code.
2. Opção simples: dê duplo clique em `index.html` no Explorador de Arquivos.
3. Opção recomendada: instale a extensão **Live Server** (Ritwick Dey), clique com o
   botão direito em `index.html` e escolha **"Open with Live Server"**. A página
   recarrega sozinha a cada vez que você salva.
4. Para testar a mesa: acrescente `?mesa=04` ao final do endereço.

## Roadmap
Cada versão é pequena, testável e termina com um commit feito pelo Matheus.

### Base
- [x] **v0.1 Listar itens:** `index.html` + `dados.js` com um array de 4 a 6 itens
      (nome, descrição, preço, imagem, categoria). O `app.js` percorre o array e
      cria os cards na tela. Preço formatado em R$.
- [x] **v0.2 Visual e publicação:** cabeçalho com o nome do café, cards bonitos e
      responsivos (grid), cores e fontes da identidade. `git init`, criar o
      repositório no GitHub e **publicar no GitHub Pages**, para que cada versão
      seguinte já fique no ar.

### Navegação
- [x] **v0.3 Categorias:** completar o array (17 itens, 5 categorias, adaptados da
      versão React para combinar com as fotos). Abas "Todos / Cafés / Sanduíches / Doces / Bebidas / Especiais"
      filtram os cards.
- [x] **v0.4 Busca:** campo de busca por nome ou descrição, combinado com a categoria
      escolhida. Mensagem de "nenhum item encontrado".

### Carrinho
- [x] **v0.5 Carrinho básico:** botão "Adicionar" em cada card, botão flutuante
      com contador (no lugar do contador no cabeçalho) e painel `<dialog>` com
      itens, quantidades (+/−) e total.
- [x] **v0.6 Carrinho persistente:** salvar no `localStorage` (o carrinho não some ao
      recarregar a página) e botão de esvaziar o carrinho (remover um item já é
      feito pelo botão −).

### Pedido
- [x] **v0.7 Mesa via URL:** ler `?mesa=` com `URLSearchParams` e mostrar
      "Mesa 04" no cabeçalho.
- [x] **v0.8 Pedido pelo WhatsApp:** montar a mensagem (mesa, itens, quantidades,
      total) e abrir `https://wa.me/<numero>?text=...` com `encodeURIComponent`.
- [x] **v0.9 Modo retirada:** sem `?mesa=` na URL, o painel pede o nome do cliente
      e a mensagem vira "Retirada no balcão: <nome>". Com mesa, nada muda.
- [x] **v1.0 Portfólio:** fotos locais em WebP, favicon, descrição e Open Graph,
      README com prints, cartão no site harada-tecnologias (link `?mesa=7`).

### Extras (v1.x, em qualquer ordem)
- [x] v1.1 Assinatura "Cardápio digital desenvolvido por Harada Tecnologias" no rodapé
- [ ] Modo escuro (botão + preferência do sistema + `localStorage`)
- [ ] Gerador de QR Code por mesa (biblioteca via CDN)
- [ ] Filtros alimentares: Vegano, Sem Glúten, Sem Lactose, Mais Pedidos
- [ ] Busca que ignora acentos ("cafe" encontra "Café")
- [ ] Modal de produto com opções (tipo de leite, tamanho) e observações
- [ ] Botão "Chamar garçom / Pedir a conta" (simulado)
- [ ] Simulação de status do pedido: Recebido → Em preparo → Pronto

## Estado atual
- **v0.2 concluída e publicada:** https://mharada7.github.io/cardapio-digital/
  (repositório: https://github.com/mharada7/cardapio-digital, branch `main`,
  GitHub Pages servindo a raiz da `main`).
- **v0.3 concluída:** `js/dados.js` tem 17 itens (categorias: `cafes`,
  `sanduiches`, `doces`, `bebidas`, `especiais`). No `index.html`, os botões
  `<nav class="categorias">` usam `data-categoria` com esses mesmos valores (+ `todos`).
- **v0.4 concluída:** campo `<input type="search" id="campo-busca">` acima das
  categorias.
- `js/app.js`:
  - **Estado** no topo: `categoriaAtual` e `textoBusca`.
  - `atualizarLista()` é o único ponto que redesenha: aplica
    `filtrarPorCategoria(categoriaAtual)` e depois `filtrarPorBusca(itens, textoBusca)`
    (nome/descrição, `toLowerCase` + `includes`).
  - `mostrarItens(itens)` desenha os cards (`forEach` + template string) ou mostra a
    mensagem `.sem-resultados` quando a lista está vazia.
  - Eventos: `click` nos botões (move a classe `ativa`) e `input` no campo de busca.
    Os dois só atualizam o estado e chamam `atualizarLista()`.
- **v0.5 concluída (carrinho):**
  - Estado `carrinho = [{ id, quantidade }]`: guarda só o `id`. Nome e preço vêm
    sempre do `itensCardapio` via `buscarItem(id)` (fonte única da verdade).
  - `adicionarAoCarrinho(id)` (`find`: soma 1 ou cria a linha) e
    `diminuirDoCarrinho(id)` (tira 1; se chegar a 0, remove a linha com `filter`).
  - `atualizarContador()` atualiza o botão flutuante `#botao-carrinho` (some com
    `hidden` quando está vazio). `mostrarCarrinho()` desenha o `<dialog
    id="painel-carrinho">`. `calcularTotal()` usa `reduce`.
  - Cliques usam **delegação de eventos**: um ouvinte em `#lista-itens` (botões
    "Adicionar", com `data-id`) e outro em `#lista-carrinho` (botões +/−, com
    `data-acao` + `data-id`). `Number(dataset.id)` é obrigatório (o dataset é texto).
  - Regra: depois de mudar o estado, sempre redesenhar a tela.
- **v0.6 concluída (persistência):**
  - Toda mudança no carrinho chama `carrinhoMudou()` (= `salvarCarrinho()` +
    `atualizarContador()`).
  - `localStorage`, chave `CHAVE_CARRINHO = 'cafe-aconchego-carrinho'`, com
    `JSON.stringify`/`JSON.parse` dentro de `try/catch`. `carregarCarrinho()`
    descarta linhas cujo `id` não existe mais no cardápio.
  - Ao iniciar: `carregarCarrinho()` → `atualizarContador()` → `atualizarLista()`.
  - Botão `#esvaziar-carrinho` no painel, com `confirm()`; fica escondido com o
    carrinho vazio.
  - Elementos com `display` próprio que usam `hidden` precisam da regra
    `[hidden] { display: none; }` no CSS.
- **v0.7 concluída (mesa):**
  - `const numeroMesa = lerMesaDaUrl()` (`URLSearchParams`). Só aceita inteiros de
    1 a 99; caso contrário, `null`.
  - `mostrarMesa()` preenche `<p id="mesa">` no cabeçalho ("📍 Mesa 04", com
    `padStart`) ou deixa escondido.
  - **Segurança:** dado vindo de fora (URL, usuário) → validar + `textContent`,
    nunca `innerHTML` (XSS). `innerHTML` só com dados nossos (`dados.js`).
- `css/style.css`: variáveis de cor, cabeçalho, grade de cards (CSS Grid `auto-fill`
  + `minmax(250px, 1fr)`), botões-pílula de categoria, campo de busca, botão
  flutuante, painel do carrinho e pílula da mesa (seções numeradas de 1 a 14).
- Fotos ficam no projeto, em `img/itens/<nome-do-item>.webp` (600px, baixadas do
  Unsplash, licença livre). Antes de usar uma foto nova, conferir se ela combina
  com o item (a versão React tinha várias fotos trocadas).
- **v0.8 concluída (WhatsApp):**
  - `WHATSAPP_NUMERO` no topo do `app.js` (número do Matheus, escolhido por ele
    sabendo que fica público).
  - `montarMensagem(nomeCliente)` monta as linhas com `push` + `join('\n')`.
    O botão `#enviar-pedido` abre `wa.me` com `encodeURIComponent` via
    `window.open`. O carrinho **não** é esvaziado após o envio (não dá para saber
    se o cliente enviou de fato).
  - `formatarMesa(numero)` → "Mesa 04" (usada no cabeçalho e na mensagem).
- **v0.9 concluída (retirada):** sem mesa, o bloco `#dados-retirada` aparece no
  painel (com itens). O botão Enviar exige `#nome-cliente` preenchido (`trim`):
  se estiver vazio, mostra `#erro-nome` e dá `focus()` no campo. A mensagem traz
  "🛍️ Retirada no balcão: <nome>". O nome só vai para a mensagem, nunca para o HTML.
- **v1.0 concluída e no portfólio:**
  - Fotos locais em `img/itens/` (WebP).
  - `img/favicon.svg`, `meta description`, `theme-color` e tags Open Graph, com
    `img/compartilhar.jpg` (1200x630, URL absoluta no `og:image`).
  - `README.md` com prints em `img/readme/` (o print do WhatsApp foi recortado para
    não expor conversas pessoais).
  - Cartão no site harada-tecnologias (`C:\ManausTecnologias\site`), com link
    `?mesa=7`: o foco do Matheus é o cardápio visto na mesa pelo QR Code.
- Prints de celular: Edge headless + iframe de 390x844 (o headless tem largura
  mínima maior que a de um celular).
- **v1.1:** `<footer class="rodape">` numa linha: "Desenvolvido por Harada
  Tecnologias®", com link para `harada-tecnologias/#cardapios` (leva quem se
  interessar direto à oferta de cardápios). `.rodape-marca` = nome em negrito +
  `.marca-registrada` (® pequeno, `vertical-align: super`). Sem ícone: o Matheus
  testou o `</>` e preferiu tirar. Também há `<meta name="author">`.
  - Texto exato definido pelo Matheus, com **®** por escolha dele, informado de que
    ® indica registro concedido no INPI (sem registro, o adequado seria ™).
    Não alterar sem perguntar.
  O espaço para o botão flutuante (96px) agora fica no rodapé, e não no `main`.
  **Manter essa assinatura em todo cardápio feito para clientes.**
- Próximo passo: escolher entre os extras (v1.x).
