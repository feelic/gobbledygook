export default {
  a: {
    symbol: "a",
    traits: {
      height: "open",
      backness: "front",
      roundedness: false,
      nasalization: false
    },
    translit: "a",
    neighbours: ["ä", "æ", "ɶ"]
  },
  ã: {
    symbol: "ã",
    traits: {
      height: "open",
      backness: "central",
      roundedness: false,
      nasalization: true
    },
    translit: "a",
    neighbours: ["ä", "ɑ̃"]
  },
  // ä: {
  //   symbol: 'ä',
  //   traits: {
  //     height: 'open',
  //     backness: 'central',
  //     roundedness: false,
  //     nasalization: false,
  //   },
  //   translit: 'a',
  //   neighbours: ['a', 'ã', 'ɑ', 'ɐ', 'ɒ̈'],
  // },
  ɑ: {
    symbol: "ɑ",
    traits: {
      height: "open",
      backness: "back",
      roundedness: false,
      nasalization: false
    },
    translit: "a",
    neighbours: ["ä", "ɑ̃", "ɒ"]
  },
  ɑ̃: {
    symbol: "ɑ̃",
    traits: {
      height: "open",
      backness: "back",
      roundedness: false,
      nasalization: true
    },
    translit: "a",
    neighbours: ["ã", "ɑ"]
  },
  // ɐ: {
  //   symbol: 'ɐ',
  //   traits: {
  //     height: 'near-open',
  //     backness: 'central',
  //     roundedness: false,
  //     nasalization: false,
  //   },
  //   translit: 'a',
  //   neighbours: ['ä', 'æ', 'ɜ', 'ɞ'],
  // },
  ɒ: {
    symbol: "ɒ",
    traits: {
      height: "open",
      backness: "back",
      roundedness: true,
      nasalization: false
    },
    translit: "å",
    neighbours: ["ɑ", "ɒ̈"]
  },
  // ɒ̈: {
  //   symbol: 'ɒ̈',
  //   traits: {
  //     height: 'open',
  //     backness: 'central',
  //     roundedness: true,
  //     nasalization: false,
  //   },
  //   translit: 'å',
  //   neighbours: ['ä', 'ɒ', 'ɞ', 'ɶ'],
  // },
  æ: {
    symbol: "æ",
    traits: {
      height: "near-open",
      backness: "front",
      roundedness: false,
      nasalization: false
    },
    translit: "ä",
    neighbours: ["a", "ɐ", "ɛ"]
  },
  ɔ: {
    symbol: "ɔ",
    traits: {
      height: "open-mid",
      "backnes,s": "back",
      roundedness: true,
      nasalization: false
    },
    translit: "o",
    neighbours: ["ɔ̃", "o̞", "ʌ"]
  },
  ɔ̃: {
    symbol: "ɔ̃",
    traits: {
      height: "open-mid",
      backness: "back",
      roundedness: true,
      nasalization: true
    },
    translit: "on",
    neighbours: ["ɔ", "õ"]
  },
  e: {
    symbol: "e",
    traits: {
      height: "close-mid",
      backness: "front",
      roundedness: false,
      nasalization: false
    },
    translit: "é",
    neighbours: ["e̞", "ɘ", "ø"]
  },
  // e̞: {
  //   symbol: 'e̞',
  //   traits: {
  //     height: 'mid',
  //     backness: 'front',
  //     roundedness: false,
  //     nasalization: false,
  //   },
  //   translit: 'é',
  //   neighbours: ['e', 'ə', 'ɛ', 'ø̞'],
  // },
  ə: {
    symbol: "ə",
    traits: {
      height: "mid",
      backness: "central",
      roundedness: false,
      nasalization: false
    },
    translit: "e",
    neighbours: ["e̞", "ɘ", "ɜ", "ɵ̞", "ɤ̞"]
  },
  ɘ: {
    symbol: "ɘ",
    traits: {
      height: "close-mid",
      backness: "central",
      roundedness: false,
      nasalization: false
    },
    translit: "e",
    neighbours: ["e", "ə", "ɪ̈", "ɵ", "ɤ"]
  },
  ɛ: {
    symbol: "ɛ",
    traits: {
      height: "open-mid",
      backness: "front",
      roundedness: false,
      nasalization: false
    },
    translit: "ä",
    neighbours: ["æ", "e̞", "ɛ̃", "ɜ", "œ"]
  },
  ɛ̃: {
    symbol: "ɛ̃",
    traits: {
      height: "open-mid",
      backness: "front",
      roundedness: false,
      nasalization: true
    },
    translit: "in",
    neighbours: ["ɛ", "œ̃"]
  },
  ɜ: {
    symbol: "ɜ",
    traits: {
      height: "open-mid",
      backness: "central",
      roundedness: false,
      nasalization: false
    },
    translit: "e",
    neighbours: ["ɐ", "ə", "ɛ", "ʌ"]
  },
  // ɞ: {
  //   symbol: 'ɞ',
  //   traits: {
  //     height: 'near-open',
  //     backness: 'central',
  //     roundedness: true,
  //     nasalization: false,
  //   },
  //   translit: 'e',
  //   neighbours: ['ɐ', 'ɒ̈'],
  // },
  i: {
    symbol: "i",
    traits: {
      height: "close",
      backness: "front",
      roundedness: false,
      nasalization: false
    },
    translit: "i",
    neighbours: ["ɨ", "y"]
  },
  // ɨ: {
  //   symbol: 'ɨ',
  //   traits: {
  //     height: 'close',
  //     backness: 'central',
  //     roundedness: false,
  //     nasalization: false,
  //   },
  //   translit: 'y',
  //   neighbours: ['i', 'ɪ̈', 'ɯ', 'ʉ'],
  // },
  // ɪ̈: {
  //   symbol: 'ɪ̈',
  //   traits: {
  //     height: 'near-close',
  //     backness: 'central',
  //     roundedness: false,
  //     nasalization: false,
  //   },
  //   translit: 'u',
  //   neighbours: ['ɘ', 'ɨ', 'ʊ̈'],
  // },
  // ɯ: {
  //   symbol: 'ɯ',
  //   traits: {
  //     height: 'close',
  //     backness: 'back',
  //     roundedness: false,
  //     nasalization: false,
  //   },
  //   translit: 'u',
  //   neighbours: ['ɨ', 'u'],
  // },
  o: {
    symbol: "o",
    traits: {
      height: "close-mid",
      backness: "back",
      roundedness: true,
      nasalization: false
    },
    translit: "o",
    neighbours: ["o̞", "ɵ", "ɤ"]
  },
  // o̞: {
  //   symbol: 'o̞',
  //   traits: {
  //     height: 'mid',
  //     backness: 'back',
  //     roundedness: true,
  //     nasalization: false,
  //   },
  //   translit: 'o',
  //   neighbours: ['ɔ', 'o', 'õ', 'ɵ̞', 'ɤ̞'],
  // },
  õ: {
    symbol: "õ",
    traits: {
      height: "mid",
      backness: "back",
      roundedness: true,
      nasalization: true
    },
    translit: "on",
    neighbours: ["ɔ̃", "o̞"]
  },
  ø: {
    symbol: "ø",
    traits: {
      height: "close-mid",
      backness: "front",
      roundedness: true,
      nasalization: false
    },
    translit: "e",
    neighbours: ["e", "ø̞", "ɵ"]
  },
  // ø̞: {
  //   symbol: 'ø̞',
  //   traits: {
  //     height: 'mid',
  //     backness: 'front',
  //     roundedness: true,
  //     nasalization: false,
  //   },
  //   translit: 'e',
  //   neighbours: ['e̞', 'ø', 'ɵ̞', 'œ'],
  // },
  // ɵ: {
  //   symbol: 'ɵ',
  //   traits: {
  //     height: 'close-mid',
  //     backness: 'central',
  //     roundedness: true,
  //     nasalization: false,
  //   },
  //   translit: 'e',
  //   neighbours: ['ɘ', 'o', 'ø', 'ɵ̞', 'ʊ̈'],
  // },
  // ɵ̞: {
  //   symbol: 'ɵ̞',
  //   traits: {
  //     height: 'mid',
  //     backness: 'central',
  //     roundedness: true,
  //     nasalization: false,
  //   },
  //   translit: 'e',
  //   neighbours: ['ə', 'o̞', 'ø̞', 'ɵ'],
  // },
  œ: {
    symbol: "œ",
    traits: {
      height: "open-mid",
      backness: "front",
      roundedness: true,
      nasalization: false
    },
    translit: "e",
    neighbours: ["ɛ", "ø̞", "œ̃"]
  },
  œ̃: {
    symbol: "œ̃",
    traits: {
      height: "open-mid",
      backness: "front",
      roundedness: true,
      nasalization: true
    },
    translit: "en",
    neighbours: ["ɛ̃", "œ"]
  },
  ɶ: {
    symbol: "ɶ",
    traits: {
      height: "open",
      backness: "front",
      roundedness: true,
      nasalization: false
    },
    translit: "e",
    neighbours: ["a", "ɒ̈"]
  },
  u: {
    symbol: "u",
    traits: {
      height: "close",
      backness: "back",
      roundedness: true,
      nasalization: false
    },
    translit: "u",
    neighbours: ["ɯ", "ʉ"]
  },
  // ʉ: {
  //   symbol: 'ʉ',
  //   traits: {
  //     height: 'close',
  //     backness: 'central',
  //     roundedness: true,
  //     nasalization: false,
  //   },
  //   translit: 'u',
  //   neighbours: ['ɨ', 'u', 'ʊ̈', 'y'],
  // },
  // ʊ̈: {
  //   symbol: 'ʊ̈',
  //   traits: {
  //     height: 'near-close',
  //     backness: 'central',
  //     roundedness: true,
  //     nasalization: false,
  //   },
  //   translit: 'e',
  //   neighbours: ['ɪ̈', 'ɵ', 'ʉ'],
  // },
  ʌ: {
    symbol: "ʌ",
    traits: {
      height: "open-mid",
      backness: "back",
      roundedness: false,
      nasalization: false
    },
    translit: "e",
    neighbours: ["ɔ", "ɜ", "ɤ̞"]
  },
  y: {
    symbol: "y",
    traits: {
      height: "close",
      backness: "front",
      roundedness: true,
      nasalization: false
    },
    translit: "y",
    neighbours: ["i", "ʉ"]
  }
  // ɤ: {
  //   symbol: 'ɤ',
  //   traits: {
  //     height: 'close-mid',
  //     backness: 'back',
  //     roundedness: false,
  //     nasalization: false,
  //   },
  //   translit: 'e',
  //   neighbours: ['ɘ', 'o', 'ɤ̞'],
  // },
  // ɤ̞: {
  //   symbol: 'ɤ̞',
  //   traits: {
  //     height: 'mid',
  //     backness: 'back',
  //     roundedness: false,
  //     nasalization: false,
  //   },
  //   translit: 'e',
  //   neighbours: ['ə', 'o̞', 'ʌ', 'ɤ'],
  // },
};
