import { makePhonemeSet } from "./make-phonology";
import { makeMorpheme } from "./make-morpheme";
import makeDictionary from "./make-dictionary";
import makeDeclension from "./make-declension";
import makePronouns from "./make-pronouns";
import makeConjugation from "./make-conjugation";
import {
  gaussian,
  random,
  randomFromArray,
  randomWithCoef,
} from "../util/random";

export function generateLanguage() {
  const phonology = {
    vowels: makePhonemeSet("vowels"),
    consonants: makePhonemeSet("consonants"),
  };

  //name
  const name = makeMorpheme(phonology, gaussian(3, 1)() + 3);

  const morphologyType = makeMorphologyType();
  const genders = makeGenders();
  const caseSystem = makeCaseSystem(morphologyType);
  const cases = [...new Set(Object.values(caseSystem))];
  const pronouns = makePronouns(phonology, morphologyType, cases, genders);
  const determiners = makeDeterminers(
    phonology,
    morphologyType,
    cases,
    genders
  );

  const declension = makeDeclension(phonology, morphologyType, cases, genders);
  const conjugation = makeConjugation(phonology, morphologyType);

  const morphemeDictionary = makeDictionary(phonology, {
    genders,
    declensionGroups: declension.declensionGroups,
    conjugationGroups: conjugation.conjugationGroups,
  });

  const sentenceFormations = makeSentenceFormations();
  const {
    nounPhraseFormation,
    verbPhraseFormation,
    adjectiveClauseFormation,
    adjectiveFormation,
  } = makeClausesFormation();
  const adjectives = {
    preadjectives: ["size", "age", "color"],
    postadjectives: [],
  };
  const { comparative, superlative, comparisonAdverb } = makeComparisonSystem(
    phonology
  );
  const numbers = makeNumbers(phonology);

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
    sentenceFormations,
    adjectiveClauseFormation,
    adjectiveFormation,
    adjectives,
    comparative,
    superlative,
    comparisonAdverb,
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

// classifier systems should probably go in their too at some point
function makeGenders() {
  const genderSystems = [
    ["fem", "masc"],
    ["fem", "masc", "neut"],
  ];

  // grammatical genders only occur in 40% of languages
  if (random() > 0.4) {
    return;
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

  grammaticalCases.forEach((grammaticalCase) => {
    caseSystem[grammaticalCase] = grammaticalCase;
  });

  return caseSystem;
}
function makeSentenceFormations() {
  const wordOrders = {
    SOV: { weight: 45 }, // SOV "She him loves." 45%
    SVO: { weight: 45 }, // SVO "She loves him." 45%
    VSO: { weight: 5 }, // VSO "Loves she him." 5%
    VOS: { weight: 5 }, // VOS "Loves him she." 5%
  };
  const wordOrdersTemplates = {
    SOV: ["subject", "object", "verb", "adverbialClauses"],
    SVO: ["subject", "verb", "adverbialClauses", "object"],
    VSO: ["verb", "adverbialClauses", "subject", "object"],
    VOS: ["verb", "adverbialClauses", "object", "subject"],
  };
  const wordOrder = randomWithCoef(wordOrders);
  const declarative = wordOrdersTemplates[wordOrder];

  return { declarative };
}
function makeClausesFormation() {
  const nounPhraseFormation = [
    "preposition",
    "determiner",
    "preadjectives",
    "noun",
    "postadjectives",
    "genitive",
    "adjectiveClause",
  ];
  const verbPhraseFormation = ["verb", "adverb"];
  const adjectiveClauseFormation = ["subject", "object", "verb"];
  const adjectiveFormation = ["adjective", "adverb"];

  return {
    nounPhraseFormation,
    verbPhraseFormation,
    adjectiveClauseFormation,
    adjectiveFormation,
  };
}

function makeDeterminers(phonology, morphologyType, cases, genders) {
  // const determinationTypes = ["definite", "indefinite", "possessive"];
  // const persons = ["firstPerson", "secondPerson", "thirdPerson"];
  // const numbers = ["singular", "plural"];
  // const formRules = [determinationTypes, persons, genders, genders, numbers];

  //no determiner system
  if (random() > 0.2) {
    return {
      rules: ["determination.type"],
      forms: { default: "" },
    };
  }
  const rules = [
    "determination.type",
    "owner.person",
    "owner.gender",
    "gender",
    "number",
  ];
  const forms = {
    default: { default: { default: { default: { default: "" } } } },
  };

  return { rules, forms };
}

function makeNumbers(phonology) {
  let digits = [];
  function makeDigit(previousDigits) {
    const newDigit = makeMorpheme(phonology, gaussian(1.5, 1)() + 1);

    if (!previousDigits.includes(newDigit)) {
      return newDigit;
    }
    return makeDigit(previousDigits);
  }
  for (let i = 0; i < 10; i += 1) {
    digits.push(makeDigit(digits));
  }
  const numbers = {
    digits,
    unitFormation: {
      units: "{digit}",
      tens: "{digit}",
      hundreds: "{digit}",
      thousands: "{digit}",
    },
    formation: "{thousands}{hundreds}{tens}{units}",
  };

  return numbers;
}

function makeComparisonSystem(phonology) {
  //should either work as a type of adjectives, or an adverb system

  return {
    comparisonAdverb: {
      comparative: {
        negative: makeMorpheme(phonology, gaussian(1.5, 1)() + 1),
        positive: makeMorpheme(phonology, gaussian(1.5, 1)() + 1),
      },
      superlative: {
        negative: makeMorpheme(phonology, gaussian(1.5, 1)() + 1),
        positive: makeMorpheme(phonology, gaussian(1.5, 1)() + 1),
      },
    },
    comparative: [
      "comparisonAdverb",
      "adjective",
      "comparisonPreposition",
      "comparedObject",
    ],
    superlative: [
      "determiner",
      "comparisonAdverb",
      "adjective",
      "comparedObject",
    ],
  };
}
