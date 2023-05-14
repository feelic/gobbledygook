import { random, gaussian } from "../util/random";
import { makeMorpheme } from "./make-morpheme";
import { getOrdinalNumber } from "../util";
import { PhonologyType } from "../interfaces";

export default function makeConjugation(
  phonology: PhonologyType,
  morphologyType: string
) {
  if (morphologyType === "analytic") {
    const tenseMarkers = makeTenseMarkers(phonology, [
      "past",
      "future",
      "conditional",
    ]);
    return {
      rules: [],
      forms: "{morpheme}",
      tenseMarkers,
    };
  }
  const conjugationGroups = makeConjugationGroups(morphologyType);
  const { tenses, tenseSystem, tenseMarkers } = makeTenses(phonology);

  const numbers = ["singular", "plural"];
  const persons = ["firstPerson", "secondPerson", "thirdPerson"];
  const rules = [];
  const ruleOptions: Record<string, Array<string>> = {
    tense: tenses,
  };
  if (conjugationGroups) {
    rules.push("conjugationGroup");
    ruleOptions.conjugationGroup = conjugationGroups;
  }

  rules.push("tense");

  if (random() > 0.5) {
    rules.push("person");
    ruleOptions.person = persons;
  }
  if (random() > 0.5) {
    rules.push("number");
    ruleOptions.number = numbers;
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

function makeConjugationGroups(morphologyType: string) {
  const numberOfGroups = Math.ceil(random() * 3);

  if (morphologyType === "semiFlectional" || numberOfGroups < 2) {
    return;
  }

  return new Array(numberOfGroups).fill(1).map((i, idx) => {
    return `${getOrdinalNumber(idx + 1)} group`;
  });
}
function makeTenses(phonology: PhonologyType) {
  const tenses = ["default", "past", "future"];

  // const tenseRandomNbr = random();
  // if (tenseRandomNbr > 0.3) {
  //   tenses.push("past");
  //   tenses.push("future");
  // }
  // if (tenseRandomNbr > ) {
  //   tenses.push("farpast");
  //   tenses.push("farfuture");
  // }
  // if (tenseRandomNbr > 0.8) {
  //   tenses.push("conditional");
  // }

  const tenseSystem: Record<string, string> = { default: "default" };
  const requiredTenseMarkers: Array<string> = [];

  ["present", "past", "future", "conditional"].forEach((tense: string) => {
    if (tenses.includes(tense)) {
      tenseSystem[tense] = tense;
      console.log(tense, "own form");
    } else {
      console.log(tense, "default form");
      tenseSystem[tense] = "default";
      tense !== "present" && requiredTenseMarkers.push(tense);
    }
  });

  const tenseMarkers = makeTenseMarkers(phonology, requiredTenseMarkers);
  return { tenses, tenseSystem, tenseMarkers };
}

function makeTenseMarkers(phonology: PhonologyType, tenses: Array<string>) {
  return tenses.reduce((prev: any, curr: string) => {
    const length = Math.max(gaussian(2, 2)(), 1);
    return { ...prev, [curr]: `${makeMorpheme(phonology, length)}` };
  }, {});
}
