import { getRequiredForm } from "./get-required-form";
import { getNounInfo } from "./get-noun-info";

export function makeVerbPhrase(context, subject, verbDefinition) {
  const { lang } = context;
  const { number, person } = getSubjectInfo(context, subject);
  const { verb, tense, group } = verbDefinition;
  const morpheme = lang.morphemeDictionary[verb];
  const conjugatedVerb = getRequiredForm(context, "conjugation", {
    group,
    tense,
    person,
    number,
    morpheme
  }).replace("{verb}", morpheme.morpheme);

  return lang.verbPhraseFormation
    .replace("{preadverbs}", "")
    .replace("{postadverbs}", "")
    .replace("{verb}", conjugatedVerb);
}

function getSubjectInfo(context, subject) {
  if (subject.entities) {
    return {
      number: "plural",
      person: "thirdPerson"
    };
  }

  return getNounInfo(context, subject);
}
