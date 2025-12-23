import { getRequiredForm } from "./get-required-form";
import {
  Context,
  SentencePartDefinition,
  SentenceTree,
} from "../interfaces";
import { AdjectiveCategory, DeclensionType } from "../constants/grammar";

export function makeAdjectives(
  context: Context,
  nounDefinition: SentencePartDefinition
) {
  const { lang } = context;

  if (!nounDefinition.adjectives) {
    return { preadjectives: null, postadjectives: null };
  }
  const { gender, number, grammaticalCase, adjectives } = nounDefinition;

  function makeAdjectivesByPosition(adjectiveCategories: Array<AdjectiveCategory>) {
    if (!adjectiveCategories || adjectiveCategories.length === 0) {
      return null;
    }

    const adjArr: SentenceTree = [];
    adjectiveCategories.forEach((category) => {
      const adjective = adjectives?.[category];

      if (!adjective) {
        return;
      }
      const morpheme = lang.morphemeDictionary[adjective];
      if (!morpheme) {
        debugger;
      }
      const { declensionGroup } = morpheme;
      const declinedAdjective = getRequiredForm(context, "declension", {
        declensionType: DeclensionType.Adjective,
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
