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
  const name = makeMorpheme(phonology, gaussian(2.5, 1.2)() + 1);

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

  const { declension, declensionGroups } = makeDeclension(
    phonology,
    morphologyType,
    cases,
    genders
  );
  const { conjugation, conjugationGroups, tenseSystem } = makeConjugation(
    phonology,
    morphologyType
  );

  const morphemeDictionary = makeDictionary(
    phonology,
    declensionGroups,
    conjugationGroups
  );

  const sentenceFormation = makeSentenceFormation();
  const {
    nounPhraseFormation,
    verbPhraseFormation,
    adjectiveClauseFormation,
    adjectiveFormation,
  } = makeClausesFormation();
  const adjectives = { preadjectives: ["size", "age", "color"], postadjectives: [] };
  const {comparative, superlative} = makeComparisonSystem(phonology);
  const numbers = makeNumbers(phonology);

  const language = {
    name,
    morphologyType,
    caseSystem,
    genders,
    pronouns,
    determiners,
    declension,
    declensionGroups,
    conjugation,
    tenseSystem,
    conjugationGroups,
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
function makeSentenceFormation() {
  const wordOrders = {
    SOV: { weight: 45 }, // SOV "She him loves." 45%
    SVO: { weight: 45 }, // SVO "She loves him." 45%
    VSO: { weight: 5 }, // VSO "Loves she him." 5%
    VOS: { weight: 5 }, // VOS "Loves him she." 5%
  };
  const wordOrdersTemplates = {
    SOV: "{subject} {object} {verb} {adverbialClauses}",
    SVO: "{subject} {verb} {adverbialClauses} {object}",
    VSO: "{verb} {adverbialClauses} {subject} {object}",
    VOS: "{verb} {adverbialClauses} {object} {subject}",
  };
  const wordOrder = randomWithCoef(wordOrders);

  return wordOrdersTemplates[wordOrder];
}
function makeClausesFormation() {
  const nounPhraseFormation =
    "{preposition} {determiner} {preadjectives} {noun} {postadjectives} {genitive} {adjectiveClause}";
  const verbPhraseFormation = "{verb} {adverb}";
  const adjectiveClauseFormation = "{subject} {object} {verb}";
  const adjectiveFormation = "{adjective} {adverb}";

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
  // const formRules = [persons, cases, genders, numbers];

  const pronouns = {};

  //no pronoun system
  if (random() > 0.2) {
    return {
      default: { default: { default: { default: "" } } },
    };
  }

  persons.forEach((person) => {
    pronouns[person] = {};

    cases.forEach((grammaticalCase) => {
      pronouns[person][grammaticalCase] = {};

      genders.forEach((gender) => {
        pronouns[person][grammaticalCase][gender] = {};

        numbers.forEach((number) => {
          pronouns[person][grammaticalCase][gender][number] = makeMorpheme(
            phonology,
            1 + gaussian(1, 1)()
          );
        });
      });
    });
  });

  return pronouns;
}

function makeDeterminers(phonology, morphologyType, cases, genders) {
  // const determinationTypes = ["definite", "indefinite", "possessive"];
  // const persons = ["firstPerson", "secondPerson", "thirdPerson"];
  // const numbers = ["singular", "plural"];
  // const formRules = [determinationTypes, persons, genders, genders, numbers];

  //no determiner system
  if (random() > 0.2) {
    return {
      default: { default: { default: { default: { default: "" } } } },
    };
  }
  //determiners: "determination.type", "owner.person", "owner.gender", "gender", "number",
  const determiners = {
    default: { default: { default: { default: { default: "" } } } },
  };

  return determiners;
}

function makeDeclension(phonology, morphologyType, cases, genders) {
  // const persons = ["firstPerson", "secondPerson", "thirdPerson"];
  // const numbers = ["singular", "plural"];
  // const types = ["default", adjective];
  const declensionGroups = ["default"];
  // const formRules = [types, declensionGroups, cases, genders, numbers];
  const declension = {
    default: { default: { default: { default: { default: "{noun}" } } } },
    adjective: {
      default: { default: { default: { default: "{adjective}" } } },
    },
  };

  return { declension, declensionGroups };
}
function makeConjugation() {
  //conjugation: "group", "tense", "person", "number"
  const conjugationGroups = ["default"];
  const tenseSystem = {
    default: "default",
    present: "default",
    past: "default",
    future: "default",
  };
  // const tenses = [...new Set(Object.values[tenseSystem])]
  const conjugation = {
    default: { default: { default: { default: "{verb}" } } },
  };

  return { conjugation, conjugationGroups, tenseSystem };
}
function makeNumbers(phonology) {
  let digits = [];
  function makeDigit(previousDigits) {
    const newDigit = makeMorpheme(phonology, gaussian(1.5, 1)() + 1)

    if (! previousDigits.includes(newDigit)) {
      return newDigit;
    }
    return makeDigit(previousDigits);
  }
  for (let i = 0; i < 10; i+= 1) {
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
  }

  return numbers;
}
function makeComparisonSystem(phonology) {
  return {
    comparative: {
      formation: "{quality} {comparedObject}",
      comparator: {
        negative: makeMorpheme(phonology, gaussian(1.5, 1)() + 1) + " {adjective}",
        positive: makeMorpheme(phonology, gaussian(1.5, 1)() + 1) + " {adjective}",
      },
      object: makeMorpheme(phonology, gaussian(1.5, 1)() + 1) + " {determiner} {object}",
    },
    superlative: {
      formation: "{determiner} {quality} {comparedObject}",
      comparator: {
        negative: makeMorpheme(phonology, gaussian(1.5, 1)() + 1) + " {adjective}",
        positive: makeMorpheme(phonology, gaussian(1.5, 1)() + 1) + " {adjective}",
      },
      object: "{determiner} {object}",
    },
  }
}
