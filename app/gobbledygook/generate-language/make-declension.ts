import { random, gaussian } from "../util/random";
import { makeMorpheme } from "./make-morpheme";
import { getOrdinalNumber } from "../util";
import { FormTable, FormsType, PhonologyType } from "../interfaces";

export default function makeDeclension(
  phonology: PhonologyType,
  morphologyType: string,
  cases: Record<string, string>,
  genders: Array<string>
): FormTable {
  const rules = ["type"];
  const types = ["noun", "adjective"];
  const declensionGroups = makeDeclensionGroups(morphologyType);
  const numbers = ["singular", "plural"];

  if (declensionGroups) {
    rules.push("declensionGroup");
  }
  if (cases && cases.length && random() > 0.5) {
    rules.push("grammaticalCase");
  }
  if (genders && random() > 0.5) {
    rules.push("gender");
  }
  if (random() > 0.5) {
    rules.push("number");
  }
  const ruleOptions: Record<string, Array<string> | null> = {
    type: types,
    grammaticalCase: [...new Set(Object.values(cases))],
    gender: genders,
    number: numbers,
    declensionGroup: declensionGroups,
  };

  const forms = makeForms(phonology, rules, ruleOptions);

  return { forms, rules, declensionGroups };
}

function makeForms(
  phonology: PhonologyType,
  rules: Array<string>,
  ruleOptions: Record<string, Array<string> | null>
): FormsType {
  const firstRule = rules[0];
  const options = ruleOptions[firstRule];
  if (!firstRule || !options) {
    return {};
  }
  if (rules[1]) {
    return options.reduce((prev, curr) => {
      return {
        ...prev,
        [curr]: makeForms(phonology, rules.slice(1), ruleOptions),
      };
    }, {});
  }
  return options.reduce((prev, curr) => {
    return {
      ...prev,
      [curr]: `{morpheme}${makeMorpheme(phonology, gaussian(1, 1)(), false)}`,
    };
  }, {});
}

function makeDeclensionGroups(morphologyType: string) {
  const numberOfGroups = Math.ceil(random() * 4);

  if (morphologyType === "semiFlectional" || numberOfGroups < 2) {
    return null;
  }

  return new Array(numberOfGroups).fill(1).map((i, idx) => {
    return `${getOrdinalNumber(idx + 1)} group`;
  });
}
