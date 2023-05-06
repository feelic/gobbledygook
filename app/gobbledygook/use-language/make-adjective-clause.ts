import { makeNounPhrase } from "./make-noun-phrase";
import { makeVerbPhrase } from "./make-verb-phrase";
import { getNounInfo } from "./get-noun-info";
import { getRelativePronoun } from "./get-invariables";
import {
  Context,
  SentencePartDefinition,
  SentenceTree,
  PoS,
} from "../interfaces";

export function makeAdjectiveClause(
  context: Context,
  nounDefinition: SentencePartDefinition
): PoS | null {
  const { lang } = context;

  if (!nounDefinition.adjectiveClause) {
    return null;
  }
  const adjectiveClause = nounDefinition.adjectiveClause;

  const subject = getNounInfo(context, adjectiveClause.subject);
  const object =
    adjectiveClause.object && getNounInfo(context, adjectiveClause.object);

  const clause: SentenceTree = [];

  lang.syntax.adjectiveClauseFormation.forEach((pos: string) => {
    switch (pos) {
      case "relativePronoun":
        const pro = getRelativePronoun(context, "that");
        if (pro) clause.push(pro);
        break;
      case "subject":
        const S = makeNounPhrase(context, subject);
        S && clause.push(S);
        break;
      case "verb":
        clause.push(makeVerbPhrase(context, subject, adjectiveClause.verb));
        break;
      case "object":
        const O = makeNounPhrase(context, object);
        O && clause.push(O);
        break;
      default:
        break;
    }
  });

  return { pos: "AdjP", content: clause };
}
