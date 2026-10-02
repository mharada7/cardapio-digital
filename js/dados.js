// Itens do cardápio do Café Aconchego.
// Para adicionar um item novo, copie um dos blocos { ... } e altere os valores.
// Atenção: o "id" precisa ser único (não pode repetir).
// Fotos: salve em img/itens/ (nome em minúsculas, sem acentos nem espaços,
// de preferência .webp com 600px de largura) e use o caminho em "imagem".

const itensCardapio = [
  {
    id: 1,
    nome: 'Cappuccino Artesanal',
    descricao: 'Espresso duplo com leite vaporizado cremoso e leve toque de canela.',
    preco: 18.90,
    imagem: 'img/itens/cappuccino-artesanal.webp',
    categoria: 'cafes'
  },
  {
    id: 2,
    nome: 'Latte de Baunilha',
    descricao: 'Espresso suave com calda artesanal de baunilha e leite vaporizado.',
    preco: 20.00,
    imagem: 'img/itens/latte-de-baunilha.webp',
    categoria: 'cafes'
  },
  {
    id: 3,
    nome: 'Tosta de Abacate & Ovo',
    descricao: 'Pão artesanal tostado com creme de abacate, ovo pochê e gergelim.',
    preco: 32.90,
    imagem: 'img/itens/tosta-de-abacate-e-ovo.webp',
    categoria: 'sanduiches'
  },
  {
    id: 4,
    nome: 'Bolo de Framboesa',
    descricao: 'Fatia de bolo em camadas com creme suave e framboesas frescas.',
    preco: 18.00,
    imagem: 'img/itens/bolo-de-framboesa.webp',
    categoria: 'doces'
  },
  {
    id: 5,
    nome: 'Limonada Suíça',
    descricao: 'Limonada cremosa batida com leite condensado e raspas de limão.',
    preco: 16.90,
    imagem: 'img/itens/limonada-suica.webp',
    categoria: 'bebidas'
  },
  {
    id: 6,
    nome: 'Cheesecake de Frutas Vermelhas',
    descricao: 'Cheesecake cremoso com calda caseira de frutas vermelhas.',
    preco: 22.90,
    imagem: 'img/itens/cheesecake-de-frutas-vermelhas.webp',
    categoria: 'doces'
  },
  {
    id: 7,
    nome: 'Cold Brew com Laranja',
    descricao: 'Café extraído a frio por 18 horas, servido com gelo e rodela de laranja.',
    preco: 19.90,
    imagem: 'img/itens/cold-brew-com-laranja.webp',
    categoria: 'cafes'
  },
  {
    id: 8,
    nome: 'Matcha Latte',
    descricao: 'Chá verde matcha japonês batido com leite vaporizado e cremoso.',
    preco: 22.00,
    imagem: 'img/itens/matcha-latte.webp',
    categoria: 'cafes'
  },
  {
    id: 9,
    nome: 'Misto Quente na Chapa',
    descricao: 'Pão de forma dourado na chapa com presunto e queijo derretido.',
    preco: 24.90,
    imagem: 'img/itens/misto-quente-na-chapa.webp',
    categoria: 'sanduiches'
  },
  {
    id: 10,
    nome: 'Croissant Amanteigado',
    descricao: 'Croissant folhado assado na hora, crocante por fora e macio por dentro.',
    preco: 14.90,
    imagem: 'img/itens/croissant-amanteigado.webp',
    categoria: 'sanduiches'
  },
  {
    id: 11,
    nome: 'Wrap de Frango',
    descricao: 'Tortilha recheada com frango desfiado, repolho roxo, cenoura e coentro.',
    preco: 31.90,
    imagem: 'img/itens/wrap-de-frango.webp',
    categoria: 'sanduiches'
  },
  {
    id: 12,
    nome: 'Waffle com Mirtilos',
    descricao: 'Waffle crocante servido com mirtilos frescos e mel.',
    preco: 26.90,
    imagem: 'img/itens/waffle-com-mirtilos.webp',
    categoria: 'doces'
  },
  {
    id: 13,
    nome: 'Frappé de Chocolate com Cookie',
    descricao: 'Bebida gelada de chocolate com chantilly, calda e cookie crocante.',
    preco: 23.90,
    imagem: 'img/itens/frappe-de-chocolate-com-cookie.webp',
    categoria: 'bebidas'
  },
  {
    id: 14,
    nome: 'Chá Gelado de Limão',
    descricao: 'Chá preto gelado com limão e hortelã. Leve e refrescante.',
    preco: 15.90,
    imagem: 'img/itens/cha-gelado-de-limao.webp',
    categoria: 'bebidas'
  },
  {
    id: 15,
    nome: 'Eggs Benedict',
    descricao: 'Pão tostado com ovo pochê e molho holandês cremoso.',
    preco: 42.90,
    imagem: 'img/itens/eggs-benedict.webp',
    categoria: 'especiais'
  },
  {
    id: 16,
    nome: 'Panquecas Americanas',
    descricao: 'Pilha de panquecas fofinhas com banana, hortelã e calda de mel.',
    preco: 38.00,
    imagem: 'img/itens/panquecas-americanas.webp',
    categoria: 'especiais'
  },
  {
    id: 17,
    nome: 'Salada de Abacate e Romã',
    descricao: 'Folhas verdes, abacate, romã, salmão defumado e sementes.',
    preco: 36.90,
    imagem: 'img/itens/salada-de-abacate-e-roma.webp',
    categoria: 'especiais'
  }
];
