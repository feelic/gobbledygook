import { random, gaussian } from "../util/random";
import { makeMorpheme } from "./make-morpheme";
import { getOrdinalNumber } from "../util";

export default function makeDeclension(
  phonology,
  morphologyType,
  cases,
  genders
) {
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
  const ruleOptions = {
    type: types,
    declensionGroup: declensionGroups,
    grammaticalCase: cases,
    gender: genders,
    number: numbers,
  };

  const forms = makeForms(phonology, rules, ruleOptions);

  return { forms, rules, declensionGroups };
}

function makeForms(phonology, rules, ruleOptions) {
  if (rules[1]) {
    return ruleOptions[rules[0]].reduce((prev, curr) => {
      return {
        ...prev,
        [curr]: makeForms(phonology, rules.slice(1), ruleOptions),
      };
    }, {});
  }
  return ruleOptions[rules[0]].reduce((prev, curr) => {
    return {
      ...prev,
      [curr]: `{morpheme}${makeMorpheme(phonology, gaussian(1, 1)(), false)}`,
    };
  }, {});
}

function makeDeclensionGroups(morphologyType) {
  const numberOfGroups = Math.ceil(random() * 4);

  if (morphologyType === "semiFlectional" || numberOfGroups < 2) {
    return;
  }

  return new Array(numberOfGroups).fill(1).map((i, idx) => {
    return `${getOrdinalNumber(idx + 1)} group`;
  });
}
