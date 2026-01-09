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
  PhraseElement,
  SentenceType,
} from "../../constants/grammar";
import morphemeDictionary from "./dictionary";

export const french: Language = {
  name: "french",
  morphemeDictionary,
  grammaticalCases: null,
  pronouns: {
    rules: [RuleName.Person, RuleName.GrammaticalCase, RuleName.Gender, RuleName.Number],
    forms: {
      [GrammaticalPerson.First]: {
        [FallbackValue.Default]: { [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "ʒ", [GrammaticalNumber.Plural]: "nu" } },
      },
      [GrammaticalPerson.Second]: {
        [FallbackValue.Default]: { [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "ty", [GrammaticalNumber.Plural]: "vu" } },
      },
      [GrammaticalPerson.Third]: {
        [GrammaticalCase.Nominative]: {
          [Gender.Masculine]: { [FallbackValue.Default]: "il" },
          [Gender.Feminine]: { [FallbackValue.Default]: "ɛl" },
        },
        [GrammaticalCase.Accusative]: {
          [Gender.Masculine]: { [GrammaticalNumber.Singular]: "lɘ", [GrammaticalNumber.Plural]: "le" },
          [Gender.Feminine]: { [GrammaticalNumber.Singular]: "la", [GrammaticalNumber.Plural]: "le" },
        },
        [GrammaticalCase.Dative]: { [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "lɥi", [GrammaticalNumber.Plural]: "lɘʁ" } },
        [GrammaticalCase.Genitive]: { [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "sɔ̃", [GrammaticalNumber.Plural]: "lɘʁ" } },
      },
    },
  },
  determiners: {
    rules: [RuleName.DeterminationType, RuleName.OwnerPerson, RuleName.Gender, RuleName.Number],
    forms: {
      [DeterminationType.ProperNoun]: {
        [FallbackValue.Default]: {
          [FallbackValue.Default]: { [FallbackValue.Default]: "" },
        },
      },
      [DeterminationType.Definite]: {
        [FallbackValue.Default]: {
          [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "lɘ", [GrammaticalNumber.Plural]: "le" },
          [Gender.Masculine]: { [GrammaticalNumber.Singular]: "lɘ", [GrammaticalNumber.Plural]: "le" },
          [Gender.Feminine]: { [GrammaticalNumber.Singular]: "la", [GrammaticalNumber.Plural]: "le" },
        },
      },
      [DeterminationType.Indefinite]: {
        [FallbackValue.Default]: {
          [FallbackValue.Default]: { [GrammaticalNumber.Singular]: "ɛ̃", [GrammaticalNumber.Plural]: "de" },
          [Gender.Masculine]: { [GrammaticalNumber.Singular]: "ɛ̃", [GrammaticalNumber.Plural]: "de" },
          [Gender.Feminine]: { [GrammaticalNumber.Singular]: "yn", [GrammaticalNumber.Plural]: "de" },
        },
      },
      [DeterminationType.Demonstrative]: {
        [FallbackValue.Default]: {
          [FallbackValue.Default]: {
            [GrammaticalNumber.Singular]: "sɘ",
            [GrammaticalNumber.Plural]: "se",
          },
          [Gender.Masculine]: {
            [GrammaticalNumber.Singular]: "sɘ",
            [GrammaticalNumber.Plural]: "se",
          },
          [Gender.Feminine]: {
            [GrammaticalNumber.Singular]: "sɛt",
            [GrammaticalNumber.Plural]: "se",
          },
        },
      },
      [DeterminationType.Possessive]: {
        [GrammaticalPerson.First]: {
          [Gender.Masculine]: { [GrammaticalNumber.Singular]: "mɔ̃", [GrammaticalNumber.Plural]: "me" },
          [Gender.Feminine]: { [GrammaticalNumber.Singular]: "ma", [GrammaticalNumber.Plural]: "me" },
        },
        [GrammaticalPerson.Second]: {
          [Gender.Masculine]: { [GrammaticalNumber.Singular]: "tɔ̃", [GrammaticalNumber.Plural]: "te" },
          [Gender.Feminine]: { [GrammaticalNumber.Singular]: "ta", [GrammaticalNumber.Plural]: "te" },
        },
        [GrammaticalPerson.Third]: {
          [Gender.Masculine]: { [GrammaticalNumber.Singular]: "sɔ̃", [GrammaticalNumber.Plural]: "se" },
          [Gender.Feminine]: { [GrammaticalNumber.Singular]: "sa", [GrammaticalNumber.Plural]: "se" },
        },
      },
    },
  },
  declension: {
    rules: [RuleName.DeclensionType, RuleName.DeclensionGroup, RuleName.GrammaticalCase, RuleName.Gender, RuleName.Number],
    forms: {
      [FallbackValue.Default]: {
        [FallbackValue.Default]: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
            [Gender.Masculine]: { [GrammaticalNumber.Singular]: "{morpheme}", [GrammaticalNumber.Plural]: "{morpheme}" },
            [Gender.Feminine]: { [GrammaticalNumber.Singular]: "{morpheme}", [GrammaticalNumber.Plural]: "{morpheme}" },
          },
        },
      },
      [DeclensionType.Adjective]: {
        [FallbackValue.Default]: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
          },
        },
        sEnding: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
            [Gender.Feminine]: { [FallbackValue.Default]: "{morpheme}s" },
          },
        },
        tEnding: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
            [Gender.Feminine]: { [FallbackValue.Default]: "{morpheme}t" },
          },
        },
        zEnding: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
            [Gender.Feminine]: { [FallbackValue.Default]: "{morpheme}z" },
          },
        },
        alEnding: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}al", [GrammaticalNumber.Plural]: "{morpheme}o" },
          },
        },
        dEnding: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
            [Gender.Feminine]: { [FallbackValue.Default]: "{morpheme}d" },
          },
        },
      },
      [DeclensionType.Comparative]: {
        [FallbackValue.Default]: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
          },
        },
        sEnding: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
            [Gender.Feminine]: { [FallbackValue.Default]: "{morpheme}s" },
          },
        },
        tEnding: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
            [Gender.Feminine]: { [FallbackValue.Default]: "{morpheme}t" },
          },
        },
        zEnding: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
            [Gender.Feminine]: { [FallbackValue.Default]: "{morpheme}z" },
          },
        },
        alEnding: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}al", [GrammaticalNumber.Plural]: "{morpheme}o" },
          },
        },
        dEnding: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
            [Gender.Feminine]: { [FallbackValue.Default]: "{morpheme}d" },
          },
        },
      },
      [DeclensionType.Superlative]: {
        [FallbackValue.Default]: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
          },
        },
        sEnding: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
            [Gender.Feminine]: { [FallbackValue.Default]: "{morpheme}s" },
          },
        },
        tEnding: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
            [Gender.Feminine]: { [FallbackValue.Default]: "{morpheme}t" },
          },
        },
        zEnding: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
            [Gender.Feminine]: { [FallbackValue.Default]: "{morpheme}z" },
          },
        },
        alEnding: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}al", [GrammaticalNumber.Plural]: "{morpheme}o" },
          },
        },
        dEnding: {
          [FallbackValue.Default]: {
            [FallbackValue.Default]: { [FallbackValue.Default]: "{morpheme}" },
            [Gender.Feminine]: { [FallbackValue.Default]: "{morpheme}d" },
          },
        },
      },
    },
    prepositions: {
      [GrammaticalCase.Lative]: "a",
      [GrammaticalCase.Locative]: "a",
      [GrammaticalCase.Genitive]: "dɘ",
      [GrammaticalCase.Benefactive]: "puʁ",
      [GrammaticalCase.Instrumental]: "avek",
    },
  },
  conjugation: {
    rules: [RuleName.Group, RuleName.Tense, RuleName.Person, RuleName.Number],
    forms: {
      [FallbackValue.Default]: {
        [Tense.General]: {
          [GrammaticalPerson.First]: { [GrammaticalNumber.Singular]: "{morpheme}", [GrammaticalNumber.Plural]: "{morpheme}ɔ̃" },
          [GrammaticalPerson.Second]: { [GrammaticalNumber.Singular]: "{morpheme}", [GrammaticalNumber.Plural]: "{morpheme}e" },
          [GrammaticalPerson.Third]: { [GrammaticalNumber.Singular]: "{morpheme}", [GrammaticalNumber.Plural]: "{morpheme}" },
        },
        [Tense.Present]: {
          [GrammaticalPerson.First]: { [GrammaticalNumber.Singular]: "{morpheme}", [GrammaticalNumber.Plural]: "{morpheme}ɔ̃" },
          [GrammaticalPerson.Second]: { [GrammaticalNumber.Singular]: "{morpheme}", [GrammaticalNumber.Plural]: "{morpheme}e" },
          [GrammaticalPerson.Third]: { [GrammaticalNumber.Singular]: "{morpheme}", [GrammaticalNumber.Plural]: "{morpheme}" },
        },
        [Tense.Past]: {
          [GrammaticalPerson.First]: { [GrammaticalNumber.Singular]: "ɛ {morpheme}e", [GrammaticalNumber.Plural]: "avɔ̃ {morpheme}e" },
          [GrammaticalPerson.Second]: {
            [GrammaticalNumber.Singular]: "a {morpheme}e",
            [GrammaticalNumber.Plural]: "ave {morpheme}e",
          },
          [GrammaticalPerson.Third]: { [GrammaticalNumber.Singular]: "a {morpheme}e", [GrammaticalNumber.Plural]: "ɔ̃ {morpheme}e" },
        },
      },
    },
  },
  syntax: {
    nounPhraseFormation: [
      PhraseElement.Preposition,
      PhraseElement.Determiner,
      PhraseElement.Preadjectives,
      PhraseElement.Noun,
      PhraseElement.Postadjectives,
      PhraseElement.Genitive,
      PhraseElement.AdjectiveClause,
    ],
    verbPhraseFormation: [PhraseElement.Verb, PhraseElement.Adverb],
    sentenceFormations: {
      [SentenceType.Declarative]: [PhraseElement.Subject, PhraseElement.Verb, PhraseElement.Object, PhraseElement.AdverbialClauses],
      [SentenceType.PolarInterrogative]: [PhraseElement.Verb, PhraseElement.Subject, PhraseElement.Object],
      [SentenceType.OpenInterrogative]: [PhraseElement.InterrogativePronoun, PhraseElement.Verb, PhraseElement.Subject, PhraseElement.Object],
    },
    adjectiveClauseFormation: [PhraseElement.RelativePronoun, PhraseElement.Subject, PhraseElement.Object, PhraseElement.Verb],
    adjectiveFormation: [PhraseElement.Adverb, PhraseElement.Adjective],
    adjectives: {
      preadjectives: [AdjectiveCategory.Size, AdjectiveCategory.Age],
      postadjectives: [AdjectiveCategory.Color],
    },
    comparative: [
      PhraseElement.ComparisonAdverb,
      PhraseElement.Adjective,
      PhraseElement.ComparisonPreposition,
      PhraseElement.ComparedObject,
    ],
    superlative: [PhraseElement.ComparisonAdverb, PhraseElement.Adjective, PhraseElement.ComparedObject],
  },
  comparisonAdverb: {
    comparative: {
      negative: "mwɛ̃",
      positive: "ply",
    },
    superlative: {
      negative: "mwɛ̃",
      positive: "ply",
    },
  },
  numbers: {
    digits: {
      0: "zeʁo",
      1: "ɛ̃",
      2: "dɘ",
      3: "tʁwa",
      4: "katʁ",
      5: "sɛ̃k",
      6: "sis",
      7: "sɛt",
      8: "ɥit",
      9: "nɘf",
      10: "dis",
      11: "ɔ̃z",
      12: "duz",
      13: "tʁɛz",
      14: "katoʁz",
      15: "kɛ̃z",
      16: "sɛz",
      17: "diset",
      18: "dizɥit",
      19: "diznɘf",
      20: "vɛ̃",
      21: "vɛ̃teɛ̃",
      22: "vɛ̃tdɘ",
      23: "vɛ̃ttʁwa",
      24: "vɛ̃tkatʁ",
      25: "vɛ̃tsɛ̃k",
      26: "vɛ̃tsis",
      27: "vɛ̃tset",
      28: "vɛ̃tɥit",
      29: "vɛ̃tnɘf",
      30: "trɑ̃t",
      31: "trɑ̃teɛ̃",
      40: "kaʁɑ̃t",
      41: "kaʁɑ̃teɛ̃",
      50: "sɛ̃kɑ̃t",
      51: "sɛ̃kɑ̃teɛ̃",
      60: "swasɑ̃t",
      61: "swasɑ̃teɛ̃",
      70: "swasɑ̃tdis",
      71: "swasɑ̃tɛɔ̃z",
      72: "swasɑ̃tduz",
      73: "swasɑ̃ttʁɛz",
      74: "swasɑ̃tkatoʁz",
      75: "swasɑ̃tkɛ̃z",
      76: "swasɑ̃tsɛz",
      77: "swasɑ̃tdiset",
      78: "swasɑ̃tdizɥit",
      79: "swasɑ̃tdiznɘf",
      80: "katʁɘvɛ̃",
      90: "katʁɘvɛ̃dis",
      91: "katʁɘvɛ̃ɔ̃z",
      92: "katʁɘvɛ̃duz",
      93: "katʁɘvɛ̃tʁɛz",
      94: "katʁɘvɛ̃katoʁz",
      95: "katʁɘvɛ̃kɛ̃z",
      96: "katʁɘvɛ̃sɛz",
      97: "katʁɘvɛ̃diset",
      98: "katʁɘvɛ̃dizɥit",
      99: "katʁɘvɛ̃diznɘf",
    },
    unitFormation: {
      units: "{digit}",
      tens: "{digit}",
      hundreds: "{digit} sɑ̃",
      thousands: "{digit} mil",
    },
    formation: "{thousands}{hundreds}{tens}{units}",
  },
  vowels: {
    a: { weight: 50, translit: "a" },
    e: { weight: 40, translit: "é" },
    ɛ: { weight: 40, translit: "è" },
    i: { weight: 30, translit: "i" },
    ɘ: { weight: 20, translit: "e" },
    o: { weight: 20, translit: "o" },
    ɔ: { weight: 20, translit: "au" },
    ɑ̃: { weight: 15, translit: "an" },
    u: { weight: 15, translit: "ou" },
    ɔ̃: { weight: 15, translit: "on" },
    y: { weight: 10, translit: "u" },
    ɛ̃: { weight: 10, translit: "in" },
    wa: { weight: 3, translit: "oi" },
    wɛ̃: { weight: 1, translit: "oin" },
    wi: { weight: 1, translit: "oui" },
    ɥi: { weight: 1, translit: "ui" },
    ɥɛ̃: { weight: 1, translit: "uin" },
    jɛ̃: { weight: 2, translit: "ien" },
    jɛ: { weight: 2, translit: "iè" },
    jø: { weight: 1, translit: "ie" },
    ja: { weight: 1, translit: "ia" },
    jo: { weight: 1, translit: "io" },
    ju: { weight: 1, translit: "iou" },
    aj: { weight: 1, translit: "aille" },
    ɛj: { weight: 1, translit: "eille" },
    ij: { weight: 1, translit: "ille" },
    œj: { weight: 1, translit: "euille" },
    uj: { weight: 2, translit: "ouille" },
  },
  consonants: {
    ʁ: { weight: 50, translit: "r" },
    s: { weight: 50, translit: "s" },
    l: { weight: 30, translit: "l" },
    t: { weight: 30, translit: "t" },
    k: { weight: 30, translit: "k" },
    d: { weight: 25, translit: "d" },
    m: { weight: 25, translit: "m" },
    p: { weight: 25, translit: "p" },
    n: { weight: 25, translit: "n" },
    v: { weight: 20, translit: "v" },
    ʒ: { weight: 15, translit: "j" },
    z: { weight: 15, translit: "z" },
    f: { weight: 20, translit: "f" },
    b: { weight: 10, translit: "b" },
    ʃ: { weight: 10, translit: "ch" },
    g: { weight: 10, translit: "g" },
    ɲ: { weight: 5, translit: "gn" },
    st: { weight: 3, translit: "st" },
    sk: { weight: 1, translit: "sk" },
    sb: { weight: 1, translit: "sb" },
    sp: { weight: 1, translit: "sp" },
    tʁ: { weight: 3, translit: "tr" },
    kʁ: { weight: 3, translit: "kr" },
    dʁ: { weight: 1, translit: "dr" },
    pʁ: { weight: 3, translit: "pr" },
    vʁ: { weight: 1, translit: "vr" },
    fʁ: { weight: 3, translit: "fr" },
    bʁ: { weight: 3, translit: "br" },
    gʁ: { weight: 1, translit: "gr" },
    kl: { weight: 3, translit: "kl" },
    fl: { weight: 2, translit: "fl" },
    bl: { weight: 3, translit: "bl" },
    pl: { weight: 2, translit: "pl" },
    gl: { weight: 1, translit: "gl" },
    ks: { weight: 1, translit: "ks" },
  },
};
