import { SentenceDefinition } from "../interfaces";

export const iHaveAPinkCar: SentenceDefinition = {
  transcript: "I have a pink car",
  entities: {
    car: {
      core: "car",
      type: "object",
      adjectives: { color: "pink" },
      number: "singular",
      determination: { type: "indefinite" },
      person: "thirdPerson",
    },
    i: {
      number: "singular",
      person: "firstPerson",
      usePronoun: true,
      gender: "masc",
    },
  },
  sentence: {
    subject: {
      id: "i",
      grammaticalCase: "nominative",
    },
    verb: { verb: "have", tense: "general" },
    object: {
      id: "car",
      grammaticalCase: "accusative",
    },
  },
};

export const horseLikesCarrots: SentenceDefinition = {
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
      grammaticalCase: "nominative",
    },
    verb: { verb: "love", tense: "general" },
    object: {
      id: "carrots",
      grammaticalCase: "accusative",
    },
  },
};

export const horseLikesCarrotsAndGrass: SentenceDefinition = {
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
      grammaticalCase: "nominative",
    },
    verb: { verb: "love", tense: "general" },
    object: {
      entities: [{ id: "carrots" }, { id: "grass" }],
      grammaticalCase: "accusative",
    },
  },
};

export const horseAndDonkeyLikeCarrots: SentenceDefinition = {
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

export const horseLikesCarrotsJohnnyGaveHim: SentenceDefinition = {
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
      gender: "masc",
    },
  },
  sentence: {
    subject: {
      id: "horse",
      grammaticalCase: "nominative",
    },
    verb: { verb: "love", tense: "general" },
    object: {
      id: "carrots",
      grammaticalCase: "accusative",
      adjectiveClause: {
        subject: {
          id: "johnny",
          grammaticalCase: "nominative",
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

export const sheGoesToTheBeach: SentenceDefinition = {
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
      grammaticalCase: "nominative",
    },
    verb: { verb: "go", tense: "present" },
    adverbialClauses: [
      {
        id: "beach",
        grammaticalCase: "lative",
      },
    ],
  },
};

export const sheHasLostHerDog: SentenceDefinition = {
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
      grammaticalCase: "nominative",
    },
    verb: { verb: "lose", tense: "past" },
    object: {
      id: "dog",
      grammaticalCase: "accusative",
    },
  },
};
export const sheFoundADog: SentenceDefinition = {
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
      grammaticalCase: "nominative",
    },
    verb: { verb: "find", tense: "past" },
    object: {
      id: "dog",
      grammaticalCase: "accusative",
    },
  },
};

export const heTakesHisPlace: SentenceDefinition = {
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
      grammaticalCase: "nominative",
    },
    verb: { verb: "take", tense: "present" },
    object: {
      id: "place",
      grammaticalCase: "accusative",
    },
  },
};

export const iHaveHiddenMyTreasure: SentenceDefinition = {
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
      grammaticalCase: "nominative",
    },
    verb: { verb: "hide", tense: "past" },
    object: {
      id: "treasure",
      grammaticalCase: "accusative",
    },
    adverbialClauses: [
      {
        id: "cave",
        grammaticalCase: "inessive",
      },
    ],
  },
};

export const bobsHorseLikesCarrots: SentenceDefinition = {
  transcript: "Bob's horse likes carrots",
  entities: {
    horse: {
      core: "horse",
      type: "animal",
      number: "singular",
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
      grammaticalCase: "nominative",
      genitive: "bob",
    },
    verb: { verb: "love", tense: "general", adverbs: ["really"] },
    object: {
      id: "carrots",
      grammaticalCase: "accusative",
    },
  },
};

export const theyHave31Chickens: SentenceDefinition = {
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
      grammaticalCase: "nominative",
    },
    verb: { verb: "have", tense: "present" },
    object: {
      id: "chickens",
      grammaticalCase: "accusative",
    },
  },
};

export const theHorseIsUgly: SentenceDefinition = {
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
      grammaticalCase: "nominative",
    },
    verb: { verb: "be", tense: "present" },
    object: {
      id: "ugly",
      type: "adjective",
      grammaticalCase: "accusative",
    },
  },
};

export const bobIsUglyAndStupid: SentenceDefinition = {
  transcript: "Bob is ugly and stupid",
  entities: {
    bob: {
      core: "bob",
      number: "singular",
      gender: "masc",
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
      grammaticalCase: "nominative",
    },
    verb: { verb: "be", tense: "present" },
    object: {
      entities: [{ id: "ugly", adverbs: ["very"] }, { id: "stupid" }],
      type: "adjective",
      grammaticalCase: "accusative",
    },
  },
};

export const jezIsTallerThanMark: SentenceDefinition = {
  transcript: "Jez is taller than Mark",
  entities: {
    mark: {
      core: "mɑrk",
      number: "singular",
      gender: "masc",
      person: "thirdPerson",
      determination: { type: "properNoun" },
    },
    jez: {
      core: "dʒez",
      number: "singular",
      gender: "masc",
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
      grammaticalCase: "nominative",
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
export const johnnyIsTheTallestOfTheGroup: SentenceDefinition = {
  transcript: "Johnny is the tallest of the group",
  entities: {
    johnny: {
      core: "dʒonɪ",
      number: "singular",
      person: "thirdPerson",
      determination: { type: "properNoun" },
      gender: "masc",
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
      grammaticalCase: "nominative",
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

export const theDogSmellsReallyBad: SentenceDefinition = {
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
      grammaticalCase: "nominative",
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

export const theCastleTowerIsRound: SentenceDefinition = {
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
      grammaticalCase: "nominative",
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

// export const theChickenAndTheThiefAreGone: SentenceDefinition = {};

export const sheSings: SentenceDefinition = {
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
      id: "she",
      grammaticalCase: "nominative",
    },
    verb: { verb: "sing", tense: "present" },
  },
};

export const whoIsThis: SentenceDefinition = {
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
      id: "he",
      grammaticalCase: "nominative",
    },
    verb: { verb: "be", tense: "present" },
  },
};
export const whatIsThis: SentenceDefinition = {
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
      id: "this",
      grammaticalCase: "nominative",
    },
    verb: { verb: "be", tense: "present" },
  },
};
export const areYouReady: SentenceDefinition = {
  transcript: "Are you ready?",
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
      id: "you",
      grammaticalCase: "nominative",
    },
    verb: { verb: "be", tense: "present" },
    object: {
      id: "ready",
      type: "adjective",
      grammaticalCase: "accusative",
    },
  },
};
export const whereIsTheDog: SentenceDefinition = {
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
      id: "dog",
      grammaticalCase: "nominative",
    },
    verb: { verb: "be", tense: "present" },
  },
};
export const whyAreTheseChickenHere: SentenceDefinition = {
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
      id: "chicken",
      grammaticalCase: "nominative",
    },
    verb: { verb: "be", tense: "present" },
    adverbialClauses: [
      {
        id: "here",
        grammaticalCase: "locative",
      },
    ],
  },
};
export const whyAreYouSoDumb: SentenceDefinition = {
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
      id: "you",
      grammaticalCase: "nominative",
    },
    verb: { verb: "be", tense: "present" },
    object: {
      entities: [{ id: "dumb", adverbs: ["so"] }],
      type: "adjective",
      grammaticalCase: "accusative",
    },
  },
};

export const iMakeAPancakeForMyDog: SentenceDefinition = {
  transcript: "I make a pancake for my dog",
  entities: {
    i: {
      number: "singular",
      usePronoun: true,
      person: "firstPerson",
      gender: "masc",
    },
    pancake: {
      core: "pancake",
      number: "singular",
      determination: { type: "indefinite" },
    },
    dog: {
      core: "dog",
    },
  },
  sentence: {
    subject: {
      id: "i",
      grammaticalCase: "nominative",
    },
    verb: { verb: "make", tense: "present" },
    object: {
      id: "pancake",
      grammaticalCase: "accusative",
    },
    adverbialClauses: [
      {
        id: "dog",
        determination: { type: "possessive", owner: "i", usePronoun: true },
        grammaticalCase: "benefactive",
      },
    ],
  },
};
