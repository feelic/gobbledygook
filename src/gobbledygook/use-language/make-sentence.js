import { makeNounPhrase } from "./make-noun-phrase";
import { makeVerbPhrase } from "./make-verb-phrase";
import { makeObject } from "./make-object";

export function makeSentence(lang, { sentence, entities }) {
  const context = {
    lang,
    entities: Object.keys(entities).reduce((prev, curr) => {
      return {
        ...prev,
        [curr]: {...entities[curr], ...lang.morphemeDictionary[curr]}
      }
    }, {}),
    sentence,
    references: {},
  };

  return lang.sentenceFormation
    .replace("{subject}", makeNounPhrase(context, sentence.subject))
    .replace("{verb}", makeVerbPhrase(context, sentence.subject, sentence.verb))
    .replace("{object}", makeObject(context, sentence.object))
    .replace("{adverbialClauses}", makeAdverbialClauses(context, sentence.adverbialClauses))
}

function makeAdverbialClauses (context, adverbialClauses) {
  if (! adverbialClauses) {
    return '';
  }

  return adverbialClauses.map(clause =>
    makeNounPhrase(context, clause)
  ).join(' ')
}
