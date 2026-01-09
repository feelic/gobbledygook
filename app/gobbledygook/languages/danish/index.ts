import { Language } from "../../interfaces";
import { 
  AdjectiveCategory,
  RuleName,
  GrammaticalPerson,
  GrammaticalCase,
  GrammaticalNumber,
  Gender,
  DeterminationType,
  DeclensionType,
  Tense,
  FallbackValue,
  SentenceType,
  PhraseElement,
} from "../../constants/grammar";
import morphemeDictionary from "./dictionary";

export const danish: Language = {
  name: "danish",
  morphemeDictionary,
  grammaticalCases: null,
  pronouns: {
    rules: [RuleName.Person, RuleName.GrammaticalCase, RuleName.Gender, RuleName.Number],
    forms: {
      [GrammaticalPerson.First]: {
        [FallbackValue.Default]: { [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "jɑ", [GrammaticalNumber.Plural]: "vi" } },
      },
      [GrammaticalPerson.Second]: {
        [FallbackValue.Default]: { [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "du", [GrammaticalNumber.Plural]: "i" } },
      },
      [GrammaticalPerson.Third]: {
        [GrammaticalCase.Nominative]: {
          [FallbackValue.Default]: { [FallbackValue.Default]: "hæn", [GrammaticalNumber.Plural]: "di" },
          [Gender.Masculine]: { [GrammaticalNumber.Singular]: "hæn", [GrammaticalNumber.Plural]: "di" },
          [Gender.Feminine]: { [FallbackValue.Default]: "hun", [GrammaticalNumber.Plural]: "di" },
        },
        [GrammaticalCase.Accusative]: {
          [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "hɑm", [GrammaticalNumber.Plural]: "dem" },
          [Gender.Masculine]: { [GrammaticalNumber.Singular]: "hɑm", [GrammaticalNumber.Plural]: "dem" },
          [Gender.Feminine]: { [GrammaticalNumber.Singular]: "henə", [GrammaticalNumber.Plural]: "dem" },
        },
        [GrammaticalCase.Dative]: {
          [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "hɑm", [GrammaticalNumber.Plural]: "dem" },
          [Gender.Masculine]: { [GrammaticalNumber.Singular]: "hɑm", [GrammaticalNumber.Plural]: "dem" },
          [Gender.Feminine]: { [GrammaticalNumber.Singular]: "henə", [GrammaticalNumber.Plural]: "dem" },
        },
        [GrammaticalCase.Genitive]: {
          [FallbackValue.Default]: { [FallbackValue.Default]: "" },
          [Gender.Masculine]: { [GrammaticalNumber.Singular]: "hæns", [GrammaticalNumber.Plural]: "dɛrəs" },
          [Gender.Feminine]: { [GrammaticalNumber.Singular]: "henəs", [GrammaticalNumber.Plural]: "dɛrəs" },
        },
      },
    },
  },
  determiners: {
    rules: [
      RuleName.DeterminationType,
      RuleName.OwnerPerson,
      RuleName.OwnerGender,
      RuleName.Gender,
      RuleName.Number,
    ],
    forms: {
      [DeterminationType.Definite]: {
        [FallbackValue.Default]: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "den", [GrammaticalNumber.Plural]: "de" },
            [Gender.Neuter]: { [GrammaticalNumber.Singular]: "det", [GrammaticalNumber.Plural]: "de" },
          },
        },
      },
      [DeterminationType.Indefinite]: {
        [FallbackValue.Default]: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "en", [GrammaticalNumber.Plural]: "" },
            [Gender.Neuter]: { [GrammaticalNumber.Singular]: "et", [GrammaticalNumber.Plural]: "" },
          },
        },
      },
      [DeterminationType.ProperNoun]: {
        [FallbackValue.Default]: { [FallbackValue.Default]: { [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "", [GrammaticalNumber.Plural]: "" } } },
      },
      [DeterminationType.Demonstrative]: {
        [FallbackValue.Default]: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "dɛnə", [GrammaticalNumber.Plural]: "disə" },
            [Gender.Neuter]: { [GrammaticalNumber.Singular]: "dɛtə", [GrammaticalNumber.Plural]: "disə" },
          },
        },
      },
      [DeterminationType.Distal]: {
        [FallbackValue.Default]: { [FallbackValue.Default]: { [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "", [GrammaticalNumber.Plural]: "" } } },
      },
      [DeterminationType.Possessive]: {
        [GrammaticalPerson.First]: {
          [FallbackValue.Default]: { [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "", [GrammaticalNumber.Plural]: "" } },
          [Gender.Masculine]: { [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "", [GrammaticalNumber.Plural]: "" } },
          [Gender.Feminine]: { [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "", [GrammaticalNumber.Plural]: "" } },
        },
        [GrammaticalPerson.Second]: {
          [FallbackValue.Default]: { [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "", [GrammaticalNumber.Plural]: "" } },
          [Gender.Masculine]: { [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "", [GrammaticalNumber.Plural]: "" } },
          [Gender.Feminine]: { [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "", [GrammaticalNumber.Plural]: "" } },
        },
        [GrammaticalPerson.Third]: {
          [FallbackValue.Default]: { [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "", [GrammaticalNumber.Plural]: "" } },
          [Gender.Masculine]: { [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "", [GrammaticalNumber.Plural]: "" } },
          [Gender.Feminine]: { [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "", [GrammaticalNumber.Plural]: "" } },
        },
      },
    },
  },
  declension: {
    rules: [RuleName.DeclensionType, RuleName.GrammaticalCase, RuleName.Number],
    forms: {
      [FallbackValue.Default]: {
        [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "{morpheme}", [GrammaticalNumber.Plural]: "{morpheme}" },
        [GrammaticalCase.Genitive]: { [GrammaticalNumber.Singular]: "{morpheme}s", [GrammaticalNumber.Plural]: "{morpheme}s" },
      },
      [DeclensionType.Adjective]: {
        [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
      },
      [DeclensionType.Comparative]: {
        [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
      },
      [DeclensionType.Superlative]: {
        [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
      },
    },
    prepositions: {
      [GrammaticalCase.Lative]: "til",
      [GrammaticalCase.Inessive]: "i",
      [GrammaticalCase.Benefactive]: "til",
    },
  },
  conjugation: {
    rules: [RuleName.Tense],
    forms: {
      [FallbackValue.Default]: "{morpheme}",
    },
  },
  syntax: {
    nounPhraseFormation: [
      PhraseElement.Preposition,
      PhraseElement.Determiner,
      PhraseElement.Genitive,
      PhraseElement.Preadjectives,
      PhraseElement.Noun,
      PhraseElement.AdjectiveClause,
    ],
    verbPhraseFormation: [PhraseElement.Adverb, PhraseElement.Verb],
    sentenceFormations: {
      [SentenceType.Declarative]: [PhraseElement.Subject, PhraseElement.Verb, PhraseElement.Object, PhraseElement.AdverbialClauses],
      [SentenceType.PolarInterrogative]: [PhraseElement.Verb, PhraseElement.Subject, PhraseElement.Object],
      [SentenceType.OpenInterrogative]: [PhraseElement.InterrogativePronoun, PhraseElement.Verb, PhraseElement.Subject, PhraseElement.Object],
    },
    adjectiveClauseFormation: [PhraseElement.RelativePronoun, PhraseElement.Subject, PhraseElement.Verb, PhraseElement.Object],
    adjectiveFormation: [PhraseElement.Adverb, PhraseElement.Adjective],
    adjectives: {
      preadjectives: [AdjectiveCategory.Size, AdjectiveCategory.Age, AdjectiveCategory.Color],
      postadjectives: [],
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
  },
  comparisonAdverb: {
    comparative: {
      negative: "lɛs",
      positive: "mɔr",
    },
    superlative: {
      negative: "list",
      positive: "mɔst",
    },
  },
  numbers: {
    digits: {
      0: "",
      1: "en",
      2: "to",
      3: "tʀɛ",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: "",
      17: "",
      18: "",
      19: "",
      20: "",
      30: "",
      40: "",
      50: "",
      60: "",
      70: "",
      80: "",
      90: "",
    },
    unitFormation: {
      units: "{digit}",
      tens: "{digit}",
      hundreds: "{digit}",
      thousands: "{digit}",
    },
    formation: "{thousands}{hundreds}{tens}{units}",
  },
  vowels: {
    æ: { weight: 1, translit: "a" },
    ɑ: { weight: 1, translit: "a" },
        ɒ: { weight: 1, translit: "o" },
    ɔ: { weight: 1, translit: "o" },
    ɪ: { weight: 1, translit: "i" },
    e: { weight: 1, translit: "e" },
    ɛ: { weight: 1, translit: "e" },
        ʌ: { weight: 1, translit: "u" },
    ʊ: { weight: 1, translit: "u" },
    // eɪ: { weight: 1, translit: "a" },
    i: { weight: 1, translit: "i" },
    u: { weight: 1, translit: "u" },
    // aɪ: { weight: 1, translit: "i" },
    // ɔɪ: { weight: 1, translit: "oi" },
    // aʊ: { weight: 1, translit: "ou" },
    ə: { weight: 1, translit: "e" },
  },
  consonants: {
    ʀ: { weight: 1, translit: "r" },
    ʁ: { weight: 1, translit: "r" },
    s: { weight: 1, translit: "s" },
    l: { weight: 1, translit: "l" },
    ðˀ: { weight: 1, translit: "d" },
    θ: { weight: 1, translit: "th" },
    k: { weight: 1, translit: "k" },
    d: { weight: 1, translit: "d" },
    m: { weight: 1, translit: "m" },
    p: { weight: 1, translit: "p" },
    n: { weight: 1, translit: "n" },
    ŋ: { weight: 1, translit: "ng" },
    v: { weight: 1, translit: "v" },
    ʒ: { weight: 1, translit: "zh" },
    z: { weight: 1, translit: "z" },
    h: { weight: 1, translit: "h" },
    f: { weight: 1, translit: "f" },
    b: { weight: 1, translit: "b" },
    ʃ: { weight: 1, translit: "sh" },
    tʃ: { weight: 1, translit: "ch" },
    dʒ: { weight: 1, translit: "j" },
    g: { weight: 1, translit: "g" },
    st: { weight: 1, translit: "st" },
    sk: { weight: 1, translit: "sk" },
    sb: { weight: 1, translit: "sb" },
    sp: { weight: 1, translit: "sp" },
    tr: { weight: 1, translit: "tr" },
    kr: { weight: 1, translit: "kr" },
    dr: { weight: 1, translit: "dr" },
    pr: { weight: 1, translit: "pr" },
    vr: { weight: 1, translit: "vr" },
    fr: { weight: 1, translit: "fr" },
    br: { weight: 1, translit: "br" },
    gr: { weight: 1, translit: "gr" },
    kl: { weight: 1, translit: "kl" },
    fl: { weight: 1, translit: "fl" },
    bl: { weight: 1, translit: "bl" },
    pl: { weight: 1, translit: "pl" },
    gl: { weight: 1, translit: "gl" },
    ks: { weight: 1, translit: "ks" },
  },
};
