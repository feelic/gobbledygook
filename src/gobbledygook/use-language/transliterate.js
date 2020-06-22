export function transliterate(lang, phrase) {
  const phonemes = {
    ...lang.vowels,
    ...lang.consonants
  };
  let translit = "";

  for (let i = 0; i < phrase.length; i += 1) {
    const currentTwoLetters = phrase[i] + phrase[i + 1];
    if (phonemes[currentTwoLetters] && phonemes[currentTwoLetters].translit) {
      translit += phonemes[currentTwoLetters].translit;
      i += 1;
      continue;
    }
    const currentLetter = phrase[i];
    if (phonemes[currentLetter] && phonemes[currentLetter].translit) {
      translit += phonemes[currentLetter].translit;
      continue;
    }
    translit += currentLetter;
  }
  return translit;
}
