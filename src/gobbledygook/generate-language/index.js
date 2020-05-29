import { makePhonemeSet } from "./make-phonology";
import makeMorphology from "./make-morphology";
import makeDictionary from "./make-dictionary";

export function generateLanguage() {
  const phonology = {
    vowels: makePhonemeSet("vowels"),
    consonants: makePhonemeSet("consonants")
  };
  const morphology = makeMorphology(phonology);
  const morphemeDictionary = makeDictionary(phonology);

  return {
    phonology,
    morphology,
    morphemeDictionary
  };
}
