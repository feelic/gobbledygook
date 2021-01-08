import { getDeterminer } from "./get-required-form";
import { getNounInfo } from "./get-noun-info";

export function makeComparison(context, object) {
  const { lang } = context;
  const forms = lang[object.degree];
  const subjectEntity = getNounInfo(context, context.sentence.subject);

  return forms.formation
    .replace(
      "{determiner}",
      getDeterminer(
        context,
        subjectEntity
      )
    )
    .replace("{quality}", makeComparativeQuality(context, object))
    .replace("{comparedObject}", makeComparedObject(context, object));
}
function makeComparativeQuality (context, object) {
  const { lang } = context;
  const qualityEntity = getNounInfo(context, {id: object.quality});
  const irregularForm = qualityEntity[object.degree];

  if (irregularForm) {
    return irregularForm;
  }

  return lang[object.degree].comparator[object.value].replace('{adjective}', qualityEntity.morpheme.morpheme)
}

function makeComparedObject(context, object) {
  const { lang } = context;

  if (!object.object) {
    return "";
  }
  const forms = lang[object.degree];

  const objectEntity = getNounInfo(context, {id: object.object});

  return forms.object
    .replace(
      "{determiner}",
      getDeterminer(
        context,
        objectEntity
      )
    )
    .replace("{object}", objectEntity.morpheme.morpheme);
}
