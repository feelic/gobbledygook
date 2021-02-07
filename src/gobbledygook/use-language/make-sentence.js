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

  const formedSentence = sentenceFormation.map((pos) => {
    switch (pos) {
      case "subject":
        const subject = makeNounPhrase(context, sentence.subject);

        if (! subject) {
          return null;
        }

        return {
          pos: "S",
          content: [subject],
        };
      case "verb":
        return makeVerbPhrase(context, sentence.subject, sentence.verb);
      case "object":
        return { pos: "Obj", content: [makeObject(context, sentence.object) ]};
      case "adverbialClauses":
        if (!sentence.adverbialClauses) {
          return null;
        }
        return sentence.adverbialClauses.map((clause) => {
          return { pos: "AdvP", content: [makeNounPhrase(context, clause)] };
        });
      default:
        return null;
    }
  }).flat().filter((pos) => pos !== null);

  return formedSentence;
}
