import { getDeterminer } from "./get-required-form";
import { getNounInfo } from "./get-noun-info";
import { makeNounPhrase } from "./make-noun-phrase";
import { getRequiredForm } from "./get-required-form";
import { getRelativePronoun } from "./get-invariables";

export function makeComparison(context, object) {
  const { lang } = context;
  const forms = lang[object.degree];
  const subjectEntity = getNounInfo(context, context.sentence.subject);

  return forms
    .map((pos) => {
      switch (pos) {
        case "determiner":
          return getDeterminer(context, {
            ...subjectEntity,
            determination: { type: "definite" },
          });
        case "adjective":
          const type =
            (lang.declension[object.degree] && object.degree) || "adjective";
          const qualityEntity = getNounInfo(context, { id: object.quality });
          const {
            declensionGroup,
            grammaticalCase,
            gender,
            number,
            morpheme,
          } = qualityEntity;
          return getRequiredForm(context, "declension", {
            type,
            declensionGroup,
            grammaticalCase,
            gender,
            number,
            morpheme,
            id: object.quality,
          });
        case "comparisonAdverb":
          return makeComparativeAdverb(context, object);
        case "comparedObject":
          const objectEntity = getNounInfo(context, { id: object.object });

          return makeNounPhrase(context, {
            ...objectEntity,
            grammaticalCase: "genitive",
          });
        case "comparisonPreposition":
          return getRelativePronoun(context, "than");
        default:
          return null;
      }
    })
    .filter((pos) => pos !== null);
}

function makeComparativeAdverb(context, object) {
  const { lang } = context;
  const meaning = {
    comparative: {
      negative: "less",
      positive: "more",
    },
    superlative: {
      negative: "least",
      positive: "most",
    },
  };

  return {
    pos: "Adv",
    form: lang.comparisonAdverb[object.degree][object.value],
    meaning: meaning[object.degree][object.value],
  };
}
