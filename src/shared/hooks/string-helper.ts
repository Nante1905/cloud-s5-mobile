function firstLetterToUpperCase(str: string): string {
  if (!str) return ''; // Si la chaîne est vide, retourne une chaîne vide
  return str.charAt(0).toUpperCase();
}

export default firstLetterToUpperCase;
