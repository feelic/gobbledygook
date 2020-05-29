import {
  family,
  animals,
  auxiliaries,
  actions,
  interrogativeWords
} from "../constants/dictionary-base";
import { makeMorpheme } from "./make-morpheme";
import { gaussian } from "../util/random";

export default function makeDictionary(phonology, morphology) {
  function makeMorphemesFromDictionary(dictionary, morphemeLengthLaw) {
    return dictionary.reduce((dictionary, meaning) => {
      return {
        ...dictionary,
        [meaning]: makeMorpheme(phonology, Math.abs(morphemeLengthLaw()) + 1)
      };
    }, {});
  }

  const dictionaryBase = {
    ...makeMorphemesFromDictionary(family, gaussian(1, 1.5)),
    ...makeMorphemesFromDictionary(animals, gaussian(1, 2)),
    ...makeMorphemesFromDictionary(auxiliaries, gaussian(0.5, 1.5)),
    ...makeMorphemesFromDictionary(actions, gaussian(0.5, 1.7)),
    ...makeMorphemesFromDictionary(interrogativeWords, gaussian(0.5, 1.2))
  };

  return dictionaryBase;
}
