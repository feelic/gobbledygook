export const theyHave31Chickens = {
  transcript: 'they have 31 chickens',
  entities: {
    he:{
      number: "plural",
      person: "thirdPerson",
      gender: "masc",
      usePronoun: true,
    },
    chickens: {
      core: "chicken",
      number: "plural",
      determination: { type: "count" },
      count: 31
    }
  },
  sentence: {
    subject: {
      id: 'he'
    },
    verb: { verb: "have", tense: "present" },
    object: {
      id: 'chickens',
      grammaticalCase: 'accusative',
    }
  }
};
