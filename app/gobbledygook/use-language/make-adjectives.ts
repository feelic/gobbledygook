import { getRequiredForm } from "./get-required-form";
import {
  Context,
  EntityDefinition,
  SentencePartDefinition,
  SentenceTree,
} from "../interfaces";

export function makeAdjectives(
  context: Context,
  nounDefinition: SentencePartDefinition
) {
  const { lang } = context;

  if (!nounDefinition.adjectives) {
    return { preadjectives: null, postadjectives: null };
  }
  const { gender, number, grammaticalCase } = nounDefinition;

  function makeAdjectivesByPosition(adjectives: Array<string>) {
    if (!adjectives || adjectives.length === 0) {
      return null;
    }

    const adjArr: SentenceTree = [];
    adjectives.forEach((adj) => {
      const adjective = nounDefinition.adjectives[adj];

      if (!adjective) {
        return;
      }
      const morpheme = lang.morphemeDictionary[adjective];
      if (!morpheme) {
        debugger;
      }
      const { declensionGroup } = morpheme;
      const declinedAdjective = getRequiredForm(context, "declension", {
        type: "adjective",
        declensionGroup,
        grammaticalCase,
        gender,
        number,
        morpheme,
        id: adjective,
      });

      declinedAdjective && adjArr.push(declinedAdjective);
    });

    return adjArr;
  }
  const preadjectives = makeAdjectivesByPosition(
    lang.syntax.adjectives.preadjectives
  );
  const postadjectives = makeAdjectivesByPosition(
    lang.syntax.adjectives.postadjectives
  );

  return { preadjectives, postadjectives };
}
