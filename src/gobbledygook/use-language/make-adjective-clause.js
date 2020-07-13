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
    .replace("{subject}", makeNounPhrase(context, subject))
    .replace("{verb}", makeVerbPhrase(context, subject, adjectiveClause.verb))
    .replace("{object}", makeNounPhrase(context, object));
}
