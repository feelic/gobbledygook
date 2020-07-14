export const sheGoesToTheBeach = {
  entities: {
    she:{
      number: "singular",
      person: "thirdPerson",
      gender: "fem",
      usePronoun: true,
    },
    beach: {
      core: "beach",
      number: "singular",
      determination: { type: "definite" }
    }
  },
  sentence: {
    subject: {
      id: 'she'
    },
    verb: { verb: "go", tense: "present" },
    object: {
      id: 'beach',
      grammaticalCase: 'lative',
    }
  }
};