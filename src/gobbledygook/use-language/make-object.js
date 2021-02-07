import { makeNounPhrase } from "./make-noun-phrase";
import { getRequiredForm } from "./get-required-form";
import { getSubjectInfo } from "./get-noun-info";
import { makeComparison } from "./make-comparison";
import { getConjunction, getAdverb } from "./get-invariables";

export function makeObject(context, object) {
  if (object.entities && object.entities.length) {
    const group = object.entities
    .reduce((prev, entity, idx) => {
      const singleEntity = { ...object, ...entity };

      delete singleEntity.entities;

      const np = makeObject(context, singleEntity);

      if (idx === object.entities.length - 1) {
        return [...prev, np];
      }
      return [...prev, np, getConjunction(context, "and")]
    }, []);
    return {pos: 'G', content: group}
  }
  if (object.type === "comparison") {
    return {pos: 'G', content: makeComparison(context, object)};
  }
  if (object.type === "adjective") {
    const { subject } = context.sentence;

    return {pos: 'G', content: makeAdjectivePredicate(context, subject, object)};
  }

  return makeNounPhrase(context, object);
}

function makeAdjectivePredicate(context, subject, object) {
  const { lang } = context;
  const morpheme = lang.morphemeDictionary[object.id];
  const { gender, number } = getSubjectInfo(context, subject);
  const { grammaticalCase, adverbs } = object;
  const { declensionGroup } = morpheme;

  return lang.adjectiveFormation
    .map((pos) => {
      switch (pos) {
        case "adjective":
          return getRequiredForm(context, "declension", {
            type: "adjective",
            declensionGroup,
            grammaticalCase,
            gender,
            number,
            morpheme,
            id: object.id
          });
        case "adverb":
          return getAdverb(context, adverbs && adverbs[0]);
        default:
          return null;
      }
    })
    .filter((pos) => pos !== null);
}
