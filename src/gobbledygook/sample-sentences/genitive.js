export const sheHasLostHerDog = {
  entities: {
    she:{
      number: "singular",
      person: "thirdPerson",
      gender: "fem",
      usePronoun: true,
    },
    dog: {
      core: "dog",
      number: "singular",
      gender: "masc",
      determination: { type: "possessive", owner: 'she', usePronoun: true },
    }
  },
  sentence: {
    subject: {
      id: 'she'
    },
    verb: { verb: "lose", tense: "past" },
    object: {
      id: 'dog',
      grammaticalCase: 'accusative',
    }
  }
};
export const heHasTakenHisPlace = {
  entities: {
    he:{
      number: "singular",
      person: "thirdPerson",
      gender: "masc",
      usePronoun: true,
    },
    place: {
      core: "place",
      number: "plural",
      determination: { type: "possessive", owner: 'he', usePronoun: true },
    }
  },
  sentence: {
    subject: {
      id: 'he'
    },
    verb: { verb: "take", tense: "present" },
    object: {
      id: 'place',
      grammaticalCase: 'accusative',
    }
  }
}
export const iHaveHiddenMyTreasure = {
  entities: {
    i:{
      number: "plural",
      person: "thirdPerson",
      gender: "masc",
      usePronoun: true,
    },
    treasure: {
      core: "treasure",
      number: "singular",
      determination: { type: "possessive", owner: 'i', usePronoun: true },
    }
  },
  sentence: {
    subject: {
      id: 'he'
    },
    verb: { verb: "hide", tense: "past" },
    object: {
      id: 'treasure',
      grammaticalCase: 'accusative',
    }
  }
}
export const theCastleTowerIsRound = {
  entities: {
    castle:{
      core: "castle",
      number: "singular",
      gender: "masc",
    },
    tower: {
      core: "tower",
      number: "singular",
      determination: { type: "possessive", owner: 'castle' },
    },
    round: {
      core: "round"
    }
  },
  sentence: {
    subject: {
      id: 'tower'
    },
    verb: { verb: "is", tense: "present" },
    object: {
      id: 'round',
      grammaticalCase: 'accusative',
    }
  }
}
