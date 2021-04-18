import { random, randomWithCoef } from "../util/random";

let existingWords = [];

export function resetExistingWords () {
  existingWords = [];
}
export function makeMorpheme(phonology, length, checkExisting = true, tries = 0) {
  const morpheme = [];

  const phonemeTypes = ["vowels", "consonants"];
  let nextPhoneme = Math.round(random());

  if (length === 1) {
    nextPhoneme = 0;
  }

  for (let i = 0; i < length; i += 1) {
    const phonemeType = phonemeTypes[nextPhoneme];

    morpheme.push(randomWithCoef(phonology[phonemeType]));

    nextPhoneme = (nextPhoneme + 1) % 2;
  }

  const generatedMorpheme = morpheme.join("");

  if (generatedMorpheme === "") {
    return generatedMorpheme;
  }

  if (existingWords.includes(generatedMorpheme)) {
    let newLength = length;
    if (tries > 4) {
      newLength += 1;
    }
    return makeMorpheme(phonology, newLength, checkExisting, tries + 1);
  }

  existingWords.push(generatedMorpheme);
  return generatedMorpheme;
}
