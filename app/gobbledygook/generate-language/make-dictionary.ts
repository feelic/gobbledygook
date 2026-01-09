import {
  persons,
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
  geography,
  monsters
} from "../constants/dictionary-base";
import { makeMorpheme } from "./make-morpheme";
import { gaussian, randomFromArray } from "../util/random";
import { GroupsType, Morpheme, PhonologyType } from "../interfaces";
import { PosCode } from "../constants/grammar";

export default function makeDictionary(
  phonology: PhonologyType,
  groups: GroupsType
) {
  const morphemes: Array<string> = [];

  function makeMorphemesFromDictionary(
    dictionaryBase: Array<string>,
    morphemeLengthLaw: Function,
    min = 1,
    posType: PosCode
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
    ...makeMorphemesFromDictionary(persons, gaussian(1.5, 1.5), 2, PosCode.Noun),
    ...makeMorphemesFromDictionary(animals, gaussian(2, 2), 2, PosCode.Noun),
    ...makeMorphemesFromDictionary(foods, gaussian(3, 2.5), 2, PosCode.Noun),
    ...makeMorphemesFromDictionary(auxiliaries, gaussian(0.5, 1.5), 1, PosCode.Verb),
    ...makeMorphemesFromDictionary(actions, gaussian(1, 1.7), 2, PosCode.Verb),
    ...makeMorphemesFromDictionary(
      interrogativeWords,
      gaussian(0.5, 1.2),
      1,
      PosCode.Interrogative
    ),
    ...makeMorphemesFromDictionary(conjunctions, gaussian(0.5, 1.2), 1, PosCode.Conjunction),
    ...makeMorphemesFromDictionary(
      relativePronouns,
      gaussian(0.5, 1.2),
      1,
      PosCode.Pronoun
    ),
    ...makeMorphemesFromDictionary(places, gaussian(2.5, 1.2), 1, PosCode.Noun),
    ...makeMorphemesFromDictionary(things, gaussian(2, 1), 2, PosCode.Noun),
    ...makeMorphemesFromDictionary(colors, gaussian(1.5, 1.2), 1, PosCode.Adjective),
    ...makeMorphemesFromDictionary(adjectives, gaussian(1.5, 1.5), 2, PosCode.Adjective),
    ...makeMorphemesFromDictionary(adverbs, gaussian(2.5, 1.2), 2, PosCode.Adverb),
    ...makeMorphemesFromDictionary(geography, gaussian(2, 1.2), 1, PosCode.Noun),
    ...makeMorphemesFromDictionary(monsters, gaussian(3, 1.2), 3, PosCode.Noun),
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

function getGroups(groups: GroupsType, posType: PosCode) {
  const { declensionGroups, conjugationGroups, genders } = groups;
  const properties: Record<string, string> = {};
  switch (posType) {
    case PosCode.Noun:
      if (declensionGroups) {
        properties.declensionGroup = randomFromArray(declensionGroups);
      }
      if (genders) {
        properties.gender = randomFromArray(genders);
      }
      break;
    case PosCode.Adjective:
      if (declensionGroups) {
        properties.declensionGroup = randomFromArray(declensionGroups);
      }
      break;
    case PosCode.Verb:
      if (conjugationGroups) {
        properties.conjugationGroup = randomFromArray(conjugationGroups);
      }
      break;
    default:
      break;
  }
  return properties;
}
