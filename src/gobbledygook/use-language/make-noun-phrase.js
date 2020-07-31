import { getRequiredForm } from "./get-required-form";
import { makeAdjectives } from "./make-adjectives";
import { makeAdjectiveClause } from "./make-adjective-clause";
import { makeNumber } from "./make-number";
import { getNounInfo } from "./get-noun-info";
import getConjunction from "./get-conjunction";

export function makeNounPhrase(context, nounEntity) {
  if (nounEntity.entities) {
    return nounEntity.entities.map(entity => {
      const singleEntity = {...nounEntity, ...entity};

      delete singleEntity.entities;
      return makeNounPhrase(context, singleEntity)
    }).join(getConjunction(context, 'and'));
  }

  const { lang, references } = context;
  const nounDefinition = getNounInfo(context, nounEntity)
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

  return lang.nounPhraseFormation
    .replace("{determiner}", determiner)
    .replace("{preadjectives}", preadjectives)
    .replace("{postadjectives}", postadjectives)
    .replace("{noun}", declinedNoun)
    .replace("{adjectiveClause}", adjectiveClause);
}

function getDeterminer(context, nounDefinition) {
  const { gender, number, determination, person, morpheme } = nounDefinition;
  let owner = {};

  if (! determination) {
    debugger;
  }
  if (determination.type === "count") {
    return makeNumber(context, nounDefinition.count);
  }
  if (determination.type === "possessive") {
    owner = context.entities[determination.owner];
  }

  return getRequiredForm(context, "determiners", {
    determination,
    person,
    owner,
    gender,
    number,
    morpheme,
  });
}
