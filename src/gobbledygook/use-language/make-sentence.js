import { makeNounPhrase } from "./make-noun-phrase";
import { makeVerbPhrase } from "./make-verb-phrase";
import { getNounInfo } from "./get-noun-info";

export function makeSentence(lang, { sentence, entities }) {
  const context = { lang, entities, sentence, references: {} };
  const subject = getNounInfo(context, sentence.subject);
  const object = getNounInfo(context, sentence.object);

  return lang.sentenceFormation
    .replace("{subject}", makeNounPhrase(context, subject))
    .replace("{verb}", makeVerbPhrase(context, subject, sentence.verb))
    .replace("{object}", makeNounPhrase(context, object));
}
