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
- [ ] **v0.2 Visual e publicação:** cabeçalho com o nome do café, cards bonitos e
      responsivos (grid), cores e fontes da identidade. `git init`, criar o
      repositório no GitHub e **publicar no GitHub Pages**, para que cada versão
      seguinte já fique no ar.

### Navegação
- [ ] **v0.3 Categorias:** completar o array (cerca de 20 itens, 5 categorias, como na
      versão React). Abas "Todos / Cafés / Sanduíches / Doces / Bebidas / Especiais"
      filtram os cards.
- [ ] **v0.4 Busca:** campo de busca por nome ou descrição, combinado com a categoria
      escolhida. Mensagem de "nenhum item encontrado".

### Carrinho
- [ ] **v0.5 Carrinho básico:** botão "Adicionar" em cada card, contador no
      cabeçalho e lista com itens, quantidades (+/−) e total.
- [ ] **v0.6 Carrinho persistente:** salvar no `localStorage` (o carrinho não some ao
      recarregar a página), botão de remover item e de esvaziar o carrinho.

### Pedido
- [ ] **v0.7 Mesa via URL:** ler `?mesa=` com `URLSearchParams` e mostrar
      "Mesa 04" no cabeçalho.
- [ ] **v0.8 Pedido pelo WhatsApp:** montar a mensagem (mesa, itens, quantidades,
      total) e abrir `https://wa.me/<numero>?text=...` com `encodeURIComponent`.
- [ ] **v1.0 Portfólio:** README com prints, revisão geral (acessibilidade e
      celular), link no site harada-tecnologias.

### Extras (v1.x, em qualquer ordem)
- [ ] Modo escuro (botão + preferência do sistema + `localStorage`)
- [ ] Gerador de QR Code por mesa (biblioteca via CDN)
- [ ] Filtros alimentares: Vegano, Sem Glúten, Sem Lactose, Mais Pedidos
- [ ] Modal de produto com opções (tipo de leite, tamanho) e observações
- [ ] Botão "Chamar garçom / Pedir a conta" (simulado)
- [ ] Simulação de status do pedido: Recebido → Em preparo → Pronto

## Estado atual
- **v0.1 concluída:** `index.html`, `js/dados.js` (6 itens) e `js/app.js`
  (`mostrarItens(itens)` desenha os cards com `forEach` + template string).
- Ainda **sem CSS** e ainda **não é um repositório git**.
- Próximo passo: **v0.2** (git + primeiro commit, depois CSS e GitHub Pages).
