function setLexicalCategorySpanich(word) {
  let lexica;
  let define;
  switch (word) {
    case 'Verb':
      lexica = {
        text: 'Verbo',
        define: 'Querer, ver, pedir, traer',
      };
      break;
    case 'Adjective':
      lexica = {
        text: 'Adjectivo',
        define: 'Pequeño, grande, imaginario, posibleo',
      };
      break;
    case 'Adverb':
      lexica = {
        text: 'Adverbio',
        define: 'Tarde, mucho, todavia, claro',
      };
      break;
    case 'Noun':
      lexica = {
        text: 'Sustantivo',
        define: 'Juan, bicicleta, árbol, abogado',
      };

      break;

    default:
      break;
  }
  return lexica;
}

export default setLexicalCategorySpanich;
