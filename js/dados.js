// Itens do cardápio do Café Aconchego.
// Para adicionar um item novo, copie um dos blocos { ... } e altere os valores.
// Atenção: o "id" precisa ser único (não pode repetir).

const itensCardapio = [
  {
    id: 1,
    nome: 'Cappuccino Artesanal',
    descricao: 'Espresso duplo com leite vaporizado cremoso e leve toque de canela.',
    preco: 18.90,
    imagem: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80',
    categoria: 'cafes'
  },
  {
    id: 2,
    nome: 'Latte de Baunilha',
    descricao: 'Espresso suave com calda artesanal de baunilha e leite vaporizado.',
    preco: 20.00,
    imagem: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&q=80',
    categoria: 'cafes'
  },
  {
    id: 3,
    nome: 'Tosta de Abacate & Ovo',
    descricao: 'Pão artesanal tostado com creme de abacate, ovo pochê e gergelim.',
    preco: 32.90,
    imagem: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&q=80',
    categoria: 'sanduiches'
  },
  {
    id: 4,
    nome: 'Bolo de Framboesa',
    descricao: 'Fatia de bolo em camadas com creme suave e framboesas frescas.',
    preco: 18.00,
    imagem: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80',
    categoria: 'doces'
  },
  {
    id: 5,
    nome: 'Limonada Suíça',
    descricao: 'Limonada cremosa batida com leite condensado e raspas de limão.',
    preco: 16.90,
    imagem: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80',
    categoria: 'bebidas'
  },
  {
    id: 6,
    nome: 'Cheesecake de Frutas Vermelhas',
    descricao: 'Cheesecake cremoso com calda caseira de frutas vermelhas.',
    preco: 22.90,
    imagem: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80',
    categoria: 'doces'
  },
  {
    id: 7,
    nome: 'Cold Brew com Laranja',
    descricao: 'Café extraído a frio por 18 horas, servido com gelo e rodela de laranja.',
    preco: 19.90,
    imagem: 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=600&q=80',
    categoria: 'cafes'
  },
  {
    id: 8,
    nome: 'Matcha Latte',
    descricao: 'Chá verde matcha japonês batido com leite vaporizado e cremoso.',
    preco: 22.00,
    imagem: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80',
    categoria: 'cafes'
  },
  {
    id: 9,
    nome: 'Misto Quente na Chapa',
    descricao: 'Pão de forma dourado na chapa com presunto e queijo derretido.',
    preco: 24.90,
    imagem: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80',
    categoria: 'sanduiches'
  },
  {
    id: 10,
    nome: 'Croissant Amanteigado',
    descricao: 'Croissant folhado assado na hora, crocante por fora e macio por dentro.',
    preco: 14.90,
    imagem: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
    categoria: 'sanduiches'
  },
  {
    id: 11,
    nome: 'Wrap de Frango',
    descricao: 'Tortilha recheada com frango desfiado, repolho roxo, cenoura e coentro.',
    preco: 31.90,
    imagem: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80',
    categoria: 'sanduiches'
  },
  {
    id: 12,
    nome: 'Waffle com Mirtilos',
    descricao: 'Waffle crocante servido com mirtilos frescos e mel.',
    preco: 26.90,
    imagem: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80',
    categoria: 'doces'
  },
  {
    id: 13,
    nome: 'Frappé de Chocolate com Cookie',
    descricao: 'Bebida gelada de chocolate com chantilly, calda e cookie crocante.',
    preco: 23.90,
    imagem: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80',
    categoria: 'bebidas'
  },
  {
    id: 14,
    nome: 'Chá Gelado de Limão',
    descricao: 'Chá preto gelado com limão e hortelã. Leve e refrescante.',
    preco: 15.90,
    imagem: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
    categoria: 'bebidas'
  },
  {
    id: 15,
    nome: 'Eggs Benedict',
    descricao: 'Pão tostado com ovo pochê e molho holandês cremoso.',
    preco: 42.90,
    imagem: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&q=80',
    categoria: 'especiais'
  },
  {
    id: 16,
    nome: 'Panquecas Americanas',
    descricao: 'Pilha de panquecas fofinhas com banana, hortelã e calda de mel.',
    preco: 38.00,
    imagem: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
    categoria: 'especiais'
  },
  {
    id: 17,
    nome: 'Salada de Abacate e Romã',
    descricao: 'Folhas verdes, abacate, romã, salmão defumado e sementes.',
    preco: 36.90,
    imagem: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&q=80',
    categoria: 'especiais'
  }
];
