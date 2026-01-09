import { SentenceDefinition } from "../interfaces";
import {
  GrammaticalCase,
  GrammaticalNumber,
  GrammaticalPerson,
  Gender,
  Tense,
  DeterminationType,
  EntityType,
  ComparisonDegree,
  ComparisonValue,
  SentenceType,
  InterrogativeWord,
} from "../constants/grammar";

export const iHaveAPinkCar: SentenceDefinition = {
  transcript: "I have a pink car",
  entities: {
    car: {
      core: "car",
      type: EntityType.Object,
      adjectives: { color: "pink" },
      number: GrammaticalNumber.Singular,
      determination: { type: DeterminationType.Indefinite },
      person: GrammaticalPerson.Third,
    },
    i: {
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.First,
      usePronoun: true,
      gender: Gender.Masculine,
    },
  },
  sentence: {
    subject: {
      id: "i",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "have", tense: Tense.General },
    object: {
      id: "car",
      grammaticalCase: GrammaticalCase.Accusative,
    },
  },
};
export const iHadAPinkCar: SentenceDefinition = {
  transcript: "I had a red car",
  entities: {
    car: {
      core: "car",
      type: EntityType.Object,
      adjectives: { color: "red" },
      number: GrammaticalNumber.Singular,
      determination: { type: DeterminationType.Indefinite },
      person: GrammaticalPerson.Third,
    },
    i: {
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.First,
      usePronoun: true,
      gender: Gender.Masculine,
    },
  },
  sentence: {
    subject: {
      id: "i",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "have", tense: Tense.Past },
    object: {
      id: "car",
      grammaticalCase: GrammaticalCase.Accusative,
    },
  },
};

export const horseLikesCarrots: SentenceDefinition = {
  transcript: "the small grey horse likes small orange carrots",
  entities: {
    horse: {
      core: "horse",
      type: EntityType.Animal,
      adjectives: { color: "gray", size: "small" },
      number: GrammaticalNumber.Singular,
      determination: { type: DeterminationType.Definite },
      person: GrammaticalPerson.Third,
    },
    carrots: {
      core: "carrot",
      number: GrammaticalNumber.Plural,
      adjectives: {
        color: "orange",
        size: "small",
      },
      determination: { type: DeterminationType.Definite },
    },
  },
  sentence: {
    subject: {
      id: "horse",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "love", tense: Tense.General },
    object: {
      id: "carrots",
      grammaticalCase: GrammaticalCase.Accusative,
    },
  },
};

export const horseLikesCarrotsAndGrass: SentenceDefinition = {
  transcript: "the horse likes carrots and grass",
  entities: {
    horse: {
      core: "horse",
      type: EntityType.Animal,
      number: GrammaticalNumber.Singular,
      determination: { type: DeterminationType.Definite },
      person: GrammaticalPerson.Third,
    },
    carrots: {
      core: "carrot",
      number: GrammaticalNumber.Plural,
      adjectives: {
        size: "small",
      },
      determination: { type: DeterminationType.Definite },
    },
    grass: {
      core: "grass",
      number: GrammaticalNumber.Singular,
      determination: { type: DeterminationType.Definite },
    },
  },
  sentence: {
    subject: {
      id: "horse",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "love", tense: Tense.General },
    object: {
      entities: [{ id: "carrots" }, { id: "grass" }],
      grammaticalCase: GrammaticalCase.Accusative,
    },
  },
};

export const horseAndDonkeyLikeCarrots: SentenceDefinition = {
  transcript: "the horse and the donkey like carrots",
  entities: {
    horse: {
      core: "horse",
      type: EntityType.Animal,
      number: GrammaticalNumber.Singular,
      determination: { type: DeterminationType.Definite },
      person: GrammaticalPerson.Third,
    },
    donkey: {
      core: "donkey",
      type: EntityType.Animal,
      number: GrammaticalNumber.Singular,
      determination: { type: DeterminationType.Definite },
      person: GrammaticalPerson.Third,
    },
    carrots: {
      core: "carrot",
      number: GrammaticalNumber.Plural,
      adjectives: {
        size: "small",
      },
      determination: { type: DeterminationType.Definite },
    },
    grass: {
      core: "grass",
      number: GrammaticalNumber.Singular,
      adjectives: {
        size: "small",
      },
      determination: { type: DeterminationType.Definite },
    },
  },
  sentence: {
    subject: {
      entities: [{ id: "horse" }, { id: "donkey" }],
    },
    verb: { verb: "love", tense: Tense.General },
    object: {
      id: "carrots",
      grammaticalCase: GrammaticalCase.Accusative,
    },
  },
};

export const horseLikesCarrotsJohnnyGaveHim: SentenceDefinition = {
  transcript: "the small grey horse likes carrots that johnny gave him",
  entities: {
    horse: {
      core: "horse",
      type: EntityType.Animal,
      adjectives: { color: "gray", size: "small" },
      number: GrammaticalNumber.Singular,
      determination: { type: DeterminationType.Definite },
      person: GrammaticalPerson.Third,
    },
    carrots: {
      core: "carrot",
      number: GrammaticalNumber.Plural,
      adjectives: { color: "orange", size: "small" },
      determination: { type: DeterminationType.Definite },
    },
    johnny: {
      core: "dʒonɪ",
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.Third,
      determination: { type: DeterminationType.ProperNoun },
      gender: Gender.Masculine,
    },
  },
  sentence: {
    subject: {
      id: "horse",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "love", tense: Tense.General },
    object: {
      id: "carrots",
      grammaticalCase: GrammaticalCase.Accusative,
      adjectiveClause: {
        subject: {
          id: "johnny",
          grammaticalCase: GrammaticalCase.Nominative,
        },
        verb: { verb: "give", tense: Tense.Past },
        object: {
          id: "horse",
          grammaticalCase: GrammaticalCase.Dative,
        },
      },
    },
  },
};

export const sheGoesToTheBeach: SentenceDefinition = {
  transcript: "she goes to the beach",
  entities: {
    she: {
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.Third,
      gender: Gender.Feminine,
      usePronoun: true,
    },
    beach: {
      core: "beach",
      number: GrammaticalNumber.Singular,
      determination: { type: DeterminationType.Definite },
    },
  },
  sentence: {
    subject: {
      id: "she",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "go", tense: Tense.Present },
    adverbialClauses: [
      {
        id: "beach",
        grammaticalCase: GrammaticalCase.Lative,
      },
    ],
  },
};

export const sheHasLostHerDog: SentenceDefinition = {
  transcript: "she lost her dog",
  entities: {
    she: {
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.Third,
      gender: Gender.Feminine,
      usePronoun: true,
    },
    dog: {
      core: "dog",
      number: GrammaticalNumber.Singular,
      gender: Gender.Masculine,
      determination: { type: DeterminationType.Possessive, owner: "she", usePronoun: true },
    },
  },
  sentence: {
    subject: {
      id: "she",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "lose", tense: Tense.Past },
    object: {
      id: "dog",
      grammaticalCase: GrammaticalCase.Accusative,
    },
  },
};
export const sheFoundADog: SentenceDefinition = {
  transcript: "she found a dog",
  entities: {
    she: {
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.Third,
      gender: Gender.Feminine,
      usePronoun: true,
    },
    dog: {
      core: "dog",
      number: GrammaticalNumber.Singular,
      gender: Gender.Masculine,
      determination: { type: DeterminationType.Indefinite },
    },
  },
  sentence: {
    subject: {
      id: "she",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "find", tense: Tense.Past },
    object: {
      id: "dog",
      grammaticalCase: GrammaticalCase.Accusative,
    },
  },
};

export const heTakesHisPlace: SentenceDefinition = {
  transcript: "he takes his place",
  entities: {
    he: {
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.Third,
      gender: Gender.Masculine,
      usePronoun: true,
    },
    place: {
      core: "place",
      number: GrammaticalNumber.Singular,
      determination: { type: DeterminationType.Possessive, owner: "he", usePronoun: true },
    },
  },
  sentence: {
    subject: {
      id: "he",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "take", tense: Tense.Present },
    object: {
      id: "place",
      grammaticalCase: GrammaticalCase.Accusative,
    },
  },
};

export const iHaveHiddenMyTreasure: SentenceDefinition = {
  transcript: "i have hidden my treasure in a cave",
  entities: {
    i: {
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.First,
      gender: Gender.Masculine,
      usePronoun: true,
    },
    treasure: {
      core: "treasure",
      number: GrammaticalNumber.Singular,
      determination: { type: DeterminationType.Possessive, owner: "i", usePronoun: true },
    },
    cave: {
      core: "cave",
      determination: { type: DeterminationType.Indefinite },
    },
  },
  sentence: {
    subject: {
      id: "i",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "hide", tense: Tense.Past },
    object: {
      id: "treasure",
      grammaticalCase: GrammaticalCase.Accusative,
    },
    adverbialClauses: [
      {
        id: "cave",
        grammaticalCase: GrammaticalCase.Inessive,
      },
    ],
  },
};

export const bobsHorseLikesCarrots: SentenceDefinition = {
  transcript: "Bob's horse likes carrots",
  entities: {
    horse: {
      core: "horse",
      type: EntityType.Animal,
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.Third,
    },
    carrots: {
      core: "carrot",
      number: GrammaticalNumber.Plural,
      determination: { type: DeterminationType.Definite },
    },
    bob: {
      core: "bob",
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.Third,
      gender: Gender.Masculine,
      determination: { type: DeterminationType.ProperNoun },
    },
  },
  sentence: {
    subject: {
      id: "horse",
      grammaticalCase: GrammaticalCase.Nominative,
      genitive: "bob",
    },
    verb: { verb: "love", tense: Tense.General, adverbs: ["really"] },
    object: {
      id: "carrots",
      grammaticalCase: GrammaticalCase.Accusative,
    },
  },
};

export const theyHave31Chickens: SentenceDefinition = {
  transcript: "they have 31 chickens",
  entities: {
    he: {
      number: GrammaticalNumber.Plural,
      person: GrammaticalPerson.Third,
      gender: Gender.Masculine,
      usePronoun: true,
    },
    chickens: {
      core: "chicken",
      number: GrammaticalNumber.Plural,
      determination: { type: DeterminationType.Count },
      count: 31,
    },
  },
  sentence: {
    subject: {
      id: "he",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "have", tense: Tense.Present },
    object: {
      id: "chickens",
      grammaticalCase: GrammaticalCase.Accusative,
    },
  },
};

export const theHorseIsUgly: SentenceDefinition = {
  transcript: "The horse is ugly",
  entities: {
    horse: {
      core: "horse",
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.Third,
    },
    ugly: {
      core: "ugly",
    },
  },
  sentence: {
    subject: {
      id: "horse",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "be", tense: Tense.Present },
    object: {
      id: "ugly",
      type: EntityType.Adjective,
      grammaticalCase: GrammaticalCase.Accusative,
    },
  },
};

export const bobIsUglyAndStupid: SentenceDefinition = {
  transcript: "Bob is ugly and stupid",
  entities: {
    bob: {
      core: "bob",
      number: GrammaticalNumber.Singular,
      gender: Gender.Masculine,
      person: GrammaticalPerson.Third,
      determination: { type: DeterminationType.ProperNoun },
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
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "be", tense: Tense.Present },
    object: {
      entities: [{ id: "ugly", adverbs: ["very"] }, { id: "stupid" }],
      type: EntityType.Adjective,
      grammaticalCase: GrammaticalCase.Accusative,
    },
  },
};

export const jezIsTallerThanMark: SentenceDefinition = {
  transcript: "Jez is taller than Mark",
  entities: {
    mark: {
      core: "mɑrk",
      number: GrammaticalNumber.Singular,
      gender: Gender.Masculine,
      person: GrammaticalPerson.Third,
      determination: { type: DeterminationType.ProperNoun },
    },
    jez: {
      core: "dʒez",
      number: GrammaticalNumber.Singular,
      gender: Gender.Masculine,
      person: GrammaticalPerson.Third,
      determination: { type: DeterminationType.ProperNoun },
    },
    tall: {
      core: "tall",
    },
  },
  sentence: {
    subject: {
      id: "jez",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "be", tense: Tense.Present },
    object: {
      quality: "tall",
      degree: ComparisonDegree.Comparative,
      type: EntityType.Comparison,
      value: ComparisonValue.Positive,
      object: "mark",
    },
  },
};
export const johnnyIsTheTallestOfTheGroup: SentenceDefinition = {
  transcript: "Johnny is the tallest of the group",
  entities: {
    johnny: {
      core: "dʒonɪ",
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.Third,
      determination: { type: DeterminationType.ProperNoun },
      gender: Gender.Masculine,
    },
    group: {
      core: "group",
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.Third,
      determination: { type: DeterminationType.Definite },
    },
    tall: {
      core: "tall",
    },
  },
  sentence: {
    subject: {
      id: "johnny",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "be", tense: Tense.Present },
    object: {
      quality: "tall",
      degree: ComparisonDegree.Superlative,
      type: EntityType.Comparison,
      value: ComparisonValue.Positive,
      object: "group",
    },
  },
};

export const theDogSmellsReallyBad: SentenceDefinition = {
  transcript: "the dog smells really bad",
  entities: {
    dog: {
      core: "dog",
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.Third,
    },
    bad: {
      core: "bad",
    },
  },
  sentence: {
    subject: {
      id: "dog",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "smell", tense: Tense.Present },
    object: {
      id: "bad",
      adverbs: ["very"],
      type: EntityType.Adjective,
      grammaticalCase: GrammaticalCase.Accusative,
    },
  },
};

export const theCastleTowerIsRound: SentenceDefinition = {
  transcript: "The castle tower is round",
  entities: {
    castle: {
      core: "castle",
      type: EntityType.Object,
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.Third,
    },
    tower: {
      core: "tower",
      number: GrammaticalNumber.Singular,
      determination: { type: DeterminationType.Definite, owner: "castle" },
    },
    round: {
      core: "round",
    },
  },
  sentence: {
    subject: {
      id: "tower",
      grammaticalCase: GrammaticalCase.Nominative,
      genitive: "castle",
    },
    verb: { verb: "be", tense: Tense.Present },
    object: {
      id: "round",
      type: EntityType.Adjective,
      grammaticalCase: GrammaticalCase.Accusative,
    },
  },
};

export const sheSings: SentenceDefinition = {
  transcript: "She sings",
  entities: {
    she: {
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.Third,
      gender: Gender.Feminine,
      usePronoun: true,
    },
  },
  sentence: {
    subject: {
      id: "she",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "sing", tense: Tense.Present },
  },
};

export const whoIsThis: SentenceDefinition = {
  transcript: "Who is he?",
  entities: {
    he: {
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.Third,
      gender: Gender.Masculine,
      usePronoun: true,
    },
  },
  sentence: {
    type: SentenceType.OpenInterrogative,
    question: InterrogativeWord.Who,
    subject: {
      id: "he",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "be", tense: Tense.Present },
  },
};
export const whatIsThis: SentenceDefinition = {
  transcript: "What is this?",
  entities: {
    this: {
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.Third,
      gender: Gender.Masculine,
      usePronoun: true,
    },
  },
  sentence: {
    type: SentenceType.OpenInterrogative,
    question: InterrogativeWord.What,
    subject: {
      id: "this",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "be", tense: Tense.Present },
  },
};
export const areYouReady: SentenceDefinition = {
  transcript: "Are you ready?",
  entities: {
    you: {
      number: GrammaticalNumber.Plural,
      person: GrammaticalPerson.Second,
      gender: Gender.Masculine,
      usePronoun: true,
      determination: { type: DeterminationType.Demonstrative },
    },
    ready: {
      core: "ready",
    },
  },
  sentence: {
    type: SentenceType.PolarInterrogative,
    subject: {
      id: "you",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "be", tense: Tense.Present },
    object: {
      id: "ready",
      type: EntityType.Adjective,
      grammaticalCase: GrammaticalCase.Accusative,
    },
  },
};
export const whereIsTheDog: SentenceDefinition = {
  transcript: "Where is the dog?",
  entities: {
    dog: {
      core: "dog",
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.Third,
      determination: { type: DeterminationType.Definite },
      gender: Gender.Masculine,
    },
    ready: {
      core: "ready",
    },
  },
  sentence: {
    type: SentenceType.OpenInterrogative,
    question: InterrogativeWord.Where,
    subject: {
      id: "dog",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "be", tense: Tense.Present },
  },
};
export const whyAreTheseChickenHere: SentenceDefinition = {
  transcript: "Why are these chicken here?",
  entities: {
    chicken: {
      core: "chicken",
      number: GrammaticalNumber.Plural,
      person: GrammaticalPerson.Third,
      determination: { type: DeterminationType.Demonstrative },
      gender: Gender.Masculine,
    },
    here: {
      core: "here",
    },
  },
  sentence: {
    type: SentenceType.OpenInterrogative,
    question: InterrogativeWord.Why,
    subject: {
      id: "chicken",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "be", tense: Tense.Present },
    adverbialClauses: [
      {
        id: "here",
        grammaticalCase: GrammaticalCase.Locative,
      },
    ],
  },
};
export const whyAreYouSoDumb: SentenceDefinition = {
  transcript: "Why are you so dumb?",
  entities: {
    you: {
      number: GrammaticalNumber.Singular,
      person: GrammaticalPerson.Second,
      gender: Gender.Masculine,
      usePronoun: true,
    },
    dumb: {
      core: "dumb",
    },
  },
  sentence: {
    type: SentenceType.OpenInterrogative,
    question: InterrogativeWord.Why,
    subject: {
      id: "you",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "be", tense: Tense.Present },
    object: {
      entities: [{ id: "dumb", adverbs: ["so"] }],
      type: EntityType.Adjective,
      grammaticalCase: GrammaticalCase.Accusative,
    },
  },
};

export const iMakeAPancakeForMyDog: SentenceDefinition = {
  transcript: "I make a pancake for my dog",
  entities: {
    i: {
      number: GrammaticalNumber.Singular,
      usePronoun: true,
      person: GrammaticalPerson.First,
      gender: Gender.Masculine,
    },
    pancake: {
      core: "pancake",
      number: GrammaticalNumber.Singular,
      determination: { type: DeterminationType.Indefinite },
    },
    dog: {
      core: "dog",
    },
  },
  sentence: {
    subject: {
      id: "i",
      grammaticalCase: GrammaticalCase.Nominative,
    },
    verb: { verb: "make", tense: Tense.Present },
    object: {
      id: "pancake",
      grammaticalCase: GrammaticalCase.Accusative,
    },
    adverbialClauses: [
      {
        id: "dog",
        determination: { type: DeterminationType.Possessive, owner: "i", usePronoun: true },
        grammaticalCase: GrammaticalCase.Benefactive,
      },
    ],
  },
};
