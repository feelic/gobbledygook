export const template = {
  pronouns: {
    //person
    default: {
      //case
      default: {
        //gender
        default: {
          //number
          default: "i"
        }
      }
    }
  },
  determiners: {
    //type
    default: {
      //case
      default: {
        //gender
        default: {
          //number
          default: "a"
        }
      }
    },
    quantifiers: { all: "", some: "", many: "", few: "", no: "" },
    distributive: { each: "", any: "" },
    interrogative: { what: "", which: "" }
  },
  declension: {
    //case
    default: {
      //gender
      default: {
        //number
        default: "{noun}a"
      }
    }
  },
  conjugation: {
    //tense
    default: {
      //person
      default: {
        //number
        default: ""
      }
    }
  },
  nounPhraseFormation: "{determiner} {preadjectives} {noun} {postadjectives}",
  verbPhraseFormation: "{preadverbs} {verb} {postadverbs}",
  sentenceFormation: "{subject} {verb} {object}",
  morphemeDictionary: {
    horse: { morpheme: "cheval", gender: "masc" }
  },
  adjectives: {
    preadjectives: ["size", "age"],
    postadjectives: ["color"]
  },
  vowels: {
    a: { weight: 50, translit: "a" }
  },
  consonants: {
    t: { weight: 50, translit: "t" }
  }
};
