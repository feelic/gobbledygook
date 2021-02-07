import { getRequiredForm } from "./get-required-form";

export function makeAdjectives(context, nounDefinition) {
  const { lang } = context;

  if (!nounDefinition.adjectives) {
    return { preadjectives: null, postadjectives: null };
  }
  const { gender, number, grammaticalCase } = nounDefinition;

  function makeAdjectivesByPosition(adjectives) {
    if (!adjectives || adjectives.length === 0) {
      return null;
    }

    return adjectives
      .map((adj) => {
        const adjective = nounDefinition.adjectives[adj];

        if (!adjective) {
          return null;
        }
        const morpheme = lang.morphemeDictionary[adjective];
        const { declensionGroup } = morpheme;
        const declinedAdjective = getRequiredForm(context, "declension", {
          type: "adjective",
          declensionGroup,
          grammaticalCase,
          gender,
          number,
          morpheme,
          id: adjective
        });

        return declinedAdjective;
      })
      .filter((pos) => pos !== null);
  }
  const preadjectives = makeAdjectivesByPosition(lang.adjectives.preadjectives);
  const postadjectives = makeAdjectivesByPosition(
    lang.adjectives.postadjectives
  );

  return { preadjectives, postadjectives };
}
