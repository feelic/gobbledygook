export function transliterate(lang, word) {
  return word
    .map(
      phoneme =>
        (lang.vowels[phoneme] && lang.vowels[phoneme].translit) ||
        (lang.consonants[phoneme] && lang.consonants[phoneme].translit)
    )
    .join("");
}
