import { PhonologyType, FormsType } from "../interfaces";
import { gaussian } from "../util/random";
import { makeMorpheme } from "./make-morpheme";

export function makeForms(
  phonology: PhonologyType,
  rules: Array<string>,
  ruleOptions: Record<string, Array<string>>
): FormsType {
  if (rules[1]) {
    if (!ruleOptions[rules[0]]) {
      debugger;
    }
    return ruleOptions[rules[0]].reduce((prev, curr) => {
      return {
        ...prev,
        [curr]: makeForms(phonology, rules.slice(1), ruleOptions),
      };
    }, {});
  }
  return ruleOptions[rules[0]].reduce((prev, curr) => {
    const length = Math.max(gaussian(1, 1)(), 1);
    return { ...prev, [curr]: `${makeMorpheme(phonology, length)}` };
  }, {});
}

export function makeEmptyForm(rules: Array<string>): FormsType {
  if (rules[1]) {
    return { default: makeEmptyForm(rules.slice(1)) };
  }
  return { default: "" };
}
