import { makeNounPhrase } from "./make-noun-phrase";
import { makeVerbPhrase } from "./make-verb-phrase";
import { makeObject } from "./make-object";
import { getInterrogative, getInterrogativeParticle } from "./get-invariables";
import { Language, PoS, SentenceDefinition, SentenceTree } from "../interfaces";
import { PosCode } from "../constants/grammar";
import { PhraseElement, SentenceType } from "../constants/grammar";

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

  const sentenceType = sentence.type || SentenceType.Declarative;
  const sentenceFormation = lang.syntax.sentenceFormations[sentenceType];

  const formedSentence: SentenceTree = [];

  sentenceFormation.forEach((pos) => {
    switch (pos) {
      case PhraseElement.Subject:
        const subject = makeNounPhrase(context, sentence.subject);

        if (!subject) {
          break;
        }

        formedSentence.push({
          pos: PosCode.Subject,
          content: [subject],
        });
        break;
      case PhraseElement.Verb:
        formedSentence.push(
          makeVerbPhrase(context, sentence.subject, sentence.verb)
        );
        return;
      case PhraseElement.Object:
        if (!sentence.object) {
          break;
        }
        const obj = makeObject(context, sentence.object);
        obj &&
          formedSentence.push({
            pos: PosCode.Object,
            content: [obj],
          });
        break;
      case PhraseElement.AdverbialClauses:
        if (!sentence.adverbialClauses) {
          break;
        }
        sentence.adverbialClauses.forEach((clause) => {
          const NP = makeNounPhrase(context, clause);
          NP &&
            formedSentence.push({
              pos: PosCode.AdverbialPhrase,
              content: [NP],
            });
        });
        break;
      case PhraseElement.InterrogativePronoun:
        if (!sentence.question) {
          break;
        }
        const interrogative = getInterrogative(context, sentence.question);
        interrogative && formedSentence.push(interrogative);
        break;
      case PhraseElement.InterrogativeParticle:
        const interrogativeParticle = getInterrogativeParticle(
          context,
          PhraseElement.InterrogativeParticle
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
