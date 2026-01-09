import {
  Morpheme,
  EntityDefinition,
  Context,
  tRuleName,
  PoS,
  FormParameters,
  FormsType,
} from "../interfaces";
import { makeNumber } from "./make-number";
import { FallbackValue, DeclensionType, DeterminationType, PosCode } from "../constants/grammar";

export function getRequiredForm(
  context: Context,
  rule: tRuleName,
  parameters: FormParameters
): PoS | null {
  const { lang } = context;
  const { morpheme } = parameters;
  if (!lang[rule]) {
    throw new Error(
      `Error: ${lang.name || "language"} doesn't have a rule set for ${rule}`
    );
  }
  const formTableStructure = lang[rule].rules;
  const usedRules: Record<string, string> = {};

  const selectedRule = morpheme?.irregular || lang[rule].forms;
  
  // Navigate through the nested form table structure
  let currentLevel: FormsType | string = selectedRule;
  
  for (const agreementParameter of formTableStructure) {
    if (typeof currentLevel === "string") {
      break;
    }

    // If the current level is an empty object, no form is available
    if (Object.keys(currentLevel).length === 0) {
      return null;
    }
    
    const originalKey = getPropertyValue(agreementParameter, parameters);
    let key = originalKey;

    if (!currentLevel[key] && currentLevel[key] !== "") {
      key = FallbackValue.FirstGroup;
    }
    if (!currentLevel[key] && currentLevel[key] !== "") {
      key = FallbackValue.Default;
    }

    if (!currentLevel[key] && currentLevel[key] !== "" && originalKey === FallbackValue.Default) {
      key = Object.keys(currentLevel)[0];
    }
    if (!currentLevel[key] && currentLevel[key] !== "") {
      throw new Error(
        AgreementException(
          context,
          rule,
          agreementParameter,
          formTableStructure,
          currentLevel,
          key,
          parameters,
          morpheme
        )
      );
    }

    if (originalKey !== FallbackValue.Default) {
      usedRules[agreementParameter] = originalKey;
    }

    currentLevel = currentLevel[key];
  }

  if (typeof currentLevel !== "string") {
    throw new Error(`Form resolution did not end with a string template for rule ${rule}`);
  }
  
  const form = currentLevel;
  const rawText = form.replace("{morpheme}", morpheme?.morpheme || "");

  if (rawText === "") {
    return null;
  }
  return {
    pos: getPOSCode(rule, parameters),
    form: rawText,
    meaning: parameters.id,
    rules: usedRules,
  };
}

function getPOSCode(rule: string, parameters: FormParameters): PosCode {
  const adjectivalTypes: DeclensionType[] = [
    DeclensionType.Adjective, 
    DeclensionType.Comparative, 
    DeclensionType.Superlative
  ];
  
  switch (rule) {
    case "determiners":
      return PosCode.Determiner;
    case "conjugation":
      return PosCode.Verb;
    case "declension":
      if (parameters.declensionType && adjectivalTypes.includes(parameters.declensionType)) {
        return PosCode.Adjective;
      }
      return PosCode.Noun;
    case "pronouns":
      return PosCode.Pronoun;
    default:
      throw new Error(`unknown pos code for rule ${rule}`);
  }
}

function getPropertyValue(
  property: string,
  parameters: Record<string, any>
): string {
  if (!parameters) {
    return FallbackValue.Default;
  }
  const path = property.split(".");
  const parameterValue = parameters[path[0]];

  if (path.length > 1) {
    return getPropertyValue(path.slice(1).join(""), parameterValue);
  }

  return parameterValue || FallbackValue.Default;
}

function AgreementException(
  context: Context,
  rule: string,
  agreementParameter: string,
  formTableStructure: Array<string>,
  formTable: any,
  key: string,
  parameters: any,
  morpheme?: Morpheme
) {
  const { lang } = context;
  const availableOptions = Object.keys(formTable);
  const morphemeInfo =
    (morpheme?.morpheme && ` of "${morpheme.morpheme}"`) || "";

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

export function getDeterminer(
  context: Context,
  nounDefinition: EntityDefinition
): PoS | null {
  const { gender, number, determination, person, morpheme } = nounDefinition;
  let owner: EntityDefinition | undefined;

  if (!determination) {
    throw new Error(
      "no determination parameter provided with getDeterminer call"
    );
  }
  if (determination.type === DeterminationType.Count) {
    return makeNumber(context, Number(nounDefinition.count));
  }
  if (determination.type === DeterminationType.Possessive && determination.owner && context.entities) {
    owner = context.entities[determination.owner];
  }

  return getRequiredForm(context, "determiners", {
    determination,
    person,
    owner,
    gender,
    number,
    morpheme,
    id: "determiner",
  });
}
