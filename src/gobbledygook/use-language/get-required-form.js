import { makeNumber } from "./make-number";

export function getRequiredForm(context, rule, parameters) {
  const { lang } = context;
  const { morpheme = {} } = parameters;
  if (!lang[rule]) {
    throw new Error(
      `Error: ${lang.name || "language"} doesn't have a rule set for ${rule}`
    );
  }
  const formTableStructure = lang[rule].rules;

  const selectedRule = morpheme.irregular || lang[rule].forms;
  const form = formTableStructure.reduce(
    (formTable, agreementParameter, idx) => {
      let key = getPropertyValue(agreementParameter, parameters);

      if (!formTable[key] && formTable[key] !== "") {
        key = "default";
      }
      if (!formTable[key] && formTable[key] !== "") {
        throw new Error(
          AgreementException(
            context,
            rule,
            agreementParameter,
            formTableStructure,
            formTable,
            morpheme,
            key,
            parameters
          )
        );
      }

      return formTable[key];
    },
    selectedRule
  );

  return { form, morpheme, rules: parameters };
}

function getPropertyValue(property, parameters) {
  const path = property.split(".");

  if (path.length > 1) {
    return getPropertyValue(path.slice(1).join(""), parameters[path[0]]);
  }

  return parameters[path[0]] || "default";
}

function AgreementException(
  context,
  rule,
  agreementParameter,
  formTableStructure,
  formTable,
  morpheme,
  key,
  parameters
) {
  const { lang } = context;
  const availableOptions = Object.keys(formTable);
  const morphemeInfo =
    (morpheme.morpheme && ` of "${morpheme.morpheme}"`) || "";

  return `Error: couldn't agree ${
    lang.name || "language"
  } ${rule}${morphemeInfo} with parameter ${agreementParameter} = "${key}"
Available options are: [${availableOptions.join(", ")}]

Given options:
${formTableStructure
  .map((p, i) => `    ${p}: "${getPropertyValue(p, parameters)}"`)
  .join("\n")}

Matched rule:
${JSON.stringify(formTable)}`;
}

export function getDeterminer(context, nounDefinition) {
  const { gender, number, determination, person, morpheme } = nounDefinition;
  let owner = {};

  if (!determination) {
    debugger;
  }
  if (determination.type === "count") {
    return makeNumber(context, nounDefinition.count);
  }
  if (determination.type === "possessive") {
    owner = context.entities[determination.owner];
  }

  return getRequiredForm(context, "determiners", {
    determination,
    person,
    owner,
    gender,
    number,
    morpheme,
  });
}
