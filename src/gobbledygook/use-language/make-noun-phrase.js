import { getRequiredForm, getDeterminer } from "./get-required-form";
import { makeAdjectives } from "./make-adjectives";
import { makeAdjectiveClause } from "./make-adjective-clause";
import { getNounInfo } from "./get-noun-info";
import { getConjunction, getPreposition } from "./get-invariables";

export function makeNounPhrase(context, nounEntity) {
  if (nounEntity.entities) {
    return nounEntity.entities
      .map((entity) => {
        const singleEntity = { ...nounEntity, ...entity };

        delete singleEntity.entities;
        return makeNounPhrase(context, singleEntity);
      })
      .join(getConjunction(context, "and"));
  }

  const { lang, references } = context;
  const nounDefinition = getNounInfo(context, nounEntity);
  const {
    morpheme,
    gender,
    number,
    grammaticalCase,
    person,
    usePronoun,
  } = nounDefinition;
  const { declensionGroup } = morpheme;

  if (usePronoun || (references[nounDefinition.id] && person)) {
    return getRequiredForm(context, "pronouns", {
      person,
      grammaticalCase,
      gender,
      number,
      morpheme,
    });
  }
  // ADD REFERENCE MARKER TO ENTITY
  references[nounDefinition.id] = true;

  const preposition = getPreposition(context, nounDefinition.preposition);
  const determiner = getDeterminer(context, nounDefinition);
  const declinedNoun = getRequiredForm(context, "declension", {
    type: "noun",
    declensionGroup,
    grammaticalCase,
    gender,
    number,
    morpheme,
  }).replace("{noun}", morpheme.morpheme);
  const { preadjectives, postadjectives } = makeAdjectives(
    context,
    nounDefinition
  );
  const adjectiveClause = makeAdjectiveClause(context, nounDefinition);
  const genitiveForm = makeGenitiveForm(context, nounDefinition);

  return lang.nounPhraseFormation
    .replace("{preposition}", preposition)
    .replace("{determiner}", determiner)
    .replace("{preadjectives}", preadjectives)
    .replace("{postadjectives}", postadjectives)
    .replace("{noun}", declinedNoun)
    .replace("{genitive}", genitiveForm)
    .replace("{adjectiveClause}", adjectiveClause);
}

function makeGenitiveForm(context, { genitive }) {
  if (!genitive) {
    return "";
  }
  const nounDefinition = getNounInfo(context, { id: genitive });
  const { morpheme, gender, number } = nounDefinition;
  const { declensionGroup } = morpheme;
  const genitiveForm = getRequiredForm(context, "declension", {
    type: "noun",
    declensionGroup,
    grammaticalCase: "genitive",
    gender,
    number,
    morpheme,
  }).replace("{noun}", morpheme.morpheme);

  return genitiveForm;
}
