export const horseLikesCarrots = {
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
};

export const horseLikesCarrotsAndGrass = {
  transcript: "the horse likes carrots and grass",
  entities: {
    horse: {
      core: "horse",
      type: "animal",
      number: "singular",
      determination: { type: "definite" },
      person: "thirdPerson",
    },
    carrots: {
      core: "carrot",
      number: "plural",
      adjectives: {
        size: "small",
      },
      determination: { type: "definite" },
    },
    grass: {
      core: "grass",
      number: "singular",
      determination: { type: "definite" },
    },
  },
  sentence: {
    subject: {
      id: "horse",
    },
    verb: { verb: "love", tense: "general" },
    object: {
      entities: [{ id: "carrots" }, { id: "grass" }],
      grammaticalCase: "accusative",
    },
  },
};

export const horseAndDonkeyLikeCarrots = {
  transcript: "the horse and the donkey like carrots",
  entities: {
    horse: {
      core: "horse",
      type: "animal",
      number: "singular",
      determination: { type: "definite" },
      person: "thirdPerson",
    },
    donkey: {
      core: "donkey",
      type: "animal",
      number: "singular",
      determination: { type: "definite" },
      person: "thirdPerson",
    },
    carrots: {
      core: "carrot",
      number: "plural",
      adjectives: {
        size: "small",
      },
      determination: { type: "definite" },
    },
    grass: {
      core: "grass",
      number: "singular",
      adjectives: {
        size: "small",
      },
      determination: { type: "definite" },
    },
  },
  sentence: {
    subject: {
      entities: [{ id: "horse" }, { id: "donkey" }],
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
      gender: "masc"
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

export const sheGoesToTheBeach = {
  transcript: "she goes to the beach",
  entities: {
    she: {
      number: "singular",
      person: "thirdPerson",
      gender: "fem",
      usePronoun: true,
    },
    beach: {
      core: "beach",
      number: "singular",
      determination: { type: "definite" },
    },
  },
  sentence: {
    subject: {
      id: "she",
    },
    verb: { verb: "go", tense: "present" },
    object: {
      id: "beach",
      preposition: "to",
      grammaticalCase: "accusative",
    },
  },
};

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
export const sheFoundADog = {
  transcript: "she found a dog",
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
      determination: { type: "indefinite" },
    },
  },
  sentence: {
    subject: {
      id: "she",
    },
    verb: { verb: "find", tense: "past" },
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
  transcript: "i have hidden my treasure in a cave",
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
    cave: {
      core: "cave",
      determination: { type: "indefinite" },
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
    adverbialClauses: [
      {
        id: "cave",
        preposition: "in",
      },
    ],
  },
};

export const bobsHorseLikesCarrots = {
  transcript: "Bob's horse likes carrots",
  entities: {
    horse: {
      core: "horse",
      type: "animal",
      number: "singular",
      determination: { type: "definite", owner: "bob", usePronoun: false },
      person: "thirdPerson",
    },
    carrots: {
      core: "carrot",
      number: "plural",
      determination: { type: "definite" },
    },
    bob: {
      core: "bob",
      number: "singular",
      person: "thirdPerson",
      gender: "masc",
      determination: { type: "properNoun" },
    },
  },
  sentence: {
    subject: {
      id: "horse",
      genitive: "bob",
    },
    verb: { verb: "love", tense: "general", adverbs: ["really"] },
    object: {
      id: "carrots",
      grammaticalCase: "accusative",
    },
  },
};

export const theyHave31Chickens = {
  transcript: "they have 31 chickens",
  entities: {
    he: {
      number: "plural",
      person: "thirdPerson",
      gender: "masc",
      usePronoun: true,
    },
    chickens: {
      core: "chicken",
      number: "plural",
      determination: { type: "count" },
      count: 31,
    },
  },
  sentence: {
    subject: {
      id: "he",
    },
    verb: { verb: "have", tense: "present" },
    object: {
      id: "chickens",
      grammaticalCase: "accusative",
    },
  },
};

export const theHorseIsUgly = {
  transcript: "The horse is ugly",
  entities: {
    horse: {
      core: "horse",
      number: "singular",
      person: "thirdPerson",
    },
    ugly: {
      core: "ugly",
    },
  },
  sentence: {
    subject: {
      id: "horse",
    },
    verb: { verb: "be", tense: "present" },
    object: {
      id: "ugly",
      type: "adjective",
      grammaticalCase: "accusative",
    },
  },
};

export const bobIsUglyAndStupid = {
  transcript: "Bob is ugly and stupid",
  entities: {
    bob: {
      core: "bob",
      number: "singular",
      person: "thirdPerson",
      determination: { type: "properNoun" },
    },
    ugly: {
      core: "ugly",
    },
    stupid: {
      core: "stupid",
    },
  },
  sentence: {
    subject: {
      id: "bob",
    },
    verb: { verb: "be", tense: "present" },
    object: {
      entities: [{ id: "ugly", adverbs: ["very"] }, { id: "stupid" }],
      type: "adjective",
      grammaticalCase: "accusative",
    },
  },
};

export const jezIsTallerThanMark = {
  transcript: "Jez is taller than Mark",
  entities: {
    mark: {
      core: "mɑrk",
      number: "singular",
      person: "thirdPerson",
      determination: { type: "properNoun" },
    },
    jez: {
      core: "dʒez",
      number: "singular",
      person: "thirdPerson",
      determination: { type: "properNoun" },
    },
    tall: {
      core: "tall",
    },
  },
  sentence: {
    subject: {
      id: "jez",
    },
    verb: { verb: "be", tense: "present" },
    object: {
      quality: "tall",
      degree: "comparative",
      type: "comparison",
      value: "positive",
      object: "mark",
    },
  },
};
export const johnnyIsTheTallestOfTheGroup = {
  transcript: "Johnny is the tallest of the group",
  entities: {
    johnny: {
      core: "dʒonɪ",
      number: "singular",
      person: "thirdPerson",
      determination: { type: "properNoun" },
      gender: "masc"
    },
    group: {
      core: "group",
      number: "singular",
      person: "thirdPerson",
      determination: { type: "definite" },
    },
    tall: {
      core: "tall",
    },
  },
  sentence: {
    subject: {
      id: "johnny",
    },
    verb: { verb: "be", tense: "present" },
    object: {
      quality: "tall",
      degree: "superlative",
      type: "comparison",
      value: "positive",
      object: "group",
    },
  },
};

export const theDogSmellsReallyBad = {
  transcript: "the dog smells really bad",
  entities: {
    dog: {
      core: "dog",
      number: "singular",
      person: "thirdPerson",
    },
    bad: {
      core: "bad",
    },
  },
  sentence: {
    subject: {
      id: "dog",
    },
    verb: { verb: "smell", tense: "present" },
    object: {
      id: "bad",
      adverbs: ["very"],
      type: "adjective",
      grammaticalCase: "accusative",
    },
  },
};

export const theCastleTowerIsRound = {
  transcript: "The castle tower is round",
  entities: {
    castle: {
      core: "castle",
      type: "object",
      number: "singular",
      person: "thirdPerson",
    },
    tower: {
      core: "tower",
      number: "singular",
      determination: { type: "definite", owner: "castle" },
    },
    round: {
      core: "round",
    },
  },
  sentence: {
    subject: {
      id: "tower",
      genitive: "castle",
    },
    verb: { verb: "be", tense: "present" },
    object: {
      id: "round",
      type: "adjective",
      grammaticalCase: "accusative",
    },
  },
};

export const theChickenAndTheThiefAreGone = {};

export const sheSings = {
  transcript: "She sings",
  entities: {
    she: {
      number: "singular",
      person: "thirdPerson",
      gender: "fem",
      usePronoun: true,
    },
  },
  sentence: {
    subject: {
      id: "she"
    },
    verb: { verb: "sing", tense: "present" }
  },
};

export const whoIsThis = {
  transcript: "Who is he?",
  entities: {
    he: {
      number: "singular",
      person: "thirdPerson",
      gender: "masc",
      usePronoun: true,
    },
  },
  sentence: {
    type: "openInterrogative",
    question: "who",
    subject: {
      id: "he"
    },
    verb: { verb: "be", tense: "present" }
  },
};
export const whatIsThis = {
  transcript: "What is this?",
  entities: {
    this: {
      number: "singular",
      person: "thirdPerson",
      gender: "masc",
      usePronoun: true,
    },
  },
  sentence: {
    type: "openInterrogative",
    question: "what",
    subject: {
      id: "this"
    },
    verb: { verb: "be", tense: "present" }
  },
};
export const areYouReady = {
  transcript: "Are you Ready?",
  entities: {
    you: {
      number: "plural",
      person: "secondPerson",
      gender: "masc",
      usePronoun: true,
      determination: { type: "demonstrative" },
    },
    ready: {
      core: "ready",
    },
  },
  sentence: {
    type: "polarInterrogative",
    subject: {
      id: "you"
    },
    verb: { verb: "be", tense: "present" },
    object: {
      id: "ready",
      type: "adjective",
    }
  },
};
export const whereIsTheDog = {
  transcript: "Where is the dog?",
  entities: {
    dog: {
      core: "dog",
      number: "singular",
      person: "thirdPerson",
      determination: { type: "definite" },
      gender: "masc",
    },
    ready: {
      core: "ready",
    },
  },
  sentence: {
    type: "openInterrogative",
    question: "where",
    subject: {
      id: "dog"
    },
    verb: { verb: "be", tense: "present" },
  },
};
export const whyAreTheseChickenHere = {
  transcript: "Why are these chicken here?",
  entities: {
    chicken: {
      core: "chicken",
      number: "plural",
      person: "thirdPerson",
      determination: { type: "demonstrative" },
      gender: "masc",
    },
    here: {
      core: "here",
    },
  },
  sentence: {
    type: "openInterrogative",
    question: "why",
    subject: {
      id: "chicken"
    },
    verb: { verb: "be", tense: "present" },
    object: {
      id: "here",
      type: "adverb",
    }
  },
};
export const whyAreYouSoDumb = {
  transcript: "Why are you so dumb?",
  entities: {
    you: {
      number: "singular",
      person: "secondPerson",
      gender: "masc",
      usePronoun: true,
    },
    dumb: {
      core: "dumb",
    },
  },
  sentence: {
    type: "openInterrogative",
    question: "why",
    subject: {
      id: "you"
    },
    verb: { verb: "be", tense: "present" },
    object: {
      entities: [{ id: "dumb", adverbs: ["so"] }],
      type: "adjective",
      grammaticalCase: "accusative",
    }
  },
};
