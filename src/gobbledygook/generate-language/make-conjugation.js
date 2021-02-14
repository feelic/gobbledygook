import { random, gaussian } from "../util/random";
import { makeMorpheme } from "./make-morpheme";
import { getOrdinalNumber } from "../util";

export default function makeConjugation(phonology, morphologyType) {
  if (morphologyType === "isolating") {
    return {
      rules: ["tense"],
      forms: { default: "{morpheme}" },
    };
  }
  const conjugationGroups = makeConjugationGroups(morphologyType);
  const tenses = makeTenses(morphologyType);
  const tenseSystem = (tenses && {
    default: "default",
    present: (tenses.includes("present") && "present") || "default",
    past: (tenses.includes("past") && "past") || "default",
    future: (tenses.includes("future") && "future") || "default",
    conditional: (tenses.includes("conditional") && "conditional") || "default",
  }) || {
    default: "default",
  };
  const numbers = ["singular", "plural"];
  const persons = ["firstPerson", "secondPerson", "thirdPerson"];
  const rules = [];
  if (conjugationGroups) {
    rules.push("conjugationGroup");
  }
  if (tenses) {
    rules.push("tense");
  }
  if (random() > 0.5) {
    rules.push("person");
  }
  if (random() > 0.5) {
    rules.push("number");
  }
  const ruleOptions = {
    conjugationGroup: conjugationGroups,
    tense: tenses,
    person: persons,
    number: numbers,
  };
  const forms = makeForms(phonology, rules, ruleOptions);

  return { forms, rules, conjugationGroups, tenseSystem };
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
      [curr]: `{morpheme}${makeMorpheme(phonology, gaussian(1, 1)())}`,
    };
  }, {});
}
function makeConjugationGroups(morphologyType) {
  const numberOfGroups = Math.ceil(random() * 3);

  if (morphologyType === "semiFlectional" || numberOfGroups < 2) {
    return;
  }

  return new Array(numberOfGroups).fill(1).map((i, idx) => {
    return `${getOrdinalNumber(idx + 1)} group`;
  });
}
function makeTenses() {
  const tenses = ["default"];
  if (random() > 0.5) {
    tenses.push("past");
  }
  if (random() > 0.5) {
    tenses.push("future");
  }
  if (random() > 0.5) {
    tenses.push("conditional");
  }
  if (tenses.length === 1) {
    return;
  }
  return tenses;
}
