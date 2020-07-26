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
    },
    ugly: {
      core: "ugly",
    },
  },
  sentence: {
    subject: {
      id: "bob",
    },
    verb: { verb: "be", tense: "present" },
    object: {
      id: "ugly",
      type: "adjective",
      grammaticalCase: "accusative",
    },
  },
};

export const jezIsTallerThanMark = {
  transcript: "Jez is taller than Mark",
  entities: {
    mark: {
      core: "mark",
      number: "singular",
      person: "thirdPerson",
    },
    jez: {
      core: "dʒez",
      number: "singular",
      person: "thirdPerson",
    },
    ugly: {
      core: "ugly",
    },
  },
  sentence: {
    subject: {
      id: "jez",
    },
    verb: { verb: "be", tense: "present" },
    object: {
      id: "ugly",
      type: "adjective",
      grammaticalCase: "accusative",
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
      type: "adjective",
      grammaticalCase: "accusative",
    },
  },
};
