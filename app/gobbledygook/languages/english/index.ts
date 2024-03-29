import { Language } from "../../interfaces";
import morphemeDictionary from "./dictionary";

export const english: Language = {
  name: "english",
  morphemeDictionary,
  grammaticalCases: null,
  pronouns: {
    rules: ["person", "grammaticalCase", "gender", "number"],
    forms: {
      firstPerson: {
        default: { default: { singular: "aɪ", plural: "wɪ" } },
      },
      secondPerson: {
        default: { default: { singular: "ju", plural: "ju" } },
      },
      thirdPerson: {
        nominative: {
          default: { default: "ɪt", plural: "ðeɪ" },
          masc: { singular: "hi", plural: "ðeɪ" },
          fem: { default: "ʃi", plural: "ðeɪ" },
        },
        accusative: {
          default: { default: "ɪt" },
          masc: { singular: "", plural: "" },
          fem: { singular: "", plural: "" },
        },
        dative: {
          default: { default: "ɪt" },
          masc: { singular: "hɪm", plural: "" },
          fem: { singular: "", plural: "" },
        },
        genitive: {
          default: { default: "ɪts" },
          masc: { singular: "hɪs", plural: "" },
          fem: { singular: "", plural: "" },
        },
      },
    },
  },
  determiners: {
    rules: ["determination.type", "owner.person", "owner.gender", "number"],
    forms: {
      definite: { default: { default: { singular: "ðə", plural: "ðə" } } },
      indefinite: { default: { default: { singular: "ə", plural: "" } } },
      properNoun: { default: { default: { singular: "", plural: "" } } },
      demonstrative: {
        default: { default: { singular: "ðis", plural: "ðiz" } },
      },
      distal: { default: { default: { singular: "", plural: "" } } },
      possessive: {
        firstPerson: {
          default: { singular: "maɪ", plural: "maɪ" },
          masc: { singular: "maɪ", plural: "maɪ" },
          fem: { singular: "maɪ", plural: "maɪ" },
        },
        secondPerson: {
          default: { singular: "jɔr", plural: "jɔr" },
          masc: { singular: "jɔr", plural: "jɔr" },
          fem: { singular: "jɔr", plural: "jɔr" },
        },
        thirdPerson: {
          default: { singular: "ɪts", plural: "ɪts" },
          masc: { singular: "hɪz", plural: "ðɛr" },
          fem: { singular: "hər", plural: "ðɛr" },
        },
      },
    },
  },
  declension: {
    rules: ["type", "grammaticalCase", "number"],
    forms: {
      default: {
        default: { singular: "{morpheme}", plural: "{morpheme}s" },

        genitive: { singular: "{morpheme}s", plural: "{morpheme}s" },
      },
      adjective: {
        default: { default: "{morpheme}" },
      },
      comparative: {
        default: { default: "{morpheme}" },
      },
      superlative: {
        default: { default: "{morpheme}" },
      },
    },
    prepositions: {
      lative: "tu",
      inessive: "in",
      benefactive: "for",
    },
  },
  conjugation: {
    rules: ["group", "tense", "person", "number"],
    forms: {
      default: {
        default: {
          default: { default: "{morpheme}" },
          thirdPerson: { singular: "{morpheme}z", plural: "{morpheme}" },
        },
        past: {
          default: { default: "{morpheme}d" },
        },
      },
    },
  },
  syntax: {
    nounPhraseFormation: [
      "preposition",
      "determiner",
      "genitive",
      "preadjectives",
      "noun",
      "adjectiveClause",
    ],
    verbPhraseFormation: ["adverb", "verb"],
    sentenceFormations: {
      declarative: ["subject", "verb", "object", "adverbialClauses"],
      polarInterrogative: ["verb", "subject", "object"],
      openInterrogative: ["interrogativePronoun", "verb", "subject", "object"],
    },
    adjectiveClauseFormation: ["relativePronoun", "subject", "verb", "object"],
    adjectiveFormation: ["adverb", "adjective"],
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
    adjectives: {
      preadjectives: ["size", "age", "color"],
    },
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
      0: "o",
      1: "wʌn",
      2: "tu",
      3: "θri",
      4: "fɔr",
      5: "faɪv",
      6: "sɪks",
      7: "sɛvən",
      8: "eɪt",
      9: "naɪn",
      10: "tɛn",
      11: "ɪlɛvən",
      12: "twelv",
      13: "θərtin",
      14: "fɔrtin",
      15: "fɪftin",
      16: "sɪkstin",
      17: "sɛvəntin",
      18: "eɪtin",
      19: "naɪntin",
      20: "twɛnti",
      30: "θərti",
      40: "fɔrti",
      50: "fɪfti",
      60: "sɪksti",
      70: "sɛvənti",
      80: "eɪti",
      90: "naɪnti",
    },
    unitFormation: {
      units: "{digit}",
      tens: "{digit}",
      hundreds: "{digit} hundred and",
      thousands: "{digit} θawzend",
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
    ʊ: { weight: 1, translit: "oo" },
    // eɪ: { weight: 1, translit: "a" },
    i: { weight: 1, translit: "ee" },
    u: { weight: 1, translit: "oo" },
    // aɪ: { weight: 1, translit: "i" },
    // ɔɪ: { weight: 1, translit: "oi" },
    // aʊ: { weight: 1, translit: "ou" },
    ə: { weight: 1, translit: "e" },
  },
  consonants: {
    r: { weight: 1, translit: "r" },
    ɹ: { weight: 1, translit: "r" },
    s: { weight: 1, translit: "s" },
    l: { weight: 1, translit: "l" },
    ð: { weight: 1, translit: "th" },
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
