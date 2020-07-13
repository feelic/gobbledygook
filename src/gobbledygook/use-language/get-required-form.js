export function getRequiredForm(context, rule, parameters, morpheme = {}) {
  const { lang } = context;

  if (!lang[rule]) {
    throw new Error(
      `Error: ${lang.name || "language"} doesn't have a rule set for ${rule}`
    );
  }
  const selectedRule = morpheme.irregular || lang[rule];
  const form = parameters.reduce((prev, curr) => {
    let key = curr;

    if (!prev[key] && prev[key] !== "") {
      key = "default";
    }
    if (!prev[key] && prev[key] !== "") {
      throw new Error(
        `Error: couldn't agree ${
          lang.name || "language"
        } ${rule} with parameter "${curr}" (${parameters.join(", ")})`
      );
    }
    return prev[key];
  }, selectedRule);

  return form;
}
