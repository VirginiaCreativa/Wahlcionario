export function capitalizefirstletter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function eliminardiacriticos(texto) {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}
