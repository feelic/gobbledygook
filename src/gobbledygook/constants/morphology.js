// analytic <-> synthetic
export const morphotypes = [
  "isolating" // solo flying morphemes
  // "agglutinative", // one grammatical category per affix
  // "fusional" // use a single inflectional morpheme to denote multiple grammatical, syntactic, or semantic features
];

// word order
export const wordOrders = {
  SOV: { weight: 45 }, // SOV "She him loves." 45%
  SVO: { weight: 45 }, // SVO "She loves him." 45%
  VSO: { weight: 5 }, // VSO "Loves she him." 5%
  VOS: { weight: 5 } // VOS "Loves him she." 5%
};
export const wordOrdersTemplates = {
  SOV: "{subject} {object} {verb}",
  SVO: "{subject} {verb} {object}",
  VSO: "{verb} {subject} {object}",
  VOS: "{verb} {object} {subject}"
};

export const interrogationModes = [
  "enclitic", // use tag word to denote a question
  "reversedOrder", // change the word order to denote a question
  "intonation" // tone is used to denote a question
];

// parse tree
// https://en.wikipedia.org/wiki/Parse_tree
// S for sentence, the top-level structure in this example
// NP for noun phrase. The first (leftmost) NP, a single noun "John",
//   serves as the subject of the sentence. The second one is the object of the sentence.
// VP for verb phrase, which serves as the predicate
// V for verb. In this case, it's a transitive verb hit.
// D for determiner, in this instance the definite article "the"
// N for noun

// cases
// nominative: Subject of a finite verb
// accusative: Direct object of a transitive verb
// dative: Indirect object of a verb
// ablative: Movement away from
// genitive: Possessor of another noun
// vocative: Addressee
// locative: Location, either physical or temporal
// instrumental: A means or tool used or companion present in/while performing an action
