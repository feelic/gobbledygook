import { makeNounPhrase } from "./make-noun-phrase";
import { makeVerbPhrase } from "./make-verb-phrase";
import { makeObject } from "./make-object";
import {getInterrogative} from "./get-invariables";

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
        if (!sentence.object) {
          return null;
        }
        return { pos: "Obj", content: [makeObject(context, sentence.object) ]};
      case "adverbialClauses":
        if (!sentence.adverbialClauses) {
          return null;
        }
        return sentence.adverbialClauses.map((clause) => {
          return { pos: "AdvP", content: [makeNounPhrase(context, clause)] };
        });
      case "interrogativePronoun":
        return getInterrogative(context, sentence.question);
      default:
        return null;
    }
  }).flat().filter((pos) => pos !== null);

  return formedSentence;
}
