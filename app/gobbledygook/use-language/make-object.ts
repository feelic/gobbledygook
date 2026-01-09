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
import { DeclensionType, EntityType, Conjunction, PhraseElement, PosCode } from "../constants/grammar";

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

      return [...prev, np, getConjunction(context, Conjunction.And)];
    }, []);
    return { pos: PosCode.Group, content: group };
  }
  if (object.type === EntityType.Comparison) {
    return { pos: PosCode.Group, content: makeComparison(context, object) };
  }
  if (object.type === EntityType.Adjective) {
    const subject = context.sentence?.subject;
    if (!subject) {
      return null;
    }
    return {
      pos: PosCode.Group,
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
  const subjectInfo = getSubjectInfo(context, subject);
  const gender = "gender" in subjectInfo ? subjectInfo.gender : undefined;
  const number = "number" in subjectInfo ? subjectInfo.number : undefined;
  const { grammaticalCase, adverbs } = object;
  const { declensionGroup } = morpheme;
  const declensionType = DeclensionType.Adjective;

  const AdjPredicate: SentenceTree = [];

  lang.syntax.adjectiveFormation.forEach((pos) => {
    switch (pos) {
      case PhraseElement.Adjective:
        const adjective = getRequiredForm(context, "declension", {
          declensionType,
          declensionGroup,
          grammaticalCase,
          gender,
          number,
          morpheme,
          id,
        });
        adjective && AdjPredicate.push(adjective);
        break;
      case PhraseElement.Adverb:
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
