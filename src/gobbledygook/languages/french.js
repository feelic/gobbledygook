export const french = {
  name: "french",
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
        masc: { singular: "lɘ", plural: "le" },
        fem: { singular: "la", plural: "le" }
      }
    },
    indefinite: {
      default: {
        masc: { singular: "lɘ", plural: "le" },
        fem: { singular: "la", plural: "le" }
      }
    }
    // demonstrative: { singular: "", plural: "" },
    // distal: { singular: "", plural: "" },
    // possessive: {
    //   firstPerson: { singular: "", plural: "" },
    //   secondPerson: { singular: "", plural: "" },
    //   thirdPerson: { singular: "", plural: "" }
    // },
    // quantifiers: { all: "", some: "", many: "", few: "", no: "" },
    // distributive: { each: "", any: "" },
    // interrogative: { what: "", which: "" }
  },
  phonemeSeparators: {
    vowel: "t",
    consonant: "e"
  },
  declension: {
    default: {
      default: {
        default: {
          masc: { singular: "{noun}", plural: "{noun}" },
          fem: { singular: "{noun}", plural: "{noun}" }
        }
      }
    },
    adjective: {
      default: {
        default: {
          default: { default: "{adjective}" }
        }
      },
      sEnding: {
        default: {
          default: { default: "{adjective}" },
          fem: { default: "{adjective}s" }
        }
      },
      tEnding: {
        default: {
          default: { default: "{adjective}" },
          fem: { default: "{adjective}t" }
        }
      },
      zEnding: {
        default: {
          default: { default: "{adjective}" },
          fem: { default: "{adjective}z" }
        }
      },
      alEnding: {
        default: {
          default: { default: "{adjective}al", plural: "{adjective}o" }
        }
      }
    }
  },
  conjugation: {
    general: {
      firstPerson: { singular: "{verb}", plural: "{verb}ɔ̃" },
      secondPerson: { singular: "{verb}", plural: "{verb}e" },
      thirdPerson: { singular: "{verb}", plural: "{verb}" }
    },
    present: {
      firstPerson: { singular: "{verb}", plural: "{verb}ɔ̃" },
      secondPerson: { singular: "{verb}", plural: "{verb}e" },
      thirdPerson: { singular: "{verb}", plural: "{verb}" }
    }
  },
  nounPhraseFormation: "{determiner} {preadjectives} {noun} {postadjectives}",
  verbPhraseFormation: "{preadverbs} {verb} {postadverbs}",
  sentenceFormation: "{subject} {verb} {object}",
  morphemeDictionary: {
    horse: { morpheme: "ʃɘval", gender: "masc" },
    carrot: { morpheme: "kaʁot", gender: "fem" },
    love: { morpheme: "ɛm" },
    gray: {
      morpheme: "gʁi",
      declensionGroup: "zEnding"
    },
    orange: { morpheme: "orɑ̃ʒ" },
    small: { morpheme: "pɘti", declensionGroup: "tEnding" }
  },
  adjectives: {
    preadjectives: ["size", "age"],
    postadjectives: ["color"]
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
    uj: { weight: 2, translit: "ouille" }
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
    ks: { weight: 1, translit: "ks" }
  }
};
