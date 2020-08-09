import { getRequiredForm } from "./get-required-form";
import { getSubjectInfo } from "./get-noun-info";
import {getAdverb} from "./get-invariables";

export function makeVerbPhrase(context, subject, verbDefinition) {
  const { lang } = context;
  const { number, person } = getSubjectInfo(context, subject);
  const { verb, tense, group, adverbs } = verbDefinition;
  const morpheme = lang.morphemeDictionary[verb];
  const conjugatedVerb = getRequiredForm(context, "conjugation", {
    group,
    tense,
    person,
    number,
    morpheme
  }).replace("{verb}", morpheme.morpheme);
  const adverb = getAdverb(context, adverbs && adverbs[0]);

  return lang.verbPhraseFormation
    .replace("{adverb}", adverb)
    .replace("{verb}", conjugatedVerb);
}
