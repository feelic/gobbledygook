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
        default: { singular: "the", plural: "the" }
      }
    },
    indefinite: {
      default: {
        default: { singular: "a", plural: "" }
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
      default: { singular: "{noun}", plural: "{noun}s" }
    },
    genitive: {
      default: { singular: "{noun}'s", plural: "{noun}s'" }
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
