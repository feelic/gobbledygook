export const english = {
  name: "english",
  pronouns: {
    firstPerson: {
      default: { default: { singular: "", plural: "" } }
    },
    secondPerson: {
      default: { default: { singular: "", plural: "" } }
    },
    thirdPerson: {
      nominative: {
        default: { default: "ɪt", plural: "ðeɪ" },
        masc: { singular: "hi", plural: "ðeɪ" },
        fem: { default: "ʃi", plural: "ðeɪ" }
      },
      accusative: {
        default: { default: "ɪt" },
        masc: { singular: "", plural: "" },
        fem: { singular: "la", plural: "" }
      },
      dative: {
        default: { default: "ɪt" },
        masc: { singular: "hɪm", plural: "lɘr" },
        fem: { singular: "lɥi", plural: "lɘr" }
      },
      genitive: {
        default: { default: "ɪt" },
        masc: { singular: "hɪs", plural: "ð" },
        fem: { singular: "lɥi", plural: "lɘr" }
      }
    }
  },
  determiners: {
    definite: {
      default: {
        default: {
          default: { singular: "ðə", plural: "ðə" }
        }
      }
    },
    indefinite: {
      default: {
        default: {
          default: { singular: "ə", plural: "" }
        }
      }
    },
    properNoun: {
      default: {
        default: {
          default: { singular: "", plural: "" }
        }
      }
    },
    demonstrative: {
      default: {
        default: {
          default: { singular: "", plural: "" }
        }
      }
    },
    distal: {
      default: {
        default: {
          default: { singular: "", plural: "" }
        }
      }
    },
    possessive: {
      firstPerson: {
        default: {
          masc: { singular: "mon", plural: "mes" },
          fem: { singular: "ma", plural: "mes" }
        }
      },
      secondPerson: {
        default: {
          masc: { singular: "ton", plural: "tes" },
          fem: { singular: "ta", plural: "tes" }
        }
      },
      thirdPerson: {
        default: {
          masc: { singular: "son", plural: "ses" },
          fem: { singular: "sa", plural: "ses" }
        }
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
      default: {
        default: { default: "{verb}" },
        thirdPerson: { singular: "{verb}z", plural: "{verb}" }
      },
      past: {
        default: { default: "{verb}d" }
      }
    }
  },
  nounPhraseFormation: "{determiner} {preadjectives} {noun} {adjectiveClause}",
  verbPhraseFormation: "{preadverbs} {verb} {postadverbs}",
  sentenceFormation: "{subject} {verb} {object}",
  adjectiveClauseFormation: "ðat {subject} {verb} {object}",
  morphemeDictionary: {
    horse: { morpheme: "hors" },
    carrot: { morpheme: "kærət" },
    love: { morpheme: "lov" },
    gray: { morpheme: "greɪ" },
    orange: { morpheme: "orɪndʒ" },
    small: { morpheme: "smɔl" },
    give: {
      morpheme: "giv",
      irregular: {
        default: {
          default: {
            default: { default: "{verb}" },
            thirdPerson: { singular: "{verb}z", plural: "{verb}" }
          },
          past: { default: { default: "geɪv" } }
        }
      }
    },
    go: { morpheme: "go" },
    have: {
      morpheme: "ha",
      irregular: {
        default: {
          default: {
            default: { default: "{verb}v" },
            thirdPerson: { singular: "{verb}z", plural: "{verb}v" }
          }
        }
      }
    },
    beach: { morpheme: "bitʃ" },
    chicken: { morpheme: "tʃɪkɪn" },
    dog: { morpheme: "dɒɡ" },
    lose: { morpheme: "luz" },
    take: { morpheme: "teik" },
    place: { morpheme: "pleis" },
    hide: { morpheme: "haid" },
    treasure: { morpheme: "trɛʒə" },
    castle: { morpheme: "kɑsəl/" },
    tower: { morpheme: "taʊ.ər" },
    be: { morpheme: "be" },
    round: { morpheme: "ɹaʊnd" }
  },
  adjectives: {
    preadjectives: ["size", "age", "color"]
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
      90: "naɪnti"
    },
    unitFormation: {
      units: "{digit}",
      tens: "{digit}",
      hundreds: "{digit} hundred and",
      thousands: "{digit} θawzend"
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
