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
import { GrammaticalCase, Gender, AdjectiveCategory } from "../constants/grammar";
import { makeEmptyForm, makeForms } from "./make-forms";
import {
  GENDER_SYSTEMS,
  GrammaticalNumber,
  GrammaticalPerson,
  Gender as GenderEnum,
  AdjectiveCategory as AdjectiveCategoryEnum,
  DeterminationType,
  PhraseElement,
  FallbackValue,
  RuleName,
  enumValues,
} from "../constants/grammar";

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
    genders || []
  );
  const pronouns = makePronouns(
    phonology,
    morphologyType,
    grammaticalCases,
    genders || []
  );
  const determiners = makeDeterminers(
    phonology,
    morphologyType,
    grammaticalCases,
    genders || []
  );

  const conjugation = makeConjugation(phonology, morphologyType);

  const morphemeDictionary = makeDictionary(phonology, {
    genders: genders || [],
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
  const adjectives: { preadjectives: AdjectiveCategory[]; postadjectives: AdjectiveCategory[] } = {
    preadjectives: [AdjectiveCategoryEnum.Size, AdjectiveCategoryEnum.Age, AdjectiveCategoryEnum.Color],
    postadjectives: [],
  };
  const { comparative, superlative, comparisonAdverb } =
    makeComparisonSystem(phonology);
  const numbers = makeNumbers(phonology);

  const language: Language = {
    name,
    morphologyType,
    grammaticalCases: grammaticalCases as GrammaticalCase[] | null,
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
function makeGenders(): Gender[] | undefined {
  // grammatical genders only occur in 40% of languages
  if (random() > 0.4) {
    return undefined;
  }

  return randomFromArray(GENDER_SYSTEMS);
}

function makeSentenceFormations() {
  const wordOrders = {
    SOV: { weight: 45 }, // SOV "She him loves." 45%
    SVO: { weight: 45 }, // SVO "She loves him." 45%
    VSO: { weight: 5 }, // VSO "Loves she him." 5%
    VOS: { weight: 5 }, // VOS "Loves him she." 5%
  };
  const wordOrdersTemplates = {
    SOV: [PhraseElement.Subject, PhraseElement.Object, PhraseElement.Verb, PhraseElement.AdverbialClauses],
    SVO: [PhraseElement.Subject, PhraseElement.Verb, PhraseElement.AdverbialClauses, PhraseElement.Object],
    VSO: [PhraseElement.Verb, PhraseElement.AdverbialClauses, PhraseElement.Subject, PhraseElement.Object],
    VOS: [PhraseElement.Verb, PhraseElement.AdverbialClauses, PhraseElement.Object, PhraseElement.Subject],
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
      openInterrogative: [...declarative, PhraseElement.InterrogativePronoun].reverse(),
    };
  }

  if (randomNbr < 0.6) {
    return {
      polarInterrogative: [...declarative, PhraseElement.InterrogativeParticle],
      openInterrogative: [PhraseElement.InterrogativePronoun, ...declarative],
    };
  }

  if (randomNbr < 0.8) {
    return {
      polarInterrogative: [PhraseElement.InterrogativeParticle, ...declarative].reverse(),
      openInterrogative: [...declarative, PhraseElement.InterrogativePronoun].reverse(),
    };
  }

  return {
    polarInterrogative: [PhraseElement.InterrogativeParticle, ...declarative].reverse(),
    openInterrogative: [
      PhraseElement.InterrogativeParticle,
      ...declarative,
      PhraseElement.InterrogativePronoun,
    ].reverse(),
  };
}
// add variation
function makeClausesFormation() {
  const nounPhraseFormation = [
    PhraseElement.Preposition,
    PhraseElement.Determiner,
    PhraseElement.Preadjectives,
    PhraseElement.Noun,
    PhraseElement.Postadjectives,
    PhraseElement.Genitive,
    PhraseElement.AdjectiveClause,
  ];
  const verbPhraseFormation = [PhraseElement.Verb, PhraseElement.Adverb, PhraseElement.TenseMarker];
  const adjectiveClauseFormation = [PhraseElement.Subject, PhraseElement.Object, PhraseElement.Verb];
  const adjectiveFormation = [PhraseElement.Adjective, PhraseElement.Adverb];

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
  const ruleOptions: Record<string, Array<string>> = {
    [RuleName.DeterminationType]: [
      DeterminationType.Definite,
      DeterminationType.Indefinite,
      DeterminationType.Possessive,
      DeterminationType.Demonstrative,
    ],
    [RuleName.OwnerPerson]: enumValues(GrammaticalPerson),
    [RuleName.OwnerGender]: genders || [GenderEnum.Masculine, GenderEnum.Feminine],
    [RuleName.Person]: enumValues(GrammaticalPerson),
    [RuleName.Number]: enumValues(GrammaticalNumber),
    [RuleName.Gender]: genders,
  };

  //no determiner system
  if (random() < 0.2) {
    return {
      rules: [RuleName.DeterminationType],
      forms: { [FallbackValue.Default]: "" },
    };
  }

  let rules = [RuleName.DeterminationType];
  if (genders && genders.length && random() < 0.8) {
    rules.push(RuleName.Gender);
  }
  if (!rules.includes(RuleName.Gender) && random() < 0.5) {
    rules.push(RuleName.OwnerPerson, RuleName.OwnerGender);
  }
  if (random() < 0.8) {
    rules.push(RuleName.Number);
  }

  const forms = makeForms(phonology, rules, ruleOptions);

  forms[DeterminationType.ProperNoun] = makeEmptyForm(rules);
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
      PhraseElement.ComparisonAdverb,
      PhraseElement.Adjective,
      PhraseElement.ComparisonPreposition,
      PhraseElement.ComparedObject,
    ],
    superlative: [
      PhraseElement.Determiner,
      PhraseElement.ComparisonAdverb,
      PhraseElement.Adjective,
      PhraseElement.ComparedObject,
    ],
  };
}
