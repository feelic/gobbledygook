import { random, gaussian } from "../util/random";
import { makeMorpheme } from "./make-morpheme";
import { getOrdinalNumber } from "../util";
import { FormTable, PhonologyType } from "../interfaces";
import { 
  MorphologyType, 
  GrammaticalNumber, 
  GrammaticalPerson,
  Tense,
  FallbackValue,
  RuleName,
  TENSE_MARKER_CANDIDATES,
  enumValues,
} from "../constants/grammar";

export default function makeConjugation(
  phonology: PhonologyType,
  morphologyType: MorphologyType
): FormTable {
  if (morphologyType === MorphologyType.Analytic) {
    const tenseMarkers = makeTenseMarkers(phonology, [...TENSE_MARKER_CANDIDATES]);
    return {
      rules: [RuleName.DeclensionType],
      forms: { [FallbackValue.Default]: "{morpheme}" },
      tenseMarkers,
    };
  }
  const conjugationGroups = makeConjugationGroups(morphologyType);
  const { tenses, tenseSystem, tenseMarkers } = makeTenses(phonology);

  const numbers = enumValues(GrammaticalNumber);
  const persons = enumValues(GrammaticalPerson);
  const rules: string[] = [];
  const ruleOptions: Record<string, Array<string>> = {
    [RuleName.Tense]: tenses,
  };
  if (conjugationGroups) {
    rules.push(RuleName.ConjugationGroup);
    ruleOptions[RuleName.ConjugationGroup] = conjugationGroups;
  }

  rules.push(RuleName.Tense);

  if (random() > 0.5) {
    rules.push(RuleName.Person);
    ruleOptions[RuleName.Person] = persons;
  }
  if (random() > 0.5) {
    rules.push(RuleName.Number);
    ruleOptions[RuleName.Number] = numbers;
  }

  const forms = makeForms(phonology, rules, ruleOptions);

  return { forms, rules, conjugationGroups, tenseSystem, tenseMarkers };
}

function makeForms(
  phonology: PhonologyType,
  rules: Array<string>,
  ruleOptions: Record<string, Array<string>>
): any {
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

function makeConjugationGroups(morphologyType: MorphologyType) {
  const numberOfGroups = Math.ceil(random() * 3);

  if (morphologyType === MorphologyType.SemiFlectional || numberOfGroups < 2) {
    return;
  }

  return new Array(numberOfGroups).fill(1).map((i, idx) => {
    return `${getOrdinalNumber(idx + 1)} group`;
  });
}

function makeTenses(phonology: PhonologyType) {
  const tenses = [FallbackValue.Default, Tense.Past, Tense.Future];

  const tenseSystem: Record<string, string> = { [FallbackValue.Default]: FallbackValue.Default };
  const requiredTenseMarkers: Array<string> = [];

  ([Tense.Present, Tense.Past, Tense.Future, Tense.Conditional]).forEach((tense) => {
    if (tenses.includes(tense)) {
      tenseSystem[tense] = tense;
    } else {
      tenseSystem[tense] = FallbackValue.Default;
      tense !== Tense.Present && requiredTenseMarkers.push(tense);
    }
  });

  const tenseMarkers = makeTenseMarkers(phonology, requiredTenseMarkers);
  return { tenses, tenseSystem, tenseMarkers };
}

function makeTenseMarkers(phonology: PhonologyType, tenses: Array<string>) {
  return tenses.reduce((prev: Record<string, string>, curr: string) => {
    const length = Math.max(gaussian(2, 2)(), 1);
    return { ...prev, [curr]: `${makeMorpheme(phonology, length)}` };
  }, {});
}
