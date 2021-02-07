import { makePhonemeSet } from "./make-phonology";
import { makeMorpheme } from "./make-morpheme";
import makeDictionary from "./make-dictionary";
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

  const morphemeDictionary = makeDictionary(
    phonology,
    declension.declensionGroups,
    conjugation.conjugationGroups
  );

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
  const { comparative, superlative, comparisonAdverb } = makeComparisonSystem(phonology);
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

function makePronouns(phonology, morphologyType, cases, genders) {
  const persons = ["firstPerson", "secondPerson", "thirdPerson"];
  const numbers = ["singular", "plural"];
  const rules = ["person", "grammaticalCase", "gender", "number"];

  const forms = {};

  //no pronoun system
  if (random() > 0.2) {
    return {
      rules: ["person"],
      forms: { default: "" },
    };
  }

  persons.forEach((person) => {
    forms[person] = {};

    cases.forEach((grammaticalCase) => {
      forms[person][grammaticalCase] = {};

      genders.forEach((gender) => {
        forms[person][grammaticalCase][gender] = {};

        numbers.forEach((number) => {
          forms[person][grammaticalCase][gender][number] = makeMorpheme(
            phonology,
            1 + gaussian(1, 1)()
          );
        });
      });
    });
  });

  return { forms, rules };
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

function makeDeclension(phonology, morphologyType, cases, genders) {
  // const persons = ["firstPerson", "secondPerson", "thirdPerson"];
  // const numbers = ["singular", "plural"];
  // const types = ["default", adjective];
  const declensionGroups = ["default"];
  const rules = ["types", "declensionGroups", "cases", "genders", "numbers"];
  const forms = {
    default: { default: { default: { default: { default: "{morpheme}" } } } },
    adjective: {
      default: { default: { default: { default: "{morpheme}" } } },
    },
  };

  return { forms, rules, declensionGroups };
}

function makeConjugation() {
  const rules = ["group", "tense", "person", "number"];
  const conjugationGroups = ["default"];
  const tenseSystem = {
    default: "default",
    present: "default",
    past: "default",
    future: "default",
  };
  // const tenses = [...new Set(Object.values[tenseSystem])]
  const forms = {
    default: { default: { default: { default: "{morpheme}" } } },
  };

  return { forms, rules, conjugationGroups, tenseSystem };
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
        positive: makeMorpheme(phonology, gaussian(1.5, 1)() + 1)
      },
      superlative: {
        negative: makeMorpheme(phonology, gaussian(1.5, 1)() + 1),
        positive: makeMorpheme(phonology, gaussian(1.5, 1)() + 1)
      }
    },
    comparative: ["comparisonAdverb", "adjective", "comparisonPreposition", "comparedObject"],
    superlative: ["determiner", "comparisonAdverb", "adjective", "comparedObject"],
  };
}
