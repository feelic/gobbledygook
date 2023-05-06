import { makeNounPhrase } from "./make-noun-phrase";
import { makeVerbPhrase } from "./make-verb-phrase";
import { makeObject } from "./make-object";
import { getInterrogative, getInterrogativeParticle } from "./get-invariables";
import { Language, PoS, SentenceDefinition, SentenceTree } from "../interfaces";

export function makeSentence(
  lang: Language,
  { sentence, entities }: SentenceDefinition
): SentenceTree {
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
  const sentenceFormation = lang.syntax.sentenceFormations[sentenceType];

  const formedSentence: SentenceTree = [];

  sentenceFormation.forEach((pos) => {
    switch (pos) {
      case "subject":
        const subject = makeNounPhrase(context, sentence.subject);

        if (!subject) {
          break;
        }

        formedSentence.push({
          pos: "S",
          content: [subject],
        });
        break;
      case "verb":
        formedSentence.push(
          makeVerbPhrase(context, sentence.subject, sentence.verb)
        );
        return;
      case "object":
        if (!sentence.object) {
          break;
        }
        const obj = makeObject(context, sentence.object);
        obj &&
          formedSentence.push({
            pos: "Obj",
            content: [obj],
          });
        break;
      case "adverbialClauses":
        if (!sentence.adverbialClauses) {
          break;
        }
        sentence.adverbialClauses.forEach((clause) => {
          const NP = makeNounPhrase(context, clause);
          NP &&
            formedSentence.push({
              pos: "AdvP",
              content: [NP],
            });
        });
        break;
      case "interrogativePronoun":
        if (!sentence.question) {
          break;
        }
        const interrogative = getInterrogative(context, sentence.question);
        interrogative && formedSentence.push(interrogative);
        break;
      case "interrogativeParticle":
        const interrogativeParticle = getInterrogativeParticle(
          context,
          "interrogativeParticle"
        );
        interrogativeParticle && formedSentence.push(interrogativeParticle);
        break;
      default:
        throw new Error(`unrecognized part of sentence ${pos}`);
    }
  });

  const cleanSentence: Array<PoS> = formedSentence;

  return cleanSentence;
}
