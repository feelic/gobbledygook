import { makeNounPhrase } from "./make-noun-phrase";
import { getRequiredForm } from "./get-required-form";
import { getSubjectInfo } from "./get-noun-info";
import getConjunction from "./get-conjunction";

export function makeObject(context, object) {
  if (object.entities && object.entities.length) {
    return object.entities
      .map((entity) => {
        const singleEntity = { ...object, ...entity };

        delete singleEntity.entities;
        return makeObject(context, singleEntity);
      })
      .join(getConjunction(context, "and"));
  }

  if (object.type === "adjective") {
    const {subject} = context.sentence;
    return makeAdjectivePredicate(context, subject, object);
  }

  return makeNounPhrase(context, object);
}

function makeAdjectivePredicate(context, subject, object) {
  const { lang } = context;
  const morpheme = lang.morphemeDictionary[object.id];
  const {gender, number } = getSubjectInfo(context, subject);
  const { grammaticalCase } = object;
  const { declensionGroup } = morpheme;
  return getRequiredForm(context, "declension", {
    type: "adjective",
    declensionGroup,
    grammaticalCase,
    gender,
    number,
    morpheme,
  }).replace("{adjective}", morpheme.morpheme);
}
