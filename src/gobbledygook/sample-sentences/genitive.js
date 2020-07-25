export const sheHasLostHerDog = {
  transcript: "she lost her dog",
  entities: {
    she: {
      number: "singular",
      person: "thirdPerson",
      gender: "fem",
      usePronoun: true,
    },
    dog: {
      core: "dog",
      number: "singular",
      gender: "masc",
      determination: { type: "possessive", owner: "she", usePronoun: true },
    },
  },
  sentence: {
    subject: {
      id: "she",
    },
    verb: { verb: "lose", tense: "past" },
    object: {
      id: "dog",
      grammaticalCase: "accusative",
    },
  },
};
export const heTakesHisPlace = {
  transcript: "he takes his place",
  entities: {
    he: {
      number: "singular",
      person: "thirdPerson",
      gender: "masc",
      usePronoun: true,
    },
    place: {
      core: "place",
      number: "singular",
      determination: { type: "possessive", owner: "he", usePronoun: true },
    },
  },
  sentence: {
    subject: {
      id: "he",
    },
    verb: { verb: "take", tense: "present" },
    object: {
      id: "place",
      grammaticalCase: "accusative",
    },
  },
};
export const iHaveHiddenMyTreasure = {
  transcript: "i have hidden my treasure",
  entities: {
    i: {
      number: "singular",
      person: "firstPerson",
      gender: "masc",
      usePronoun: true,
    },
    treasure: {
      core: "treasure",
      number: "singular",
      determination: { type: "possessive", owner: "i", usePronoun: true },
    },
  },
  sentence: {
    subject: {
      id: "i",
    },
    verb: { verb: "hide", tense: "past" },
    object: {
      id: "treasure",
      grammaticalCase: "accusative",
    },
  },
};
export const theCastleTowerIsRound = {
  transcript: "The castle tower is round",
  entities: {
    castle: {
      core: "castle",
      number: "singular",
      person: "thirdPerson",
    },
    tower: {
      core: "tower",
      number: "singular",
      determination: { type: "possessive", owner: "castle" },
    },
    round: {
      core: "round",
    },
  },
  sentence: {
    subject: {
      id: "tower",
    },
    verb: { verb: "be", tense: "present" },
    object: {
      id: "round",
      function: "adjective",
      grammaticalCase: "accusative",
    },
  },
};
