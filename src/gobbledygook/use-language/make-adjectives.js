import { getRequiredForm } from "./get-required-form";

export function makeAdjectives(context, nounDefinition) {
  const { lang } = context;

  if (!nounDefinition.adjectives) {
    return { preadjectives: "", postadjectives: "" };
  }
  const { gender, number, grammaticalCase } = nounDefinition;

  function makeAdjectivesByPosition(adjectives) {
    if (!adjectives || adjectives.length === 0) {
      return "";
    }

    return adjectives.reduce((prev, curr) => {
      const adjective = nounDefinition.adjectives[curr];

      if (!adjective) {
        return prev;
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
      }).replace("{adjective}", morpheme.morpheme);

      return `${prev} ${declinedAdjective}`;
    }, "");
  }
  const preadjectives = makeAdjectivesByPosition(lang.adjectives.preadjectives);
  const postadjectives = makeAdjectivesByPosition(
    lang.adjectives.postadjectives
  );

  return { preadjectives, postadjectives };
}
