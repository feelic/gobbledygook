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
  conjunctions,
  relativePronouns,
} from "../constants/dictionary-base";
import { makeMorpheme } from "./make-morpheme";
import { gaussian, randomFromArray } from "../util/random";
import { GroupsType, Morpheme, PhonologyType, tPosCode } from "../interfaces";

export default function makeDictionary(
  phonology: PhonologyType,
  groups: GroupsType
) {
  const morphemes: Array<string> = [];

  function makeMorphemesFromDictionary(
    dictionaryBase: Array<string>,
    morphemeLengthLaw: Function,
    min = 1,
    posType: tPosCode
  ) {
    return dictionaryBase.reduce((dict, meaning) => {
      const morpheme = makeNewMorpheme(
        phonology,
        morphemes,
        morphemeLengthLaw,
        min
      );
      morphemes.push(morpheme);

      const properties = getGroups(groups, posType);
      return {
        ...dict,
        [meaning]: {
          morpheme,
          type: posType,
          ...properties,
        },
      };
    }, {});
  }

  return {
    ...makeMorphemesFromDictionary(family, gaussian(1.5, 1.5), 2, "N"),
    ...makeMorphemesFromDictionary(animals, gaussian(2, 2), 2, "N"),
    ...makeMorphemesFromDictionary(foods, gaussian(3, 2.5), 2, "N"),
    ...makeMorphemesFromDictionary(auxiliaries, gaussian(0.5, 1.5), 1, "V"),
    ...makeMorphemesFromDictionary(actions, gaussian(1, 1.7), 2, "V"),
    ...makeMorphemesFromDictionary(
      interrogativeWords,
      gaussian(0.5, 1.2),
      1,
      "Int"
    ),
    ...makeMorphemesFromDictionary(conjunctions, gaussian(0.5, 1.2), 1, "Con"),
    ...makeMorphemesFromDictionary(
      relativePronouns,
      gaussian(0.5, 1.2),
      1,
      "Pro"
    ),
    ...makeMorphemesFromDictionary(places, gaussian(2.5, 1.2), 1, "N"),
    ...makeMorphemesFromDictionary(things, gaussian(2, 1), 2, "N"),
    ...makeMorphemesFromDictionary(colors, gaussian(1.5, 1.2), 1, "Adj"),
    ...makeMorphemesFromDictionary(adjectives, gaussian(1.5, 1.5), 2, "Adj"),
    ...makeMorphemesFromDictionary(adverbs, gaussian(2.5, 1.2), 2, "Adv"),
  };
}

function makeNewMorpheme(
  phonology: PhonologyType,
  morphemes: Array<string>,
  morphemeLengthLaw: Function,
  min: number
): string {
  let morpheme = makeMorpheme(phonology, Math.abs(morphemeLengthLaw()) + min);

  if (morphemes.includes(morpheme)) {
    return makeNewMorpheme(phonology, morphemes, morphemeLengthLaw, min);
  }

  return morpheme;
}

function getGroups(groups: GroupsType, posType: tPosCode) {
  const { declensionGroups, conjugationGroups, genders } = groups;
  const properties: Record<string, string> = {};
  switch (posType) {
    case "N":
      if (declensionGroups) {
        properties.declensionGroup = randomFromArray(declensionGroups);
      }
      if (genders) {
        properties.gender = randomFromArray(genders);
      }
      break;
    case "Adj":
      if (declensionGroups) {
        properties.declensionGroup = randomFromArray(declensionGroups);
      }
      break;
    case "V":
      if (conjugationGroups) {
        properties.conjugationGroup = randomFromArray(conjugationGroups);
      }
      break;
    default:
      break;
  }
  return properties;
}
