import { getDeterminer } from "./get-required-form";
import { getNounInfo } from "./get-noun-info";
import { makeNounPhrase } from "./make-noun-phrase";
import { getRequiredForm } from "./get-required-form";
import { getRelativePronoun } from "./get-invariables";
import {
  ComparisonDegreeType,
  Context,
  PoS,
  SentencePartDefinition,
  SentenceTree,
} from "../interfaces";

export function makeComparison(
  context: Context,
  object: SentencePartDefinition
): SentenceTree {
  const { lang } = context;

  if (!object.degree || !context.sentence) {
    return [];
  }
  const degree: ComparisonDegreeType = object.degree;
  const forms = lang.syntax[degree];
  const subjectEntity = getNounInfo(context, context.sentence.subject);

  const comparisonPhrase: SentenceTree = [];
  forms.forEach((pos) => {
    switch (pos) {
      case "determiner":
        const det = getDeterminer(context, {
          ...subjectEntity,
          determination: { type: "definite" },
        });
        det && comparisonPhrase.push(det);
        break;
      case "adjective":
        const type = (lang.declension.forms[degree] && degree) || "adjective";
        const qualityEntity = getNounInfo(context, { id: object.quality });
        const { declensionGroup, grammaticalCase, gender, number, morpheme } =
          qualityEntity;
        if (!object.quality) {
          throw new Error("trying to compare without defining a quality");
        }
        const adj = getRequiredForm(context, "declension", {
          type,
          declensionGroup,
          grammaticalCase,
          gender,
          number,
          morpheme,
          id: object.quality,
        });
        adj && comparisonPhrase.push(adj);
        break;
      case "comparisonAdverb":
        const compAdv = makeComparativeAdverb(context, object);
        compAdv && comparisonPhrase.push(compAdv);
        break;
      case "comparedObject":
        const objectEntity = getNounInfo(context, { id: object.object });
        const NP = makeNounPhrase(context, {
          ...objectEntity,
          grammaticalCase: "genitive",
        });
        NP && comparisonPhrase.push(NP);
        break;
      case "comparisonPreposition":
        const pro = getRelativePronoun(context, "than");
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
  const meaning: Record<ComparisonDegreeType, Record<string, string>> = {
    comparative: {
      negative: "less",
      positive: "more",
    },
    superlative: {
      negative: "least",
      positive: "most",
    },
  };

  if (!object.degree || !object.value) {
    return null;
  }
  return {
    pos: "Adv",
    form: lang.comparisonAdverb[object.degree][object.value],
    meaning: meaning[object.degree][object.value],
  };
}
