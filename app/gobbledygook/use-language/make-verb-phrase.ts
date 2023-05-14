import { getRequiredForm } from "./get-required-form";
import { getSubjectInfo } from "./get-noun-info";
import { getAdverb, getTenseMarker } from "./get-invariables";
import {
  Context,
  PoS,
  SentencePartDefinition,
  SentenceTree,
  VerbDefinition,
} from "../interfaces";

export function makeVerbPhrase(
  context: Context,
  subject: SentencePartDefinition,
  verbDefinition: VerbDefinition
): PoS {
  const { lang } = context;
  const { number, person } = getSubjectInfo(context, subject);
  const { verb, tense, group, adverbs } = verbDefinition;
  const morpheme = lang.morphemeDictionary[verb];

  const VP: SentenceTree = [];

  lang.syntax.verbPhraseFormation.forEach((pos) => {
    switch (pos) {
      case "adverb":
        if (!adverbs || !adverbs[0]) {
          break;
        }
        const Adv = getAdverb(context, adverbs[0]);

        Adv && VP.push(Adv);
        break;
      case "verb":
        const V = getRequiredForm(context, "conjugation", {
          group,
          tense,
          person,
          number,
          morpheme,
          id: verb,
        });

        V && VP.push(V);
        break;
      case "tenseMarker":
        const TM = getTenseMarker(context, tense);

        TM && VP.push(TM);
        break;
      default:
        break;
    }
  });

  return { pos: "VP", content: VP };
}
