import { pointer } from "@testing-library/user-event/dist/types/pointer";

function makeCaseSystem(morphologyType) {
    const grammaticalCases = [
      "nominative",
      "vocative",
      "accusative",
      "dative",
      "genitive",
      "lative",
      "instrumental",
    ];
    const caseSystem = {};
  
    grammaticalCases.forEach((grammaticalCase) => {
      caseSystem[grammaticalCase] = grammaticalCase;
    });
  
    return caseSystem;
  }

  const cases = [
    "privative", // "without"
    //absolutive + ergative -> to consider at some point
    "accusative", // "direct object of transitive verb"
    "comitative", // "together with" "in the company of"
    "benefactive", // "for"
    "causative", // "because"
    "concessive", // "although"
    "dative", // "recipient of action" "to me" "indirect object"
    "evitative", // feared "lest"

    "instrumental", //using

    "translative", // to a state
    "exessive", // from state
    "essive", // in a state

    "proprietive", //propriety of having X

    "genitive", // of, 's
        "possessive", // 

    "locative",
    "adessive", // "at"
    "ablative", //"from" / "off"
    "allative", // "onto"
    "inessive", // "in"
    "illative", // into
    "delative", //"off of", "down from"
    "elative", // "out of"
    "inelative", // "from inside"
    "superessive", // "on top of"
    "superlative", // to above
    "superelative", // from above
    "prolative", // via
    "prosecutive", // across, along
    "subessive", // under
    "subelative", // from under
    "sublative", // down under
    "postessive", // after

    "nominative", // subject

  ]