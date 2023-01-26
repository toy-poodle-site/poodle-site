export function toKebabCase(word: string): string {
  return word.toLowerCase().split(' ').join('-');
}
