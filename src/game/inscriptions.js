const inscriptionsCatalogue = [{
  transcript: "the small grey horse likes small orange carrots",
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
      determination: { type: "definite" },
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
}];

export default inscriptionsCatalogue;
