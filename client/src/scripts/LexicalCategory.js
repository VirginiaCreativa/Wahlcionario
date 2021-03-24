function setLexicalCategorySpanich(word) {
  let result;
  switch (word) {
    case 'verb':
      result = 'verbo';
      break;
    case 'adjective':
      result = 'adjetivo';
      break;
    case 'adverbio':
      result = 'adjetivo';
      break;
    case 'noun':
      result = 'sustantivo';
      break;

    default:
      break;
  }
  return result;
}

export default setLexicalCategorySpanich;
