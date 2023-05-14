import { PhonologyType } from "../interfaces";
import { random } from "../util/random";
import { makeForms } from "./make-forms";

export default function makePronouns(
  phonology: PhonologyType,
  morphologyType: string,
  cases: Array<string> | null,
  genders?: Array<string> | null
) {
  //no pronoun system
  if (morphologyType !== "analytic" && random() > 0.8) {
    return {
      rules: ["person"],
      forms: { default: "" },
    };
  }

  const persons = ["firstPerson", "secondPerson", "thirdPerson"];
  const numbers = ["singular", "plural"];
  const rules = [];

  if (cases && random() > 0.9) {
    rules.push("grammaticalCase");
  }
  if (persons && random() > 0.2) {
    rules.push("person");
  }
  if (genders && random() > 0.5) {
    rules.push("gender");
  }
  if (random() > 0.5) {
    rules.push("number");
  }

  if (rules.length === 0) {
    return {
      rules: ["person"],
      forms: { default: "" },
    };
  }
  const ruleOptions: Record<string, Array<string>> = {
    person: persons,
    number: numbers,
  };
  if (cases) {
    ruleOptions.grammaticalCase = cases;
  }
  if (genders) {
    ruleOptions.gender = genders;
  }
  const forms = makeForms(phonology, rules, ruleOptions);

  return { forms, rules };
}
