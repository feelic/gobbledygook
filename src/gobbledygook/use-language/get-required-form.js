const formTableStructures = {
  conjugation: ["group", "tense", "person", "number"],
  declension: ["type", "group", "case", "gender", "number"],
  pronouns: ["person", "case", "gender", "number"],
  determiners: ["type", "person", "gender", "number"]
};

export function getRequiredForm(context, rule, parameters, morpheme = {}) {
  const { lang } = context;

  if (!lang[rule]) {
    throw new Error(
      `Error: ${lang.name || "language"} doesn't have a rule set for ${rule}`
    );
  }
  const formTableStructure = formTableStructures[rule];

  if (parameters.length !== formTableStructure.length) {
    throw new Error(
      `Error: ${lang.name ||
        "language"} incorrect structure for rule ${rule}, expected (${formTableStructure.join(
        ", "
      )})`
    );
  }

  const selectedRule = morpheme.irregular || lang[rule];
  const form = parameters.reduce((prev, curr, idx) => {
    let key = curr;

    if (!prev[key] && prev[key] !== "") {
      key = "default";
    }
    if (!prev[key] && prev[key] !== "") {
      const form = formTableStructure[idx];
      const availableOptions = Object.keys(prev);
      const morphemeInfo =
        (morpheme.morpheme && ` for "${morpheme.morpheme}"`) || "";

      throw new Error(
        `Error: couldn't agree ${lang.name ||
          "language"}${morphemeInfo} ${rule} with parameter ${form} = "${curr}"
Available options are: [${availableOptions.join(", ")}]

Given options:
${parameters.map((p, i) => `${formTableStructure[i]}: "${p}"`).join("\n")}

Matched rule:
${JSON.stringify(prev)}`
      );
    }
    return prev[key];
  }, selectedRule);

  return form;
}
