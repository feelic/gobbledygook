import { getDeterminer } from "./get-required-form";
import { getNounInfo } from "./get-noun-info";

export function makeComparison(context, object) {
  const { lang } = context;
  const forms = lang[object.degree];
  const subjectEntity = getNounInfo(context, context.sentence.subject);

  return forms.formation
    .map((pos) => {
      switch (pos) {
        case "determiner":
          return getDeterminer(context, subjectEntity);
        case "quality":
          return makeComparativeQuality(context, object);
        case "comparedObject":
          return makeComparedObject(context, object);
        default:
          return null;
      }
    })
    .filter((pos) => pos !== null);
}

function makeComparativeQuality(context, object) {
  const { lang } = context;
  const qualityEntity = getNounInfo(context, { id: object.quality });
  const irregularForm = qualityEntity[object.degree];

  if (irregularForm) {
    return irregularForm;
  }

  // TODO this should go through getRequiredForm one way or another
  return lang[object.degree].comparator[object.value];
}

function makeComparedObject(context, object) {
  const { lang } = context;

  if (!object.object) {
    return null;
  }
  const forms = lang[object.degree];

  const objectEntity = getNounInfo(context, { id: object.object });

  return forms.object
    .map((pos) => {
      switch (pos) {
        case "determiner":
          return getDeterminer(context, objectEntity);
        case "object":
          // TODO use getRequiredForm
          return objectEntity.morpheme.morpheme;
        default:
          return null;
      }
    })
    .filter((pos) => pos !== null);
}
