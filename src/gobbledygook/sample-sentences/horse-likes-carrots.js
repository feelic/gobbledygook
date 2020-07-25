export const horseLikesCarrots = {
  transcript: "the small grey horse lkes carrots",
  entities: {
    horse: {
      core: "horse",
      type: "animal",
      adjectives: { color: "gray", size: "small" },
      number: "singular",
      determination: { type: "definite" },
      person: "thirdPerson",
    },
    carrots: {
      core: "carrot",
      number: "plural",
      adjectives: {
        color: "orange",
        size: "small",
      },
      determination: { type: "indefinite" },
    },
  },
  sentence: {
    subject: {
      id: "horse",
    },
    verb: { verb: "love", tense: "general" },
    object: {
      id: "carrots",
      grammaticalCase: "accusative",
    },
  },
};

export const horseLikesCarrotsJohnnyGaveHim = {
  transcript: "the small grey horse likes carrots that johnny gave him",
  entities: {
    horse: {
      core: "horse",
      type: "animal",
      adjectives: { color: "gray", size: "small" },
      number: "singular",
      determination: { type: "definite" },
      person: "thirdPerson",
    },
    carrots: {
      core: "carrot",
      number: "plural",
      adjectives: { color: "orange", size: "small" },
      determination: { type: "definite" },
    },
    johnny: {
      core: "dʒonɪ",
      number: "singular",
      person: "thirdPerson",
      determination: { type: "properNoun" },
    },
  },
  sentence: {
    subject: {
      id: "horse",
    },
    verb: { verb: "love", tense: "general" },
    object: {
      id: "carrots",
      grammaticalCase: "accusative",
      adjectiveClause: {
        subject: {
          id: "johnny",
        },
        verb: { verb: "give", tense: "past" },
        object: {
          id: "horse",
          grammaticalCase: "dative",
        },
      },
    },
  },
};
