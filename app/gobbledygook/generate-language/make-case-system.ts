import { FormTable, PhonologyType } from "../interfaces";
import { 
  MorphologyType, 
  GrammaticalCase, 
  DeclensionType, 
  RuleName,
  FallbackValue,
  enumValues 
} from "../constants/grammar";
import { gaussian, randomFromArray } from "../util/random";
import makeDeclension from "./make-declension";
import { makeMorpheme } from "./make-morpheme";

export function makeMorphologyType(): MorphologyType {
  return randomFromArray(enumValues(MorphologyType));
}

export function makeCaseSystem(
  morphologyType: MorphologyType,
  phonology: PhonologyType,
  genders: Array<string>
): { declension: FormTable; grammaticalCases: Array<GrammaticalCase> | null } {
  if (morphologyType === MorphologyType.Inflectional) {
    const cases: Record<GrammaticalCase, GrammaticalCase> = {
      [GrammaticalCase.Nominative]: GrammaticalCase.Nominative,
      [GrammaticalCase.Accusative]: GrammaticalCase.Accusative,
      [GrammaticalCase.Dative]: GrammaticalCase.Dative,
      [GrammaticalCase.Genitive]: GrammaticalCase.Genitive,
      [GrammaticalCase.Ablative]: GrammaticalCase.Ablative,
      [GrammaticalCase.Lative]: GrammaticalCase.Lative,
      [GrammaticalCase.Locative]: GrammaticalCase.Locative,
      [GrammaticalCase.Inessive]: GrammaticalCase.Inessive,
      [GrammaticalCase.Instrumental]: GrammaticalCase.Instrumental,
      [GrammaticalCase.Benefactive]: GrammaticalCase.Benefactive,
    };
    return {
      declension: {
        ...makeDeclension(phonology, morphologyType, cases, genders),
        prepositions: {},
      },
      grammaticalCases: [...new Set(Object.values(cases))],
    };
  }

  if (morphologyType === MorphologyType.SemiFlectional) {
    // Some cases share the same declension form (e.g., ablative uses dative form)
    const cases: Record<GrammaticalCase, GrammaticalCase> = {
      [GrammaticalCase.Nominative]: GrammaticalCase.Nominative,
      [GrammaticalCase.Accusative]: GrammaticalCase.Accusative,
      [GrammaticalCase.Dative]: GrammaticalCase.Dative,
      [GrammaticalCase.Genitive]: GrammaticalCase.Genitive,
      [GrammaticalCase.Ablative]: GrammaticalCase.Dative,
      [GrammaticalCase.Lative]: GrammaticalCase.Dative,
      [GrammaticalCase.Locative]: GrammaticalCase.Dative,
      [GrammaticalCase.Inessive]: GrammaticalCase.Dative,
      [GrammaticalCase.Instrumental]: GrammaticalCase.Dative,
      [GrammaticalCase.Benefactive]: GrammaticalCase.Dative,
    };
    const prepositionsCases: GrammaticalCase[] = [
      GrammaticalCase.Genitive,
      GrammaticalCase.Ablative,
      GrammaticalCase.Lative,
      GrammaticalCase.Inessive,
      GrammaticalCase.Instrumental,
      GrammaticalCase.Benefactive,
    ];

    return {
      declension: {
        ...makeDeclension(phonology, morphologyType, cases, genders),
        prepositions: makePrepositions(phonology, prepositionsCases),
      },
      grammaticalCases: [...new Set(Object.values(cases))],
    };
  }

  const prepositionsCases: GrammaticalCase[] = [
    GrammaticalCase.Genitive,
    GrammaticalCase.Ablative,
    GrammaticalCase.Lative,
    GrammaticalCase.Inessive,
    GrammaticalCase.Instrumental,
    GrammaticalCase.Benefactive,
  ];

  // analytic
  return {
    declension: {
      rules: [RuleName.DeclensionType],
      forms: { 
        [FallbackValue.Default]: "{morpheme}", 
        [DeclensionType.Adjective]: "{morpheme}" 
      },
      prepositions: makePrepositions(phonology, prepositionsCases),
    },
    grammaticalCases: null,
  };
}

function makePrepositions(
  phonology: PhonologyType,
  grammaticalCases: Array<GrammaticalCase>
) {
  let prepositions: Record<string, string> = {};

  grammaticalCases.forEach((prepositionCase) => {
    prepositions[prepositionCase] = makeMorpheme(
      phonology,
      Math.max(gaussian(1, 2)(), 1),
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
