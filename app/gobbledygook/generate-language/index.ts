import { makePhonemeSet } from "./make-phonology";
import { makeMorpheme, resetExistingWords } from "./make-morpheme";
import makeDictionary from "./make-dictionary";
import makePronouns from "./make-pronouns";
import makeConjugation from "./make-conjugation";
import { makeCaseSystem, makeMorphologyType } from "./make-case-system";
import {
  gaussian,
  random,
  randomFromArray,
  randomWithCoef,
} from "../util/random";
import { Language, PhonologyType } from "../interfaces";

export function generateLanguage(): Language {
  resetExistingWords();
  const phonology: PhonologyType = {
    vowels: makePhonemeSet("vowels"),
    consonants: makePhonemeSet("consonants"),
  };

  //name
  const name = makeMorpheme(phonology, gaussian(3, 1)() + 3);

  const morphologyType = makeMorphologyType();
  const genders = makeGenders();
  const { grammaticalCases, declension } = makeCaseSystem(
    morphologyType,
    phonology,
    genders
  );
  const pronouns = makePronouns(
    phonology,
    morphologyType,
    grammaticalCases,
    genders
  );
  const determiners = makeDeterminers(
    phonology,
    morphologyType,
    grammaticalCases,
    genders
  );

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
  const { comparative, superlative, comparisonAdverb } =
    makeComparisonSystem(phonology);
  const numbers = makeNumbers(phonology);

  const language: Language = {
    name,
    morphologyType,
    grammaticalCases,
    genders,
    pronouns,
    determiners,
    declension,
    conjugation,
    morphemeDictionary,
    syntax: {
      nounPhraseFormation,
      verbPhraseFormation,
      sentenceFormations,
      adjectiveClauseFormation,
      adjectiveFormation,
      adjectives,
      comparative,
      superlative,
    },
    comparisonAdverb,
    numbers,
    ...phonology,
  };

  return language;
}

// classifier systems should probably go in there too at some point
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
  const wordOrder: "SOV" | "SVO" | "VSO" | "VOS" = randomWithCoef(wordOrders);

  const declarative = wordOrdersTemplates[wordOrder];

  return {
    declarative,
    //question forms are hard coded for now
    ...makeInterrogativeForms(declarative),
  };
}
function makeInterrogativeForms(declarative: Array<string>) {
  const randomNbr = random();

  if (randomNbr < 0.4) {
    // french / english style
    return {
      polarInterrogative: [...declarative].reverse(),
      openInterrogative: [...declarative, "interrogativePronoun"].reverse(),
    };
  }

  if (randomNbr < 0.6) {
    return {
      polarInterrogative: [...declarative, "interrogativeParticle"],
      openInterrogative: ["interrogativePronoun", ...declarative],
    };
  }

  if (randomNbr < 0.8) {
    return {
      polarInterrogative: ["interrogativeParticle", ...declarative].reverse(),
      openInterrogative: [...declarative, "interrogativePronoun"].reverse(),
    };
  }

  return {
    polarInterrogative: ["interrogativeParticle", ...declarative].reverse(),
    openInterrogative: [
      "interrogativeParticle",
      ...declarative,
      "interrogativePronoun",
    ].reverse(),
  };
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

function makeDeterminers(
  phonology: PhonologyType,
  morphologyType: string,
  cases: Array<string> | null,
  genders: Array<string>
) {
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

function makeNumbers(phonology: PhonologyType) {
  let digits: Array<string> = [];
  function makeDigit(previousDigits: Array<string>): string {
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

function makeComparisonSystem(phonology: PhonologyType) {
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
