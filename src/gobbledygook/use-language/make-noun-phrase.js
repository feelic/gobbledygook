import { getRequiredForm } from "./get-required-form";
import { makeAdjectives } from "./make-adjectives";
import { makeAdjectiveClause } from "./make-adjective-clause";

export function makeNounPhrase(context, nounDefinition, usePronoun = false) {
  const { lang, references } = context;
  const {
    morpheme,
    gender,
    number,
    determination,
    grammaticalCase,
    person,
  } = nounDefinition;
  const { declensionGroup } = morpheme;

  if (usePronoun || (references[nounDefinition.id] && person)) {
    return getRequiredForm(context, "pronouns", [
      person,
      grammaticalCase,
      gender,
      number,
    ]);
  }
  // ADD REFERENCE MARKER TO ENTITY
  references[nounDefinition.id] = true;

  const determiner = getRequiredForm(context, "determiners", [
    determination.type,
    grammaticalCase,
    gender,
    number,
  ]);
  const declinedNoun = getRequiredForm(context, "declension", [
    "noun",
    declensionGroup,
    grammaticalCase,
    gender,
    number,
  ]).replace("{noun}", morpheme.morpheme);
  const { preadjectives, postadjectives } = makeAdjectives(
    context,
    nounDefinition
  );
  const adjectiveClause = makeAdjectiveClause(context, nounDefinition);

  return lang.nounPhraseFormation
    .replace("{determiner}", determiner)
    .replace("{preadjectives}", preadjectives)
    .replace("{postadjectives}", postadjectives)
    .replace("{noun}", declinedNoun)
    .replace("{adjectiveClause}", adjectiveClause);
}
