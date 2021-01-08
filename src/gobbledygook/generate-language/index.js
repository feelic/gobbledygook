import { makePhonemeSet } from "./make-phonology";
import { makeMorpheme } from "./make-morpheme";
import makeDictionary from "./make-dictionary";
import { gaussian } from "../util/random";

export function generateLanguage() {
  const phonology = {
    vowels: makePhonemeSet("vowels"),
    consonants: makePhonemeSet("consonants"),
  };
  const morphemeDictionary = makeDictionary(phonology);

  //name
  const name = makeMorpheme(phonology, gaussian(2.5, 1.2)() + 1);

  //pronouns: "person", "grammaticalCase", "gender", "number"
  const pronouns = {

  };

  //determiners: "determination.type", "owner.person", "owner.gender", "gender", "number",
  const determiners = {
    properNoun: {
      definite: {},
      indefinite: {},
      possessive: {},
    },
  };
  // declension: "type", "declensionGroup", "grammaticalCase", "gender", "number"
  const declension = {
    default: {},
    adjective: {},
  };
  //conjugation: "group", "tense", "person", "number"
  const conjugation = {
    // we'll keep only one group for the moment
    default: {},
  };

  const nounPhraseFormation = "";
  const verbPhraseFormation = "";
  const sentenceFormation = "";
  const adjectiveClauseFormation = "";
  const adjectiveFormation = "";
  const adjectives = {preadjectives: [], postadjectives:[]};
  const comparative = {};
  const superlative = {};
  const numbers = {digits:[], unitFormation: {}, formation: ''};

  const language = {
    name,
    pronouns,
    determiners,
    declension,
    conjugation,
    morphemeDictionary,
    nounPhraseFormation,
    verbPhraseFormation,
    sentenceFormation,
    adjectiveClauseFormation,
    adjectiveFormation,
    adjectives,
    comparative,
    superlative,
    numbers,
    ...phonology,
  };

  console.log(language);
  return language;
}
