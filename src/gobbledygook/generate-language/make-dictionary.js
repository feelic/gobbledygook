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
import { gaussian, randomFromArray } from "../util/random";

export default function makeDictionary(phonology, groups) {
  const morphemes = [];

  function makeMorphemesFromDictionary(
    dictionary,
    morphemeLengthLaw,
    min = 1,
    posType
  ) {
    return dictionary.reduce((dictionary, meaning) => {
      const morpheme = makeNewMorpheme(
        phonology,
        morphemes,
        morphemeLengthLaw,
        min
      );
      morphemes.push(morpheme);

      const properties = getGroups(groups, posType);
      return {
        ...dictionary,
        [meaning]: {
          morpheme,
          type: posType,
          ...properties,
        },
      };
    }, {});
  }

  const dictionaryBase = {
    ...makeMorphemesFromDictionary(family, gaussian(1.5, 1.5), 2, "noun"),
    ...makeMorphemesFromDictionary(animals, gaussian(2, 2), 2, "noun"),
    ...makeMorphemesFromDictionary(foods, gaussian(3, 2.5), 2, "noun"),
    ...makeMorphemesFromDictionary(auxiliaries, gaussian(0.5, 1.5), 1, "verb"),
    ...makeMorphemesFromDictionary(actions, gaussian(1, 1.7), 2, "verb"),
    ...makeMorphemesFromDictionary(interrogativeWords, gaussian(0.5, 1.2), 1, "util"),
    ...makeMorphemesFromDictionary(places, gaussian(2.5, 1.2), 1, "noun"),
    ...makeMorphemesFromDictionary(things, gaussian(2, 1), 2, "noun"),
    ...makeMorphemesFromDictionary(colors, gaussian(1.5, 1.2), 1, "adjective"),
    ...makeMorphemesFromDictionary(
      adjectives,
      gaussian(1.5, 1.5),
      2,
      "adjective"
    ),
    ...makeMorphemesFromDictionary(adverbs, gaussian(2.5, 1.2), 2, "adverb"),
    ...makeMorphemesFromDictionary(utilities, gaussian(1.5, 1.2), 1),
  };

  return dictionaryBase;
}

function makeNewMorpheme(phonology, morphemes, morphemeLengthLaw, min) {
  let morpheme = makeMorpheme(phonology, Math.abs(morphemeLengthLaw()) + min);

  if (morphemes.includes(morpheme)) {
    return makeNewMorpheme(phonology, morphemes, morphemeLengthLaw, min);
  }

  return morpheme;
}

function getGroups(groups, posType) {
  const { declensionGroups, conjugationGroups, genders } = groups;
  const properties = {};
  switch (posType) {
    case "noun":
      if (declensionGroups) {
        properties.declensionGroup = randomFromArray(declensionGroups);
      }
      if (genders) {
        properties.gender = randomFromArray(genders);
      }
      break;
    case "adjective":
      if (declensionGroups) {
        properties.declensionGroup = randomFromArray(declensionGroups);
      }
      break;
    case "verb":
      if (conjugationGroups) {
        properties.conjugationGroup = randomFromArray(conjugationGroups);
      }
      break;
    default:
      break;
  }
  return properties;
}
