import { makeNounPhrase } from "./make-noun-phrase";
import { getRequiredForm } from "./get-required-form";
import { getSubjectInfo } from "./get-noun-info";
import { makeComparison } from "./make-comparison";
import { getConjunction, getAdverb } from "./get-invariables";
import {
  Context,
  PoS,
  SentencePartDefinition,
  SentenceTree,
} from "../interfaces";

export function makeObject(
  context: Context,
  object: SentencePartDefinition
): PoS | null {
  const entities = object.entities;
  if (entities && entities.length) {
    const group = entities.reduce((prev: SentenceTree, entity, idx) => {
      const singleEntity = { ...object, ...entity };

      delete singleEntity.entities;

      const np = makeObject(context, singleEntity);

      if (!np) {
        return prev;
      }
      if (idx === entities.length - 1) {
        return [...prev, np];
      }

      return [...prev, np, getConjunction(context, "and")];
    }, []);
    return { pos: "G", content: group };
  }
  if (object.type === "comparison") {
    return { pos: "G", content: makeComparison(context, object) };
  }
  if (object.type === "adjective" || object.type === "adverb") {
    const subject = context.sentence?.subject;
    if (!subject) {
      return null;
    }
    return {
      pos: "G",
      content: makeAdjectivePredicate(context, subject, object),
    };
  }

  return makeNounPhrase(context, object);
}

function makeAdjectivePredicate(
  context: Context,
  subject: SentencePartDefinition,
  object: SentencePartDefinition
) {
  const id = object.id;

  if (!id) {
    return [];
  }
  const { lang } = context;
  const morpheme = lang.morphemeDictionary[id];
  const { gender, number } = getSubjectInfo(context, subject);
  const { grammaticalCase, adverbs } = object;
  const { declensionGroup } = morpheme;

  const AdjPredicate: SentenceTree = [];

  lang.syntax.adjectiveFormation.forEach((pos) => {
    switch (pos) {
      case "adjective":
        const adjective = getRequiredForm(context, "declension", {
          type: "adjective",
          declensionGroup,
          grammaticalCase,
          gender,
          number,
          morpheme,
          id,
        });
        adjective && AdjPredicate.push(adjective);
        break;
      case "adverb":
        if (!adverbs || !adverbs[0]) break;
        const adverb = getAdverb(context, adverbs[0]);
        adverb && AdjPredicate.push(adverb);
        break;
      default:
        break;
    }
  });

  return AdjPredicate;
}
