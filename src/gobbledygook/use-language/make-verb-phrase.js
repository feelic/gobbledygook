import { getRequiredForm } from "./get-required-form";

export function makeVerbPhrase(context, subject, verbDefinition) {
  const { lang } = context;
  const { number, person } = subject;
  const { verb, tense } = verbDefinition;
  const morpheme = lang.morphemeDictionary[verb];
  const conjugatedVerb = getRequiredForm(
    context,
    "conjugation",
    [tense, person, number],
    morpheme
  ).replace("{verb}", morpheme.morpheme);

  return lang.verbPhraseFormation
    .replace("{preadverbs}", "")
    .replace("{postadverbs}", "")
    .replace("{verb}", conjugatedVerb);
}
