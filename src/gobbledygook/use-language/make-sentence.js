import { makeNounPhrase } from "./make-noun-phrase";
import { makeVerbPhrase } from "./make-verb-phrase";
import { makeObject } from "./make-object";

export function makeSentence(lang, { sentence, entities }) {
  const context = {
    lang,
    entities: Object.keys(entities).reduce((prev, curr) => {
      return {
        ...prev,
        [curr]: { ...entities[curr], ...lang.morphemeDictionary[curr] },
      };
    }, {}),
    sentence,
    references: {},
  };

  const sentenceType = sentence.type || "declarative";
  const sentenceFormation = lang.sentenceFormations[sentenceType];

  return sentenceFormation
    .map((pos) => {
      switch (pos) {
        case "subject":
          return makeNounPhrase(context, sentence.subject);
        case "verb":
          return makeVerbPhrase(context, sentence.subject, sentence.verb);
        case "object":
          return makeObject(context, sentence.object);
        case "adverbialClauses":
          if (!sentence.adverbialClauses) {
            return null;
          }
          return sentence.adverbialClauses.map((clause) =>
            makeNounPhrase(context, clause)
          );
        default:
          return null;
      }
    })
    .filter((pos) => pos !== null);
}
