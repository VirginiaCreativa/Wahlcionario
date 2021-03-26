function setLexicalCategorySpanich(word) {
  let lexica;
  switch (word) {
    case 'Verb':
      lexica = {
        lexica: 'verbo',
        signfica: 'querer, ver, pedir, traer',
      };
      break;
    case 'Adjective':
      lexica = {
        lexica: 'verbo',
        signfica: 'pequeño, grande, imaginario, posible',
      };
      break;
    case 'Adverbio':
      lexica = {
        lexica: 'verbo',
        signfica: 'tarde, mucho, todavia, claro',
      };
      break;
    case 'Noun':
      lexica = {
        lexica: 'verbo',
        signfica: 'juan, bicicleta, arbol, lingüista',
      };
      break;

    default:
      break;
  }
  return lexica;
}

export default setLexicalCategorySpanich;
