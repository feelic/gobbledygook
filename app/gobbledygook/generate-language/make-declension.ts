import { random, gaussian } from "../util/random";
import { makeMorpheme } from "./make-morpheme";
import { getOrdinalNumber } from "../util";
import { FormTable, FormsType, PhonologyType } from "../interfaces";
import { 
  MorphologyType, 
  GrammaticalNumber,
  DeclensionType,
  enumValues,
  RuleName,
} from "../constants/grammar";

export default function makeDeclension(
  phonology: PhonologyType,
  morphologyType: MorphologyType,
  cases: Record<string, string>,
  genders: Array<string>
): FormTable {
  const rules = [RuleName.DeclensionType];
  const types = [DeclensionType.Noun, DeclensionType.Adjective];
  const declensionGroups = makeDeclensionGroups(morphologyType);
  const numbers = enumValues(GrammaticalNumber);

  if (declensionGroups) {
    rules.push(RuleName.DeclensionGroup);
  }
  if (cases && cases.length && random() > 0.5) {
    rules.push(RuleName.GrammaticalCase);
  }
  if (genders && random() > 0.5) {
    rules.push(RuleName.Gender);
  }
  if (random() > 0.5) {
    rules.push(RuleName.Number);
  }
  const ruleOptions: Record<string, Array<string> | null> = {
    [RuleName.DeclensionType]: types,
    [RuleName.GrammaticalCase]: [...new Set(Object.values(cases))],
    [RuleName.Gender]: genders,
    [RuleName.Number]: numbers,
    [RuleName.DeclensionGroup]: declensionGroups,
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

function makeDeclensionGroups(morphologyType: MorphologyType) {
  const numberOfGroups = Math.ceil(random() * 4);

  if (morphologyType === MorphologyType.SemiFlectional || numberOfGroups < 2) {
    return null;
  }

  return new Array(numberOfGroups).fill(1).map((i, idx) => {
    return `${getOrdinalNumber(idx + 1)} group`;
  });
}
