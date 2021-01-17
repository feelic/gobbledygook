const vowels = {
  a: {
    symbol: "a",
    traits: {
      height: "open",
      backness: "front",
      roundedness: false,
      nasalization: false,
    },
    translit: "a",
    neighbours: ["ä", "æ", "ɶ"],
  },
  ɑ: {
    symbol: "ɑ",
    traits: {
      height: "open",
      backness: "back",
      roundedness: false,
      nasalization: false,
    },
    translit: "a",
    neighbours: ["ä", "ɑ̃", "ɒ"],
  },
  ɒ: {
    symbol: "ɒ",
    traits: {
      height: "open",
      backness: "back",
      roundedness: true,
      nasalization: false,
    },
    translit: "å",
    neighbours: ["ɑ", "ɒ̈"],
  },
  æ: {
    symbol: "æ",
    traits: {
      height: "near-open",
      backness: "front",
      roundedness: false,
      nasalization: false,
    },
    translit: "ä",
    neighbours: ["a", "ɐ", "ɛ"],
  },
  ɔ: {
    symbol: "ɔ",
    traits: {
      height: "open-mid",
      "backnes,s": "back",
      roundedness: true,
      nasalization: false,
    },
    translit: "o",
    neighbours: ["ɔ̃", "o̞", "ʌ"],
  },
  e: {
    symbol: "e",
    traits: {
      height: "close-mid",
      backness: "front",
      roundedness: false,
      nasalization: false,
    },
    translit: "é",
    neighbours: ["e̞", "ɘ", "ø"],
  },
  ə: {
    symbol: "ə",
    traits: {
      height: "mid",
      backness: "central",
      roundedness: false,
      nasalization: false,
    },
    translit: "e",
    neighbours: ["e̞", "ɘ", "ɜ", "ɵ̞", "ɤ̞"],
  },
  ɘ: {
    symbol: "ɘ",
    traits: {
      height: "close-mid",
      backness: "central",
      roundedness: false,
      nasalization: false,
    },
    translit: "e",
    neighbours: ["e", "ə", "ɪ̈", "ɵ", "ɤ"],
  },
  ɛ: {
    symbol: "ɛ",
    traits: {
      height: "open-mid",
      backness: "front",
      roundedness: false,
      nasalization: false,
    },
    translit: "ä",
    neighbours: ["æ", "e̞", "ɛ̃", "ɜ", "œ"],
  },
  ɜ: {
    symbol: "ɜ",
    traits: {
      height: "open-mid",
      backness: "central",
      roundedness: false,
      nasalization: false,
    },
    translit: "e",
    neighbours: ["ɐ", "ə", "ɛ", "ʌ"],
  },
  i: {
    symbol: "i",
    traits: {
      height: "close",
      backness: "front",
      roundedness: false,
      nasalization: false,
    },
    translit: "i",
    neighbours: ["ɨ", "y"],
  },
  o: {
    symbol: "o",
    traits: {
      height: "close-mid",
      backness: "back",
      roundedness: true,
      nasalization: false,
    },
    translit: "o",
    neighbours: ["o̞", "ɵ", "ɤ"],
  },
  ø: {
    symbol: "ø",
    traits: {
      height: "close-mid",
      backness: "front",
      roundedness: true,
      nasalization: false,
    },
    translit: "e",
    neighbours: ["e", "ø̞", "ɵ"],
  },
  œ: {
    symbol: "œ",
    traits: {
      height: "open-mid",
      backness: "front",
      roundedness: true,
      nasalization: false,
    },
    translit: "e",
    neighbours: ["ɛ", "ø̞", "œ̃"],
  },
  ɶ: {
    symbol: "ɶ",
    traits: {
      height: "open",
      backness: "front",
      roundedness: true,
      nasalization: false,
    },
    translit: "e",
    neighbours: ["a", "ɒ̈"],
  },
  u: {
    symbol: "u",
    traits: {
      height: "close",
      backness: "back",
      roundedness: true,
      nasalization: false,
    },
    translit: "u",
    neighbours: ["ɯ", "ʉ"],
  },
  ʌ: {
    symbol: "ʌ",
    traits: {
      height: "open-mid",
      backness: "back",
      roundedness: false,
      nasalization: false,
    },
    translit: "e",
    neighbours: ["ɔ", "ɜ", "ɤ̞"],
  },
  y: {
    symbol: "y",
    traits: {
      height: "close",
      backness: "front",
      roundedness: true,
      nasalization: false,
    },
    translit: "y",
    neighbours: ["i", "ʉ"],
  },
};

export const nasalVowels = {
  ã: {
    symbol: "ã",
    traits: {
      height: "open",
      backness: "central",
      roundedness: false,
      nasalization: true,
    },
    translit: "a",
    neighbours: ["ä", "ɑ̃"],
  },
  ɑ̃: {
    symbol: "ɑ̃",
    traits: {
      height: "open",
      backness: "back",
      roundedness: false,
      nasalization: true,
    },
    translit: "a",
    neighbours: ["ã", "ɑ"],
  },
  ɔ̃: {
    symbol: "ɔ̃",
    traits: {
      height: "open-mid",
      backness: "back",
      roundedness: true,
      nasalization: true,
    },
    translit: "on",
    neighbours: ["ɔ", "õ"],
  },
  ɛ̃: {
    symbol: "ɛ̃",
    traits: {
      height: "open-mid",
      backness: "front",
      roundedness: false,
      nasalization: true,
    },
    translit: "in",
    neighbours: ["ɛ", "œ̃"],
  },
  õ: {
    symbol: "õ",
    traits: {
      height: "mid",
      backness: "back",
      roundedness: true,
      nasalization: true,
    },
    translit: "on",
    neighbours: ["ɔ̃", "o̞"],
  },
  œ̃: {
    symbol: "œ̃",
    traits: {
      height: "open-mid",
      backness: "front",
      roundedness: true,
      nasalization: true,
    },
    translit: "en",
    neighbours: ["ɛ̃", "œ"],
  },
};

export default vowels;
