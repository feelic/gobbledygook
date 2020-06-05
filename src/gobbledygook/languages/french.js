export const french = {
  pronouns: {
    first: { singular: "", plural: { inclusive: "", exclusive: "" } },
    second: { singular: "", plural: "" },
    third: { singular: "", plural: "" }
  },
  determiners: {
    definite: {
      masc: { singular: "le", plural: "les" },
      fem: { singular: "la", plural: "les" }
    },
    indefinite: {
      masc: { singular: "le", plural: "les" },
      fem: { singular: "la", plural: "les" }
    },
    demonstrative: { singular: "", plural: "" },
    distal: { singular: "", plural: "" },
    possessive: {
      firstPerson: { singular: "", plural: { inclusive: "", exclusive: "" } },
      secondPerson: { singular: "", plural: "" },
      thirdPerson: { singular: "", plural: "" }
    },
    quantifiers: { all: "", some: "", many: "", few: "", no: "" },
    distributive: { each: "", any: "" },
    interrogative: { what: "", which: "" }
  },
  declension: {
    nominative: {
      masc: { singular: "{noun}", plural: "{noun}s" },
      fem: { singular: "{noun}", plural: "{noun}s" }
    },
    accusative: {
      masc: { singular: "{noun}", plural: "{noun}s" },
      fem: { singular: "{noun}", plural: "{noun}s" }
    },
    dative: {
      masc: { singular: "{noun}", plural: "{noun}s" },
      fem: { singular: "{noun}", plural: "{noun}s" }
    },
    ablative: {
      masc: { singular: "{noun}", plural: "{noun}s" },
      fem: { singular: "{noun}", plural: "{noun}s" }
    },
    genitive: {
      masc: { singular: "{noun}", plural: "{noun}s" },
      fem: { singular: "{noun}", plural: "{noun}s" }
    },
    vocative: {
      masc: { singular: "{noun}", plural: "{noun}s" },
      fem: { singular: "{noun}", plural: "{noun}s" }
    },
    locative: {
      masc: { singular: "{noun}", plural: "{noun}s" },
      fem: { singular: "{noun}", plural: "{noun}s" }
    },
    instrumental: {
      masc: { singular: "{noun}", plural: "{noun}s" },
      fem: { singular: "{noun}", plural: "{noun}s" }
    }
  },
  conjugation: {
    general: {
      firstPerson: { singular: "{verb}e", plural: "{verb}ont" },
      secondPerson: { singular: "{verb}es", plural: "{verb}ez" },
      thirdPerson: { singular: "{verb}e", plural: "{verb}ent" }
    },
    present: {
      firstPerson: { singular: "{verb}e", plural: "{verb}ont" },
      secondPerson: { singular: "{verb}es", plural: "{verb}ez" },
      thirdPerson: { singular: "{verb}e", plural: "{verb}ent" }
    }
  },
  nounPhraseFormation: "{determiner} {preadjectives} {noun} {postadjectives}",
  verbPhraseFormation: "{preadverbs} {verb} {postadverbs}",
  sentenceFormation: "{subject} {verb} {object}",
  morphemeDictionary: {
    horse: { morpheme: "cheval", gender: "masc" },
    carrot: { morpheme: "carotte", gender: "fem" },
    love: { morpheme: "aim" },
    gray: { morpheme: "gris" },
    orange: { morpheme: "orange" },
    small: { morpheme: "petit" }
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
    ø: { weight: 20, translit: "e" },
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
