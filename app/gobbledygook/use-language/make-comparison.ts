import { getDeterminer } from "./get-required-form";
import { getNounInfo } from "./get-noun-info";
import { makeNounPhrase } from "./make-noun-phrase";
import { getRequiredForm } from "./get-required-form";
import { getRelativePronoun } from "./get-invariables";
import {
  Context,
  PoS,
  SentencePartDefinition,
  SentenceTree,
} from "../interfaces";
import { 
  COMPARISON_MEANINGS, 
  ComparisonDegree,
  DeclensionType, 
  DeterminationType,
  GrammaticalCase,
  PhraseElement,
  ComparisonConjunction,
  PosCode,
} from "../constants/grammar";

export function makeComparison(
  context: Context,
  object: SentencePartDefinition
): SentenceTree {
  const { lang } = context;

  if (!object.degree || !context.sentence) {
    return [];
  }
  const degree: ComparisonDegree = object.degree;
  const forms = lang.syntax[degree];
  const subjectEntity = getNounInfo(context, context.sentence.subject);

  const comparisonPhrase: SentenceTree = [];
  forms.forEach((pos) => {
    switch (pos) {
      case PhraseElement.Determiner:
        const det = getDeterminer(context, {
          ...subjectEntity,
          determination: { type: DeterminationType.Definite },
        });
        det && comparisonPhrase.push(det);
        break;
      case PhraseElement.Adjective:
        let declensionType: DeclensionType = DeclensionType.Adjective;
        if (
          typeof lang.declension.forms !== "string" &&
          lang.declension.forms[degree]
        ) {
          // Map ComparisonDegree to DeclensionType
          declensionType = degree === ComparisonDegree.Comparative 
            ? DeclensionType.Comparative 
            : DeclensionType.Superlative;
        }
        const qualityEntity = getNounInfo(context, { id: object.quality });
        const { grammaticalCase, gender, number, morpheme } = qualityEntity;
        const { declensionGroup } = morpheme;
        if (!object.quality) {
          throw new Error("trying to compare without defining a quality");
        }
        const adj = getRequiredForm(context, "declension", {
          declensionType,
          declensionGroup,
          grammaticalCase,
          gender,
          number,
          morpheme,
          id: object.quality,
        });
        adj && comparisonPhrase.push(adj);
        break;
      case PhraseElement.ComparisonAdverb:
        const compAdv = makeComparativeAdverb(context, object);
        compAdv && comparisonPhrase.push(compAdv);
        break;
      case PhraseElement.ComparedObject:
        const objectEntity = getNounInfo(context, { id: object.object });
        const NP = makeNounPhrase(context, {
          ...objectEntity,
          grammaticalCase: GrammaticalCase.Genitive,
        });
        NP && comparisonPhrase.push(NP);
        break;
      case PhraseElement.ComparisonPreposition:
        const pro = getRelativePronoun(context, ComparisonConjunction.Than);
        pro && comparisonPhrase.push(pro);
        break;
      default:
        break;
    }
  });

  return comparisonPhrase;
}

function makeComparativeAdverb(
  context: Context,
  object: SentencePartDefinition
): PoS | null {
  const { lang } = context;

  if (!object.degree || !object.value) {
    return null;
  }
  return {
    pos: PosCode.Adverb,
    form: lang.comparisonAdverb[object.degree][object.value],
    meaning: COMPARISON_MEANINGS[object.degree][object.value],
  };
}
