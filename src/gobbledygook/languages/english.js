export const english = {
  pronouns: {
    firstPerson: { singular: "", plural: { inclusive: "", exclusive: "" } },
    secondPerson: { singular: "", plural: "" },
    thirdPerson: { singular: "", plural: "" }
  },
  determiners: {
    definite: { neut: { singular: "the", plural: "the" } },
    indefinite: { neut: { singular: "a", plural: "" } },
    demonstrative: { neut: { singular: "", plural: "" } },
    distal: { neut: { singular: "", plural: "" } },
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
      neut: { singular: "{noun}", plural: "{noun}s" }
    },
    accusative: {
      neut: { singular: "{noun}", plural: "{noun}s" }
    },
    dative: {
      neut: { singular: "{noun}", plural: "{noun}s" }
    },
    ablative: {
      neut: { singular: "{noun}", plural: "{noun}s" }
    },
    genitive: {
      neut: { singular: "{noun}'s", plural: "{noun}s'" }
    },
    vocative: {
      neut: { singular: "{noun}", plural: "{noun}s" }
    },
    locative: {
      neut: { singular: "{noun}", plural: "{noun}s" }
    },
    instrumental: {
      neut: { singular: "{noun}", plural: "{noun}s" }
    }
  },
  conjugation: {
    general: {
      firstPerson: { singular: "{verb}", plural: "{verb}" },
      secondPerson: { singular: "{verb}", plural: "{verb}" },
      thirdPerson: { singular: "{verb}s", plural: "{verb}" }
    },
    present: {
      firstPerson: { singular: "{verb}", plural: "{verb}" },
      secondPerson: { singular: "{verb}", plural: "{verb}" },
      thirdPerson: { singular: "{verb}s", plural: "{verb}" }
    }
  },
  nounPhraseFormation: "{determiner} {preadjectives} {noun}",
  verbPhraseFormation: "{preadverbs} {verb} {postadverbs}",
  sentenceFormation: "{subject} {verb} {object}",
  morphemeDictionary: {
    horse: { morpheme: "horse" },
    carrot: { morpheme: "carrot" },
    love: { morpheme: "love" },
    gray: { morpheme: "gray" },
    orange: { morpheme: "orange" },
    small: { morpheme: "small" }
  },
  adjectives: {
    preadjectives: ["size", "age", "color"]
  }
};
