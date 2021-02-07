import { getRequiredForm, getDeterminer } from "./get-required-form";
import { makeAdjectives } from "./make-adjectives";
import { makeAdjectiveClause } from "./make-adjective-clause";
import { getNounInfo } from "./get-noun-info";
import { getConjunction, getPreposition } from "./get-invariables";

export function makeNounPhrase(context, nounEntity) {
  if (nounEntity.entities) {
    const group = nounEntity.entities.reduce((prev, entity, idx) => {
      const singleEntity = { ...nounEntity, ...entity };

      delete singleEntity.entities;

      const np = makeNounPhrase(context, singleEntity);

      if (idx === nounEntity.entities.length - 1) {
        return [...prev, np];
      }
      return [...prev, np, getConjunction(context, "and")];
    }, []);
    return { pos: "G", content: group };
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
      id: nounDefinition.id
    });
  }
  // ADD REFERENCE MARKER TO ENTITY
  references[nounDefinition.id] = true;

  const NP = lang.nounPhraseFormation
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
            id: nounDefinition.id
          });
        case "genitive":
          return makeGenitiveForm(context, nounDefinition);
        case "adjectiveClause":
          return makeAdjectiveClause(context, nounDefinition);
        default:
          return null;
      }
    })
    .flat()
    .filter((pos) => pos !== null);

  return { pos: "NP", content: NP };
}

function makeGenitiveForm(context, { genitive }) {
  if (!genitive) {
    return null;
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
    id: nounDefinition.id
  });

  return genitiveForm;
}
