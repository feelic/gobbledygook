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

  return lang.nounPhraseFormation
    .map((pos) => {
      switch (pos) {
        case "preposition":
          return getPreposition(context, nounDefinition.preposition);
        case "determiner":
          return getDeterminer(context, nounDefinition);
        case "preadjectives":
        case "postadjectives":
          const adjectives = makeAdjectives(context, nounDefinition);
          return adjectives[pos];
        case "noun":
          return getRequiredForm(context, "declension", {
            type: "noun",
            declensionGroup,
            grammaticalCase,
            gender,
            number,
            morpheme,
          });
        case "genitive":
          return makeGenitiveForm(context, nounDefinition);
        case "adjectiveClause":
          return makeAdjectiveClause(context, nounDefinition);
        default:
          return null;
      }
    })
    .filter((pos) => pos !== null);
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
  });

  return genitiveForm;
}
