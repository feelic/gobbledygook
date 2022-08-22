export default function makeCaseSystem(morphologyType) {
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
const prepositions = {
  
    // const quantifiers = {
      all: { morpheme: "" },
      some: { morpheme: "" },
      many: { morpheme: "" },
      few: { morpheme: "" },
      no: { morpheme: "" },
      // };
      // const relativePronouns {
      that: {morpheme: ""},
      // };
      // const distributive = {
      each: { morpheme: "" },
      any: { morpheme: "" },
      // };
      // const interrogative = {
      what: { morpheme: "" },
      which: { morpheme: "" },
      when: { morpheme: "" },
      where: { morpheme: "" },
      who: { morpheme: "" },
      why: { morpheme: "" },
      how: { morpheme: "" },
      // };
      // const prepositions = {
      than: {morpheme: ""},
      to: { morpheme: "" },
      up: { morpheme: "" },
      down: { morpheme: "" },
      above: { morpheme: "" },
      upon: { morpheme: "" },
      under: { morpheme: "" },
      around: { morpheme: "" },
      through: { morpheme: "" },
      infront: { morpheme: "" },
      behind: { morpheme: "" },
      in: { morpheme: "" },
      out: { morpheme: "" },
      into: { morpheme: "" },
      outof: { morpheme: "" },
      against: { morpheme: "" },
      beside: { morpheme: "" },
      from: { morpheme: "" },
      toward: { morpheme: "" },
      with: { morpheme: "" },
      by: { morpheme: "" },
      for: { morpheme: "" },
      // };
}
  const cases = [
    "nominative", // subject
    "accusative", // "direct object of transitive verb"
    "dative", // "recipient of action" "to me" "indirect object"
    "genitive", // of, 's
      "possessive", //
    "instrumental", //using
    "privative", // "without"
    "comitative", // "together with" "in the company of"
    "benefactive", // "for"

    "causative", // "because"
    "concessive", // "although"
    "proprietive", //propriety of having X

    "evitative", // feared "lest"

    "translative", // to a state
    "essive", // in a state
    //beside
    //against
    //around
    //through
    "locative",
    "ablative", //"from" "off" away
    "elative", // "from" "out of"
    "exessive", // outside out
    "lative", //"to" toward

    "adessive", // "on"
    "allative", // "onto"
    "delative", //"off of", "down from"

    "inessive", // "in"
    "illative", // into
    "inelative", // "from inside"

    "superessive", // "above of"
    "superlative", // to above
    "superelative", // from above

    "subessive", // under
    "sublative", // to under
    "subelative", // from under

    "prolative", // via
    "prosecutive", // across, along

    "postessive", // behind
    "postlative", // to behind
    "postelative", // from behind
 
    "preessive", // in front of
    "prelative", // to in front of
    "preelative", // from in front of

    //before
    //after
    //during
  ]