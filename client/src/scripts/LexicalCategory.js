function setLexicalCategorySpanich(word) {
  let lexica;
  switch (word) {
    case 'Verb':
      lexica = 'Verbo';
      break;
    case 'Adjective':
      lexica = 'Adjectivo';
      break;
    case 'Adverbio':
      lexica = 'Adverb';
      break;
    case 'Noun':
      lexica = 'Sustantivo';
      break;

    default:
      break;
  }
  return lexica;
}

export default setLexicalCategorySpanich;
