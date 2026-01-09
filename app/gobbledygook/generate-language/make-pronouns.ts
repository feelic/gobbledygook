import { PhonologyType } from "../interfaces";
import { 
  MorphologyType, 
  GrammaticalNumber, 
  GrammaticalPerson,
  RuleName,
  enumValues,
} from "../constants/grammar";
import { random } from "../util/random";
import { makeForms } from "./make-forms";

export default function makePronouns(
  phonology: PhonologyType,
  morphologyType: MorphologyType,
  cases: Array<string> | null,
  genders?: Array<string> | null
) {
  //no pronoun system
  if (morphologyType !== MorphologyType.Analytic && random() > 0.8) {
    return {
      rules: [RuleName.Person],
      forms: { default: "" },
    };
  }

  const persons = enumValues(GrammaticalPerson);
  const numbers = enumValues(GrammaticalNumber);
  const rules: string[] = [];

  if (cases && random() > 0.9) {
    rules.push(RuleName.GrammaticalCase);
  }
  if (persons && random() > 0.2) {
    rules.push(RuleName.Person);
  }
  if (genders && random() > 0.5) {
    rules.push(RuleName.Gender);
  }
  if (random() > 0.5) {
    rules.push(RuleName.Number);
  }

  if (rules.length === 0) {
    return {
      rules: [RuleName.Person],
      forms: { default: "" },
    };
  }
  const ruleOptions: Record<string, Array<string>> = {
    [RuleName.Person]: persons,
    [RuleName.Number]: numbers,
  };
  if (cases) {
    ruleOptions[RuleName.GrammaticalCase] = cases;
  }
  if (genders) {
    ruleOptions[RuleName.Gender] = genders;
  }
  const forms = makeForms(phonology, rules, ruleOptions);

  return { forms, rules };
}
