const consonants = {
  b: {
    symbol: "b",
    traits: {
      place: "bilabial",
      manner: "plosive",
      voicing: true,
    },
    translit: "b",
  },
  // ɓ: {
  //   symbol: 'ɓ',
  //   traits: {
  //     place: 'bilabial',
  //     manner: 'implosive',
  //     voicing: true,
  //   },
  //   translit: 'b`',
  // },
  // ʙ: {
  //   symbol: 'ʙ',
  //   traits: {
  //     place: 'bilabial',
  //     manner: 'trill',
  //     voicing: true,
  //   },
  //   translit: 'b',
  // },
  β: {
    symbol: "β",
    traits: {
      place: "bilabial",
      manner: "fricative",
      voicing: true,
    },
    translit: "v",
  },
  c: {
    symbol: "c",
    traits: {
      place: "palatal",
      manner: "plosive",
      voicing: false,
    },
    translit: "k",
  },
  // ɕ: {
  //   symbol: 'ɕ',
  //   traits: {
  //     place: 'alveolopalatal',
  //     manner: 'fricative',
  //     voicing: false,
  //   },
  //   translit: 'sh',
  // },
  // ç: {
  //   symbol: 'ç',
  //   traits: {
  //     place: 'palatal',
  //     manner: 'fricative',
  //     voicing: false,
  //   },
  //   translit: 'sh',
  // },
  d: {
    symbol: "d",
    traits: {
      place: "alveolar",
      manner: "plosive",
      voicing: true,
    },
    translit: "d",
  },
  // ɗ: {
  //   symbol: 'ɗ',
  //   traits: {
  //     place: 'alveolar',
  //     manner: 'implosive',
  //     voicing: true,
  //   },
  //   translit: 'd',
  // },
  // ɖ: {
  //   symbol: 'ɖ',
  //   traits: {
  //     place: 'retroflex',
  //     manner: 'plosive',
  //     voicing: true,
  //   },
  //   translit: 'd',
  // },
  ð: {
    symbol: "ð",
    traits: {
      place: "dental",
      manner: "fricative",
      voicing: true,
    },
    translit: "ð",
  },
  ʤ: {
    symbol: "ʤ",
    traits: {
      place: "alveolopalatal",
      manner: "affricate",
      voicing: true,
    },
    translit: "dj",
  },
  f: {
    symbol: "f",
    traits: {
      place: "labiodental",
      manner: "fricative",
      voicing: false,
    },
    translit: "f",
  },
  // ɟ: {
  //   symbol: 'ɟ',
  //   traits: {
  //     place: 'palatal',
  //     manner: 'plosive',
  //     voicing: true,
  //   },
  //   translit: 'g',
  // },
  // ʄ: {
  //   symbol: 'ʄ',
  //   traits: {
  //     place: 'palatal',
  //     manner: 'implosive',
  //     voicing: true,
  //   },
  //   translit: 'g',
  // },
  g: {
    symbol: "g",
    traits: {
      place: "velar",
      manner: "plosive",
      voicing: true,
    },
    translit: "g",
  },
  // ɠ: {
  //   symbol: 'ɠ',
  //   traits: {
  //     place: 'velar',
  //     manner: 'implosive',
  //     voicing: true,
  //   },
  //   translit: 'g',
  // },
  // ɢ: {
  //   symbol: 'ɢ',
  //   traits: {
  //     place: 'uvular',
  //     manner: 'plosive',
  //     voicing: true,
  //   },
  //   translit: 'g',
  // },
  // ʛ: {
  //   symbol: 'ʛ',
  //   traits: {
  //     place: 'uvular',
  //     manner: 'implosive',
  //     voicing: true,
  //   },
  //   translit: 'g',
  // },
  h: {
    symbol: "h",
    traits: {
      place: "glottal",
      manner: "fricative",
      voicing: false,
    },
    translit: "h",
  },
  // ɦ: {
  //   symbol: 'ɦ',
  //   traits: {
  //     place: 'glottal',
  //     manner: 'fricative',
  //     voicing: true,
  //   },
  //   translit: 'h',
  // },
  // ħ: {
  //   symbol: 'ħ',
  //   traits: {
  //     place: 'pharyngeal',
  //     manner: 'fricative',
  //     voicing: false,
  //   },
  //   translit: 'kh',
  // },
  // ɥ: {
  //   symbol: 'ɥ',
  //   traits: {
  //     place: 'labial-palatal',
  //     manner: 'approximant',
  //     voicing: true,
  //   },
  //   translit: 'u',
  // },
  // ʜ: {
  //   symbol: 'ʜ',
  //   traits: {
  //     place: 'pharyngeal',
  //     manner: 'fricative',
  //     voicing: false,
  //   },
  //   translit: 'kh',
  // },
  j: {
    symbol: "j",
    traits: {
      place: "palatal",
      manner: "approximant",
      voicing: true,
    },
    translit: "j",
  },
  // ʝ: {
  //   symbol: 'ʝ',
  //   traits: {
  //     place: 'palatal',
  //     manner: 'fricative',
  //     voicing: true,
  //   },
  //   translit: 'j',
  // },
  k: {
    symbol: "k",
    traits: {
      place: "velar",
      manner: "plosive",
      voicing: false,
    },
    translit: "k",
  },
  l: {
    symbol: "l",
    traits: {
      place: "alveolar",
      manner: "lateral-approximant",
      voicing: true,
    },
    translit: "l",
  },
  // ɭ: {
  //   symbol: 'ɭ',
  //   traits: {
  //     place: 'retroflex',
  //     manner: 'lateral',
  //     voicing: true,
  //   },
  //   translit: 'l',
  // },
  // ɬ: {
  //   symbol: 'ɬ',
  //   traits: {
  //     place: 'alveolar',
  //     manner: 'lateral-fricative',
  //     voicing: false,
  //   },
  //   translit: 'll',
  // },
  ɮ: {
    symbol: "ɮ",
    traits: {
      place: "alveolar",
      manner: "lateral-fricative",
      voicing: true,
    },
    translit: "ll",
  },
  // ʟ: {
  //   symbol: 'ʟ',
  //   traits: {
  //     place: 'velar',
  //     manner: 'lateral',
  //     voicing: true,
  //   },
  //   translit: 'l',
  // },
  m: {
    symbol: "m",
    traits: {
      place: "bilabial",
      manner: "nasal",
      voicing: true,
    },
    translit: "m",
  },
  // ɱ: {
  //   symbol: 'ɱ',
  //   traits: {
  //     place: 'labiodental',
  //     manner: 'nasal',
  //     voicing: true,
  //   },
  //   translit: 'm',
  // },
  // ɰ: {
  //   symbol: 'ɰ',
  //   traits: {
  //     place: 'velar',
  //     manner: 'approximant',
  //     voicing: true,
  //   },
  //   translit: 'w',
  // },
  n: {
    symbol: "n",
    traits: {
      place: "alveolar",
      manner: "nasal",
      voicing: true,
    },
    translit: "n",
  },
  ŋ: {
    symbol: "ŋ",
    traits: {
      place: "velar",
      manner: "nasal",
      voicing: true,
    },
    translit: "n",
  },
  // ɳ: {
  //   symbol: 'ɳ',
  //   traits: {
  //     place: 'retroflex',
  //     manner: 'nasal',
  //     voicing: true,
  //   },
  //   translit: 'n',
  // },
  ɲ: {
    symbol: "ɲ",
    traits: {
      place: "palatal",
      manner: "nasal",
      voicing: true,
    },
    translit: "n",
  },
  // ɴ: {
  //   symbol: 'ɴ',
  //   traits: {
  //     place: 'uvular',
  //     manner: 'nasal',
  //     voicing: true,
  //   },
  //   translit: 'n',
  // },
  // ɸ: {
  //   symbol: 'ɸ',
  //   traits: {
  //     place: 'bilabial',
  //     manner: 'fricative',
  //     voicing: false,
  //   },
  //   translit: 'f',
  // },
  θ: {
    symbol: "θ",
    traits: {
      place: "dental",
      manner: "fricative",
      voicing: false,
    },
    translit: "þ",
  },
  p: {
    symbol: "p",
    traits: {
      place: "bilabial",
      manner: "plosive",
      voicing: false,
    },
    translit: "p",
  },
  q: {
    symbol: "q",
    traits: {
      place: "uvular",
      manner: "plosive",
      voicing: false,
    },
    translit: "k",
  },
  r: {
    symbol: "r",
    traits: {
      place: "alveolar",
      manner: "trill",
      voicing: true,
    },
    translit: "r",
  },
  ɹ: {
    symbol: "ɹ",
    traits: {
      place: "alveolar",
      manner: "approximant",
      voicing: true,
    },
    translit: "r",
  },
  // ɺ: {
  //   symbol: 'ɺ',
  //   traits: {
  //     place: 'alveolar',
  //     manner: 'lateral-flap',
  //     voicing: true,
  //   },
  //   translit: 'r',
  // },
  // ɾ: {
  //   symbol: 'ɾ',
  //   traits: {
  //     place: 'alveolar',
  //     manner: 'flap',
  //     voicing: true,
  //   },
  //   translit: 'r',
  // },
  // ɻ: {
  //   symbol: 'ɻ',
  //   traits: {
  //     place: 'retroflex',
  //     manner: 'approximant',
  //     voicing: true,
  //   },
  //   translit: 'r',
  // },
  ʀ: {
    symbol: "ʀ",
    traits: {
      place: "uvular",
      manner: "trill",
      voicing: true,
    },
    translit: "r",
  },
  ʁ: {
    symbol: "ʁ",
    traits: {
      place: "uvular",
      manner: "fricative",
      voicing: true,
    },
    translit: "r",
  },
  // ɽ: {
  //   symbol: 'ɽ',
  //   traits: {
  //     place: 'retroflex',
  //     manner: 'flap',
  //     voicing: true,
  //   },
  //   translit: 'r',
  // },
  s: {
    symbol: "s",
    traits: {
      place: "alveolar",
      manner: "fricative",
      voicing: false,
    },
    translit: "s",
  },
  // ʂ: {
  //   symbol: 'ʂ',
  //   traits: {
  //     place: 'retroflex',
  //     manner: 'fricative',
  //     voicing: false,
  //   },
  //   translit: 'sh',
  // },
  ʃ: {
    symbol: "ʃ",
    traits: {
      place: "alveolopalatal",
      manner: "fricative",
      voicing: false,
    },
    translit: "sh",
  },
  t: {
    symbol: "t",
    traits: {
      place: "alveolar",
      manner: "plosive",
      voicing: false,
    },
    translit: "t",
  },
  // ʈ: {
  //   symbol: 'ʈ',
  //   traits: {
  //     place: 'retroflex',
  //     manner: 'plosive',
  //     voicing: false,
  //   },
  //   translit: 't',
  // },
  ʧ: {
    symbol: "ʧ",
    traits: {
      place: "alveolopalatal",
      manner: "affricate",
      voicing: false,
    },
    translit: "ch",
  },
  // ʋ: {
  //   symbol: 'ʋ',
  //   traits: {
  //     place: 'labiodental',
  //     manner: 'approximant',
  //     voicing: true,
  //   },
  //   translit: 'w',
  // },
  v: {
    symbol: "v",
    traits: {
      place: "labiodental",
      manner: "fricative",
      voicing: true,
    },
    translit: "v",
  },
  // ⱱ: {
  //   symbol: 'ⱱ',
  //   traits: {
  //     place: 'labiodental',
  //     manner: 'flap',
  //     voicing: true,
  //   },
  //   translit: 'v',
  // },
  ɣ: {
    symbol: "ɣ",
    traits: {
      place: "velar",
      manner: "fricative",
      voicing: true,
    },
    translit: "jh",
  },
  w: {
    symbol: "w",
    traits: {
      place: "labial-velar",
      manner: "approximant",
      voicing: true,
    },
    translit: "w",
  },
  // ʍ: {
  //   symbol: 'ʍ',
  //   traits: {
  //     place: 'labial-velar',
  //     manner: 'fricative',
  //     voicing: false,
  //   },
  //   translit: 'h',
  // },
  x: {
    symbol: "x",
    traits: {
      place: "velar",
      manner: "fricative",
      voicing: false,
    },
    translit: "kh",
  },
  χ: {
    symbol: "χ",
    traits: {
      place: "uvular",
      manner: "fricative",
      voicing: false,
    },
    translit: "kh",
  },
  // ʎ: {
  //   symbol: 'ʎ',
  //   traits: {
  //     place: 'palatal',
  //     manner: 'lateral-approximant',
  //     voicing: true,
  //   },
  //   translit: 'l',
  // },
  z: {
    symbol: "z",
    traits: {
      place: "alveolar",
      manner: "fricative",
      voicing: true,
    },
    translit: "z",
  },
  // ʑ: {
  //   symbol: 'ʑ',
  //   traits: {
  //     place: 'alveolopalatal',
  //     manner: 'fricative',
  //     voicing: true,
  //   },
  //   translit: 'z',
  // },
  // ʐ: {
  //   symbol: 'ʐ',
  //   traits: {
  //     place: 'retroflex',
  //     manner: 'fricative',
  //     voicing: true,
  //   },
  //   translit: 'j',
  // },
  ʒ: {
    symbol: "ʒ",
    traits: {
      place: "alveolopalatal",
      manner: "fricative",
      voicing: true,
    },
    translit: "j",
  },
  ʔ: {
    symbol: "ʔ",
    traits: {
      place: "glottal",
      manner: "plosive",
      voicing: false,
    },
    translit: "'",
  },
  ʡ: {
    symbol: "ʡ",
    traits: {
      place: "pharyngeal",
      manner: "plosive",
      voicing: true,
    },
    translit: "'",
  },
  // ʕ: {
  //   symbol: 'ʕ',
  //   traits: {
  //     place: 'pharyngeal',
  //     manner: 'fricative',
  //     voicing: true,
  //   },
  //   translit: 'h',
  // },
  // ʢ: {
  //   symbol: 'ʢ',
  //   traits: {
  //     place: 'pharyngeal',
  //     manner: 'fricative',
  //     voicing: true,
  //   },
  //   translit: 'h',
  // },
};

export default consonants;
