import morphemeDictionary from "./dictionary";

export const danish = {
  name: "danish",
  morphemeDictionary,
  pronouns: {
    rules: ["person", "grammaticalCase", "gender", "number"],
    forms: {
      firstPerson: {
        default: { default: { singular: "jɑ", plural: "vi" } }
      },
      secondPerson: {
        default: { default: { singular: "du", plural: "i" } }
      },
      thirdPerson: {
        nominative: {
          default: { default: "hæn", plural: "di" },
          masc: { singular: "hæn", plural: "di" },
          fem: { default: "hun", plural: "di" }
        },
        accusative: {
          default: { singular: "hɑm", plural: "dem" },
          masc: { singular: "hɑm", plural: "dem" },
          fem: { singular: "henə", plural: "dem" }
        },
        dative: {
          default: { singular: "hɑm", plural: "dem" },
          masc: { singular: "hɑm", plural: "dem" },
          fem: { singular: "henə", plural: "dem" }
        },
        genitive: {
          default: { default: "" },
          masc: { singular: "hæns", plural: "dɛrəs" },
          fem: { singular: "henəs", plural: "dɛrəs" }
        }
      }
    }
  },
  determiners: {
    rules: [
      "determination.type",
      "owner.person",
      "owner.gender",
      "gender",
      "number"
    ],
    forms: {
      definite: {
        default: {
          default: {
            default: { singular: "den", plural: "de" },
            neuter: { singular: "det", plural: "de" }
          }
        }
      },
      indefinite: {
        default: {
          default: {
            default: { singular: "en", plural: "" },
            neuter: { singular: "et", plural: "" }
          }
        }
      },
      properNoun: {
        default: { default: { default: { singular: "", plural: "" } } }
      },
      demonstrative: {
        default: {
          default: {
            default: { singular: "dɛnə", plural: "disə" },
            neutral: { singular: "dɛtə", plural: "disə" }
          }
        }
      },
      distal: {
        default: { default: { default: { singular: "", plural: "" } } }
      },
      possessive: {
        firstPerson: {
          default: { default: { singular: "", plural: "" } },
          masc: { default: { singular: "", plural: "" } },
          fem: { default: { singular: "", plural: "" } }
        },
        secondPerson: {
          default: { default: { singular: "", plural: "" } },
          masc: { default: { singular: "", plural: "" } },
          fem: { default: { singular: "", plural: "" } }
        },
        thirdPerson: {
          default: { default: { singular: "", plural: "" } },
          masc: { default: { singular: "", plural: "" } },
          fem: { default: { singular: "", plural: "" } }
        }
      }
    }
  },
  declension: {
    rules: ["type", "grammaticalCase", "number"],
    forms: {
      default: {
        default: { singular: "{morpheme}", plural: "{morpheme}" },

        genitive: { singular: "{morpheme}s", plural: "{morpheme}s" },
      },
      adjective: {
        default: { default: "{morpheme}" }
      },
      comparative: {
        default: { default: "{morpheme}" }
      },
      superlative: {
        default: { default: "{morpheme}" }
      }
    },
    prepositions: {
      lative: "til",
      inessive: "i",
      benefactive: "til"
    }
  },
  conjugation: {
    rules: ["tense"],
    forms: {
      default: "{morpheme}"
    }
  },
  nounPhraseFormation: [
    "preposition",
    "determiner",
    "genitive",
    "preadjectives",
    "noun",
    "adjectiveClause"
  ],
  verbPhraseFormation: ["adverb", "verb"],
  sentenceFormations: {
    declarative: ["subject", "verb", "object", "adverbialClauses"],
    polarInterrogative: ["verb", "subject", "object"],
    openInterrogative: ["interrogativePronoun", "verb", "subject", "object"]
  },
  adjectiveClauseFormation: ["relativePronoun", "subject", "verb", "object"],
  adjectiveFormation: ["adverb", "adjective"],
  adjectives: {
    preadjectives: ["size", "age", "color"]
  },
  comparisonAdverb: {
    comparative: {
      negative: "lɛs",
      positive: "mɔr"
    },
    superlative: {
      negative: "list",
      positive: "mɔst"
    }
  },
  comparative: [
    "comparisonAdverb",
    "adjective",
    "comparisonPreposition",
    "comparedObject"
  ],
  superlative: [
    "determiner",
    "comparisonAdverb",
    "adjective",
    "comparedObject"
  ],
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
      90: ""
    },
    unitFormation: {
      units: "{digit}",
      tens: "{digit}",
      hundreds: "{digit}",
      thousands: "{digit}"
    },
    formation: "{thousands}{hundreds}{tens}{units}"
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
    ə: { weight: 1, translit: "e" }
  },
  consonants: {
    ʀ: { weight: 1, translit: "r" },
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
    ks: { weight: 1, translit: "ks" }
  }
};
