export const english = {
  name: "english",
  pronouns: {
    firstPerson: {
      default: { singular: "", plural: "" }
    },
    secondPerson: {
      default: { singular: "", plural: "" }
    },
    thirdPerson: {
      default: { singular: "", plural: "" }
    }
  },
  determiners: {
    definite: {
      default: {
        default: { singular: "ðə", plural: "ðə" }
      }
    },
    indefinite: {
      default: {
        default: { singular: "ə", plural: "" }
      }
    },
    demonstrative: {
      default: {
        default: { singular: "", plural: "" }
      }
    },
    distal: {
      default: {
        default: { singular: "", plural: "" }
      }
    },
    possessive: {
      firstPerson: {
        default: { singular: "", plural: "" }
      },
      secondPerson: {
        default: { singular: "", plural: "" }
      },
      thirdPerson: {
        default: { singular: "", plural: "" }
      }
    },
    quantifiers: { all: "", some: "", many: "", few: "", no: "" },
    distributive: { each: "", any: "" },
    interrogative: { what: "", which: "" }
  },
  declension: {
    default: {
      default: {
        default: {
          default: { singular: "{noun}", plural: "{noun}s" }
        },
        genitive: {
          default: { singular: "{noun}'s", plural: "{noun}s'" }
        }
      }
    },
    adjective: {
      default: { default: { default: { default: "{adjective}" } } }
    }
  },
  conjugation: {
    default: {
      default: { default: "{verb}" },
      thirdPerson: { singular: "{verb}s", plural: "{verb}" }
    }
  },
  nounPhraseFormation: "{determiner} {preadjectives} {noun}",
  verbPhraseFormation: "{preadverbs} {verb} {postadverbs}",
  sentenceFormation: "{subject} {verb} {object}",
  morphemeDictionary: {
    horse: { morpheme: "hors" },
    carrot: { morpheme: "kærət" },
    love: { morpheme: "lov" },
    gray: { morpheme: "greɪ" },
    orange: { morpheme: "orɪndʒ" },
    small: { morpheme: "smɔl" }
  },
  adjectives: {
    preadjectives: ["size", "age", "color"]
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
    ə: { weight: 1, translit: "e" }
  },
  consonants: {
    r: { weight: 1, translit: "r" },
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
