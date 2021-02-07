import { makeNounPhrase } from "./make-noun-phrase";
import { makeVerbPhrase } from "./make-verb-phrase";
import { getNounInfo } from "./get-noun-info";

export function makeAdjectiveClause(context, nounDefinition) {
  const { lang } = context;

  if (!nounDefinition.adjectiveClause) {
    return "";
  }
  const adjectiveClause = nounDefinition.adjectiveClause;

  const subject = getNounInfo(context, adjectiveClause.subject);
  const object = getNounInfo(context, adjectiveClause.object);

  return lang.adjectiveClauseFormation
    .map((pos) => {
      switch (pos) {
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
}
