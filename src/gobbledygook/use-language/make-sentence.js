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

  const NP = makeNounPhrase(context, sentence.subject);
  const VP = makeVerbPhrase(context, sentence.subject, sentence.verb);
  const OBJ = makeObject(context, sentence.object);
  const AC = makeAdverbialClauses(context, sentence.adverbialClauses);

  return lang.sentenceFormation
    .replace("{subject}", NP)
    .replace("{verb}", VP)
    .replace("{object}", OBJ)
    .replace("{adverbialClauses}", AC);
}

function makeAdverbialClauses(context, adverbialClauses) {
  if (!adverbialClauses) {
    return "";
  }

  return adverbialClauses
    .map((clause) => makeNounPhrase(context, clause))
    .join(" ");
}
