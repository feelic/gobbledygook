import { getRequiredForm } from "./get-required-form";
import { getSubjectInfo } from "./get-noun-info";
import { getAdverb } from "./get-invariables";

export function makeVerbPhrase(context, subject, verbDefinition) {
  const { lang } = context;
  const { number, person } = getSubjectInfo(context, subject);
  const { verb, tense, group, adverbs } = verbDefinition;
  const morpheme = lang.morphemeDictionary[verb];

  const VP = lang.verbPhraseFormation
    .map((pos) => {
      switch (pos) {
        case "adverb":
          return getAdverb(context, adverbs && adverbs[0]);
        case "verb":
          return getRequiredForm(context, "conjugation", {
            group,
            tense,
            person,
            number,
            morpheme,
            id: verb
          });
        default:
          return null;
      }
    })
    .filter((pos) => pos !== null);

  return {pos: 'VP', content: VP};
}
