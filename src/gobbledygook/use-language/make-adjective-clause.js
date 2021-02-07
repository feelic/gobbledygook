import { makeNounPhrase } from "./make-noun-phrase";
import { makeVerbPhrase } from "./make-verb-phrase";
import { getNounInfo } from "./get-noun-info";
import {getRelativePronoun} from "./get-invariables";

export function makeAdjectiveClause(context, nounDefinition) {
  const { lang } = context;

  if (!nounDefinition.adjectiveClause) {
    return null;
  }
  const adjectiveClause = nounDefinition.adjectiveClause;

  const subject = getNounInfo(context, adjectiveClause.subject);
  const object = getNounInfo(context, adjectiveClause.object);

  const clause = lang.adjectiveClauseFormation
    .map((pos) => {
      switch (pos) {
        case "relativePronoun":
          return getRelativePronoun(context, "that")
        case "subject":
          return makeNounPhrase(context, subject);
        case "verb":
          return makeVerbPhrase(context, subject, adjectiveClause.verb);
        case "object":
          return makeNounPhrase(context, object);
        default:
          return null;
      }
    })
    .filter((pos) => pos !== null);

    return {pos: "AdjP", content: clause}
}
