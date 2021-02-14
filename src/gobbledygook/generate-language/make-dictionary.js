import {
  family,
  animals,
  foods,
  auxiliaries,
  actions,
  interrogativeWords,
  colors,
  adjectives,
  places,
  things,
  adverbs,
  utilities,
} from "../constants/dictionary-base";
import { makeMorpheme } from "./make-morpheme";
import { gaussian } from "../util/random";

export default function makeDictionary(phonology, morphology) {
  const morphemes = [];
  function makeMorphemesFromDictionary(dictionary, morphemeLengthLaw, min = 1) {
    return dictionary.reduce((dictionary, meaning) => {
      const morpheme = makeNewMorpheme(phonology, morphemes, morphemeLengthLaw, min = 1)

      morphemes.push(morpheme);
      return {
        ...dictionary,
        [meaning]: {
          morpheme
        },
      };
    }, {});
  }

  const dictionaryBase = {
    ...makeMorphemesFromDictionary(family, gaussian(1.5, 1.5), 2),
    ...makeMorphemesFromDictionary(animals, gaussian(2, 2), 2),
    ...makeMorphemesFromDictionary(foods, gaussian(3, 2.5), 2),
    ...makeMorphemesFromDictionary(auxiliaries, gaussian(0.5, 1.5)),
    ...makeMorphemesFromDictionary(actions, gaussian(0.5, 1.7), 2),
    ...makeMorphemesFromDictionary(interrogativeWords, gaussian(0.5, 1.2)),
    ...makeMorphemesFromDictionary(places, gaussian(2.5, 1.2)),
    ...makeMorphemesFromDictionary(things, gaussian(2, 1.2)),
    ...makeMorphemesFromDictionary(colors, gaussian(1.5, 1.2)),
    ...makeMorphemesFromDictionary(adjectives, gaussian(1.5, 1.5), 2),
    ...makeMorphemesFromDictionary(adverbs, gaussian(2.5, 1.2), 2),
    ...makeMorphemesFromDictionary(utilities, gaussian(1.5, 1.2)),
  };

  return dictionaryBase;
}

function makeNewMorpheme(phonology, morphemes, morphemeLengthLaw, min) {
  let morpheme = makeMorpheme(
    phonology,
    Math.abs(morphemeLengthLaw()) + min
  )

  if (morphemes.includes(morpheme)) {
    return makeNewMorpheme(phonology, morphemes, morphemeLengthLaw, min)
  }

  return morpheme;
}
