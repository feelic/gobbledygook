import morphemeDictionary from "./dictionary";

export const french = {
  name: "french",
  morphemeDictionary,
  pronouns: {
    rules: ["person", "grammaticalCase", "gender", "number"],
    forms: {
      firstPerson: {
        default: { default: { singular: "ʒ", plural: "nu" } },
      },
      secondPerson: {
        default: { default: { singular: "ty", plural: "vu" } },
      },
      thirdPerson: {
        nominative: {
          masc: { default: "il" },
          fem: { default: "ɛl" },
        },
        accusative: {
          masc: { singular: "lɘ", plural: "le" },
          fem: { singular: "la", plural: "le" },
        },
        dative: { default: { singular: "lɥi", plural: "lɘr" } },
        genitive: { default: { singular: "sɔ̃", plural: "lɘr" } },
      },
    },
  },
  determiners: {
    rules: ["determination.type", "owner.person", "gender", "number"],
    forms: {
      properNoun: {
        default: {
          default: { default: "" },
        },
      },
      definite: {
        default: {
          default: { singular: "lɘ", plural: "le" },
          masc: { singular: "lɘ", plural: "le" },
          fem: { singular: "la", plural: "le" },
        },
      },
      indefinite: {
        default: {
          default: { singular: "ɛ̃", plural: "de" },
          masc: { singular: "ɛ̃", plural: "de" },
          fem: { singular: "yn", plural: "de" },
        },
      },
      demonstrative: {
        default: {
          default: {
            singular: "sɘ", plural: "se"
          },
          masc: {
            singular: "sɘ", plural: "se"
          },
          fem: {
            singular: "sɛt", plural: "se"
          },
         }},
      // distal: { singular: "", plural: "" },
      possessive: {
        firstPerson: {
          masc: { singular: "mɔ̃", plural: "me" },
          fem: { singular: "ma", plural: "me" },
        },
        secondPerson: {
          masc: { singular: "tɔ̃", plural: "te" },
          fem: { singular: "ta", plural: "te" },
        },
        thirdPerson: {
          masc: { singular: "sɔ̃", plural: "se" },
          fem: { singular: "sa", plural: "se" },
        },
      },
    },
  },
  declension: {
    rules: ["type", "declensionGroup", "grammaticalCase", "gender", "number"],
    forms: {
      default: {
        default: {
          default: {
            default: { default: "{morpheme}" },
            masc: { singular: "{morpheme}", plural: "{morpheme}" },
            fem: { singular: "{morpheme}", plural: "{morpheme}" },
          }
        },
      },
      adjective: {
        default: {
          default: {
            default: { default: "{morpheme}" },
          },
        },
        sEnding: {
          default: {
            default: { default: "{morpheme}" },
            fem: { default: "{morpheme}s" },
          },
        },
        tEnding: {
          default: {
            default: { default: "{morpheme}" },
            fem: { default: "{morpheme}t" },
          },
        },
        zEnding: {
          default: {
            default: { default: "{morpheme}" },
            fem: { default: "{morpheme}z" },
          },
        },
        alEnding: {
          default: {
            default: { default: "{morpheme}al", plural: "{morpheme}o" },
          },
        },
        dEnding: {
          default: {
            default: { default: "{morpheme}" },
            fem: { default: "{morpheme}d" },
          },
        },
      },
      comparative: {
        default: {
          default: {
            default: { default: "{morpheme}" },
          },
        },
        sEnding: {
          default: {
            default: { default: "{morpheme}" },
            fem: { default: "{morpheme}s" },
          },
        },
        tEnding: {
          default: {
            default: { default: "{morpheme}" },
            fem: { default: "{morpheme}t" },
          },
        },
        zEnding: {
          default: {
            default: { default: "{morpheme}" },
            fem: { default: "{morpheme}z" },
          },
        },
        alEnding: {
          default: {
            default: { default: "{morpheme}al", plural: "{morpheme}o" },
          },
        },
        dEnding: {
          default: {
            default: { default: "{morpheme}" },
            fem: { default: "{morpheme}d" },
          },
        },
      },
      superlative: {
        default: {
          default: {
            default: { default: "{morpheme}" },
          },
        },
        sEnding: {
          default: {
            default: { default: "{morpheme}" },
            fem: { default: "{morpheme}s" },
          },
        },
        tEnding: {
          default: {
            default: { default: "{morpheme}" },
            fem: { default: "{morpheme}t" },
          },
        },
        zEnding: {
          default: {
            default: { default: "{morpheme}" },
            fem: { default: "{morpheme}z" },
          },
        },
        alEnding: {
          default: {
            default: { default: "{morpheme}al", plural: "{morpheme}o" },
          },
        },
        dEnding: {
          default: {
            default: { default: "{morpheme}" },
            fem: { default: "{morpheme}d" },
          },
        },
      },
    },
    prepositions: {
      lative: "a",
      genitive: "dɘ"
    }
  },
  conjugation: {
    rules: ["group", "tense", "person", "number"],
    forms: {
      default: {
        general: {
          firstPerson: { singular: "{morpheme}", plural: "{morpheme}ɔ̃" },
          secondPerson: { singular: "{morpheme}", plural: "{morpheme}e" },
          thirdPerson: { singular: "{morpheme}", plural: "{morpheme}" },
        },
        present: {
          firstPerson: { singular: "{morpheme}", plural: "{morpheme}ɔ̃" },
          secondPerson: { singular: "{morpheme}", plural: "{morpheme}e" },
          thirdPerson: { singular: "{morpheme}", plural: "{morpheme}" },
        },
        past: {
          firstPerson: { singular: "ɛ {morpheme}e", plural: "avɔ̃ {morpheme}e" },
          secondPerson: { singular: "a {morpheme}e", plural: "ave {morpheme}e" },
          thirdPerson: { singular: "a {morpheme}e", plural: "ɔ̃ {morpheme}e" },
        },
      },
    },
  },
  nounPhraseFormation: [
    "preposition",
    "determiner",
    "preadjectives",
    "noun",
    "postadjectives",
    "genitive",
    "adjectiveClause",
  ],
  verbPhraseFormation: ["verb", "adverb"],
  sentenceFormations: {
    declarative: ["subject", "verb", "object", "adverbialClauses"],
    polarInterrogative: ["verb", "subject", "object"],
    openInterrogative: ["interrogativePronoun", "verb", "subject", "object"],
  },
  adjectiveClauseFormation: ["relativePronoun", "subject", "object", "verb"],
  adjectiveFormation: ["adverb", "adjective"],
  adjectives: {
    preadjectives: ["size", "age"],
    postadjectives: ["color"],
  },
  comparisonAdverb: {
    comparative: {
      negative: "mwɛ̃",
      positive: "ply"
    },
    superlative: {
      negative: "mwɛ̃",
      positive: "ply"
    }
  },
  comparative: ["comparisonAdverb", "adjective", "comparisonPreposition", "comparedObject"],
  superlative: ["comparisonAdverb", "adjective", "comparedObject"],
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
