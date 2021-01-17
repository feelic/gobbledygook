import { makePhonemeSet } from "./make-phonology";
import { makeMorpheme } from "./make-morpheme";
import makeDictionary from "./make-dictionary";
import { gaussian, random, randomFromArray, randomWithCoef } from "../util/random";

export function generateLanguage() {
  const phonology = {
    vowels: makePhonemeSet("vowels"),
    consonants: makePhonemeSet("consonants"),
  };
  const morphemeDictionary = makeDictionary(phonology);

  //name
  const name = makeMorpheme(phonology, gaussian(2.5, 1.2)() + 1);

  const morphologyType = makeMorphologyType();
  const genders = makeGenders();
  const caseSystem = makeCaseSystem(morphologyType);
  const pronouns = makePronouns(phonology);

  //determiners: "determination.type", "owner.person", "owner.gender", "gender", "number",
  const determiners = {
    properNoun: {
      definite: {},
      indefinite: {},
      possessive: {},
    },
  };
  // declension: "type", "declensionGroup", "grammaticalCase", "gender", "number"
  const declension = {
    default: {},
    adjective: {},
  };
  //conjugation: "group", "tense", "person", "number"
  const conjugation = {
    // we'll keep only one group for the moment
    default: {},
  };

  const nounPhraseFormation = "";
  const verbPhraseFormation = "";
  const sentenceFormation = makeSentenceFormation();
  const adjectiveClauseFormation = "";
  const adjectiveFormation = "";
  const adjectives = { preadjectives: [], postadjectives: [] };
  const comparative = {};
  const superlative = {};
  const numbers = { digits: [], unitFormation: {}, formation: "" };

  const language = {
    name,
    morphologyType,
    caseSystem,
    genders,
    pronouns,
    determiners,
    declension,
    conjugation,
    morphemeDictionary,
    nounPhraseFormation,
    verbPhraseFormation,
    sentenceFormation,
    adjectiveClauseFormation,
    adjectiveFormation,
    adjectives,
    comparative,
    superlative,
    numbers,
    ...phonology,
  };

  console.log(language);
  return language;
}
function makeMorphologyType() {
  return randomFromArray([
    "inflectional",
    "semiFlectional",
    "isolating",
    // "agglutinative", i'll do that later
  ]);
}
function makeGenders() {
  const genderSystems = [
    ["default", "masc"],
    ["default", "fem"],
    ["default", "masc", "fem"],
  ];

  // grammatical genders only occur in 40% of languages
  if (random() > 0.4) {
    return ["default"];
  }

  return randomFromArray(genderSystems);
}

function makeCaseSystem(morphologyType) {
  const grammaticalCases = [
    "nominative",
    "vocative",
    "accusative",
    "dative",
    "genitive",
    "lative",
    "instrumental",
  ];
  const caseSystem = {};

  grammaticalCases.forEach((grammaticalCase) => {});

  return caseSystem;
}
function makeSentenceFormation() {
  const wordOrders = {
    SOV: { weight: 45 }, // SOV "She him loves." 45%
    SVO: { weight: 45 }, // SVO "She loves him." 45%
    VSO: { weight: 5 }, // VSO "Loves she him." 5%
    VOS: { weight: 5 } // VOS "Loves him she." 5%
  };
  const wordOrdersTemplates = {
    SOV: "{subject} {object} {verb}",
    SVO: "{subject} {verb} {object}",
    VSO: "{verb} {subject} {object}",
    VOS: "{verb} {object} {subject}"
  };
  const wordOrder = randomWithCoef(wordOrders);

  return wordOrdersTemplates[wordOrder];
}
function makePronouns(phonology) {
  //pronouns: "person", "grammaticalCase", "gender", "number"
  const persons = ["firstPerson", "secondPerson", "thirdPerson"];

  const pronouns = {};

  persons.forEach((person) => {
    pronouns[person] = "coucou";
  });
}
