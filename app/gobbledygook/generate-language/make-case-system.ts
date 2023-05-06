import { FormTable, Morpheme, PhonologyType } from "../interfaces";
import { gaussian, randomFromArray } from "../util/random";
import makeDeclension from "./make-declension";
import { makeMorpheme } from "./make-morpheme";

export function makeMorphologyType() {
  return randomFromArray([
    "inflectional",
    "semiFlectional",
    "analytic",
    // "agglutinative", i'll do that later
  ]);
}

export function makeCaseSystem(
  morphologyType: string,
  phonology: PhonologyType,
  genders: Array<string>
): { declension: FormTable; grammaticalCases: Array<string> | null } {
  if (morphologyType === "inflectional") {
    let cases = {
      nominative: "nominative",
      accusative: "accusative",
      dative: "dative",
      genitive: "genitive", // of
      ablative: "ablative", // from
      lative: "lative", // to
      inessive: "inessive", // in
      instrumental: "instrumental", // using
      benefactive: "benefactive", // for
    };
    return {
      declension: {
        ...makeDeclension(phonology, morphologyType, cases, genders),
        prepositions: {},
      },
      grammaticalCases: [...new Set(Object.keys(cases))],
    };
  }

  if (morphologyType === "semiFlectional") {
    let cases = {
      nominative: "nominative",
      accusative: "accusative",
      dative: "dative",
      genitive: "genitive", // of
      ablative: "dative", // from
      lative: "dative", // to
      inessive: "dative", // in
      instrumental: "dative", // using
      benefactive: "dative", // for
    };
    let prepositionsCases = [
      "genitive",
      "ablative",
      "lative",
      "inessive",
      "instrumental",
      "benefactive",
    ];

    return {
      declension: {
        ...makeDeclension(phonology, morphologyType, cases, genders),
        prepositions: makePrepositions(phonology, prepositionsCases),
      },
      grammaticalCases: [...new Set(Object.keys(cases))],
    };
  }

  let prepositionsCases = [
    "genitive",
    "ablative",
    "lative",
    "inessive",
    "instrumental",
    "benefactive",
  ];

  //analytic
  return {
    declension: {
      rules: ["type"],
      forms: { default: "{morpheme}", adjective: "{morpheme}" },
      prepositions: makePrepositions(phonology, prepositionsCases),
    },
    grammaticalCases: null,
  };
}

function makePrepositions(
  phonology: PhonologyType,
  grammaticalCases: Array<string>
) {
  let prepositions: Record<string, string> = {};

  grammaticalCases.forEach((prepositionCase) => {
    prepositions[prepositionCase] = makeMorpheme(
      phonology,
      gaussian(1, 2)(),
      false
    );
  });

  return prepositions;
}
// const prepositions = {

//     // const quantifiers = {
//       all: { morpheme: "" },
//       some: { morpheme: "" },
//       many: { morpheme: "" },
//       few: { morpheme: "" },
//       no: { morpheme: "" },
//       // };
//       // const relativePronouns {
//       that: {morpheme: ""},
//       // };
//       // const distributive = {
//       each: { morpheme: "" },
//       any: { morpheme: "" },
//       // };
//       // const interrogative = {
//       what: { morpheme: "" },
//       which: { morpheme: "" },
//       when: { morpheme: "" },
//       where: { morpheme: "" },
//       who: { morpheme: "" },
//       why: { morpheme: "" },
//       how: { morpheme: "" },
//       };

// const cases = [
//   "nominative", // subject
//   "vocative",
//   "accusative", // "direct object of transitive verb"
//   "dative", // "recipient of action" "to me" "indirect object"
//   "genitive", // of, 's
//     "possessive", //
//   "instrumental", //using
//   "privative", // "without"
//   "comitative", // "together with" "in the company of"
//   "benefactive", // "for"

//   "causative", // "because"
//   "concessive", // "although"
//   "proprietive", //propriety of having X

//   "evitative", // feared "lest"

//   "translative", // to a state
//   "essive", // in a state
//   //beside
//   //against
//   //around
//   //through
//   "locative",
//   "ablative", //"from" "off" away
//   "elative", // "from" "out of"
//   "exessive", // outside out
//   "lative", //"to" toward

//   "adessive", // "on"
//   "allative", // "onto"
//   "delative", //"off of", "down from"

//   "inessive", // "in"
//   "illative", // into
//   "inelative", // "from inside"

//   "superessive", // "above of"
//   "superlative", // to above
//   "superelative", // from above

//   "subessive", // under
//   "sublative", // to under
//   "subelative", // from under

//   "prolative", // via
//   "prosecutive", // across, along

//   "postessive", // behind
//   "postlative", // to behind
//   "postelative", // from behind

//   "preessive", // in front of
//   "prelative", // to in front of
//   "preelative", // from in front of

//   //before
//   //after
//   //during
// ]

// - ÉNUMERATION : D'abord , en premier lieu, enfin, ensuite...
// - ADDITION : Aussi, de même, de plus, encore, et, également...
// - LIAISON / RÉSUMÉ : Bref, d'ailleurs, donc, ensuite, en somme, en outre , or, par ailleurs, puis...
// - EXPLICATION : C'est-à-dire, en effet, effectivement, étant donné que, puisque...
// - ILLUSTRATION / COMPARAISON : Entre autres, notamment, par exemple, autant dire que...
// - OPPOSITION : Au contraire, néanmoins, en revanche, mais, pourtant, quoique, toutefois...
// - CONSÉQUENCE : Alors, ainsi, c'est pourquoi, d'où, dans ces conditions, de sorte que, donc, en conséquence, par conséquent...
// - TERMINAISON / RÉSULTAT : Ainsi, étant donné que ...
// - BUT : Pour, En vue de, pour que...
// - CONCESSION : Certes, sans doute, effectivement, à la riueur, j'admets que, je reconnais que, il est vrai que ...
// - CONDITION :  À moins de/que, à condition que ...
// - CAUSE : Car, parce que ...
