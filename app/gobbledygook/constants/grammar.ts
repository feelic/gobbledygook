/**
 * Grammar constants for Gobbledygook
 *
 * These enums define the grammatical concepts used throughout the system.
 * Use enum values as references (e.g., GrammaticalCase.Nominative) instead of strings.
 */

// =============================================================================
// GRAMMATICAL CASES
// =============================================================================

/**
 * Grammatical cases used in the system.
 * Merges syntactic roles (nominative, accusative) with semantic relationships (inessive, benefactive)
 * as described in README.md
 */
export enum GrammaticalCase {
  // Core syntactic cases
  Nominative = "nominative",
  Accusative = "accusative",
  Dative = "dative",
  Genitive = "genitive",
  // Locative cases
  Locative = "locative",
  Lative = "lative", // movement towards
  Inessive = "inessive", // inside
  Ablative = "ablative", // movement away from
  // Semantic cases
  Benefactive = "benefactive", // for someone
  Instrumental = "instrumental", // with/using something
}

// =============================================================================
// NUMBER
// =============================================================================

export enum GrammaticalNumber {
  Singular = "singular",
  Plural = "plural",
}

// =============================================================================
// PERSON
// =============================================================================

export enum GrammaticalPerson {
  First = "firstPerson",
  Second = "secondPerson",
  Third = "thirdPerson",
}

// =============================================================================
// GENDER
// =============================================================================

export enum Gender {
  Masculine = "masc",
  Feminine = "fem",
  Neuter = "neut",
}

/** Common gender system configurations */
export const GENDER_SYSTEMS: Gender[][] = [
  [Gender.Feminine, Gender.Masculine],
  [Gender.Feminine, Gender.Masculine, Gender.Neuter],
];

// =============================================================================
// DETERMINATION
// =============================================================================

export enum DeterminationType {
  Definite = "definite",
  Indefinite = "indefinite",
  Demonstrative = "demonstrative",
  Distal = "distal",
  Possessive = "possessive",
  ProperNoun = "properNoun",
  Count = "count",
}

// =============================================================================
// TENSE
// =============================================================================

export enum Tense {
  General = "general",
  Present = "present",
  Past = "past",
  Future = "future",
  Conditional = "conditional",
}

/** Tenses that may require markers in analytic languages */
export const TENSE_MARKER_CANDIDATES = [Tense.Past, Tense.Future, Tense.Conditional] as const;

// =============================================================================
// ADJECTIVE CATEGORIES
// =============================================================================

/**
 * Semantic categories for adjectives.
 * Used to determine adjective position relative to noun (pre/post)
 */
export enum AdjectiveCategory {
  Color = "color",
  Size = "size",
  Age = "age",
  Shape = "shape",
  Material = "material",
}

// =============================================================================
// SENTENCE TYPES
// =============================================================================

export enum SentenceType {
  Declarative = "declarative",
  PolarInterrogative = "polarInterrogative",
  OpenInterrogative = "openInterrogative",
}

// =============================================================================
// INTERROGATIVE WORDS
// =============================================================================

export enum InterrogativeWord {
  Who = "who",
  What = "what",
  Where = "where",
  Why = "why",
  How = "how",
}

// =============================================================================
// COMPARISON
// =============================================================================

export enum ComparisonDegree {
  Comparative = "comparative",
  Superlative = "superlative",
}

/** @deprecated Use ComparisonDegree instead */
export type ComparisonDegreeType = ComparisonDegree;

export enum ComparisonValue {
  Positive = "positive",
  Negative = "negative",
}

/** Human-readable meanings for comparison adverbs */
export const COMPARISON_MEANINGS: Record<ComparisonDegree, Record<ComparisonValue, string>> = {
  [ComparisonDegree.Comparative]: {
    [ComparisonValue.Negative]: "less",
    [ComparisonValue.Positive]: "more",
  },
  [ComparisonDegree.Superlative]: {
    [ComparisonValue.Negative]: "least",
    [ComparisonValue.Positive]: "most",
  },
};

// =============================================================================
// MORPHOLOGY TYPES
// =============================================================================

export enum MorphologyType {
  Inflectional = "inflectional",
  SemiFlectional = "semiFlectional",
  Analytic = "analytic",
}

// =============================================================================
// DECLENSION TYPES (morphological categories for inflection)
// =============================================================================

/**
 * Morphological types used in declension rules.
 * Different from EntityType which describes semantic categories.
 */
export enum DeclensionType {
  Noun = "noun",
  Adjective = "adjective",
  Comparative = "comparative",
  Superlative = "superlative",
}

// =============================================================================
// ENTITY TYPES
// =============================================================================

export enum EntityType {
  Object = "object",
  Animal = "animal",
  Person = "person",
  Place = "place",
  Adjective = "adjective",
  Comparison = "comparison",
}

// =============================================================================
// SENTENCE STRUCTURE PARTS
// =============================================================================

/**
 * Elements that can appear in phrase formation rules.
 * Used to define word order in sentences, noun phrases, verb phrases, etc.
 */
export enum PhraseElement {
    // === Base constituents (word types) ===
    Noun = "noun",
    Verb = "verb",
    Adjective = "adjective",
    Adverb = "adverb",
    Determiner = "determiner",
    Preposition = "preposition",
  
    // === Sentence-level slots ===
    Subject = "subject",
    Object = "object",
    AdverbialClauses = "adverbialClauses",
    InterrogativePronoun = "interrogativePronoun",
    InterrogativeParticle = "interrogativeParticle",
  
    // === Noun phrase slots ===
    Preadjectives = "preadjectives",
    Postadjectives = "postadjectives",
    Genitive = "genitive",
    AdjectiveClause = "adjectiveClause",
    RelativePronoun = "relativePronoun",
  
    // === Verb phrase slots ===
    TenseMarker = "tenseMarker",
  
    // === Comparison phrase slots ===
    ComparisonAdverb = "comparisonAdverb",
    ComparedObject = "comparedObject",
    ComparisonPreposition = "comparisonPreposition",
  }

// =============================================================================
// RULE NAMES (parameters used in form table rules)
// =============================================================================

/** Parameter names used in form table rules arrays */
export enum RuleName {
  DeclensionType = "declensionType",
  DeclensionGroup = "declensionGroup",
  ConjugationGroup = "conjugationGroup",
  GrammaticalCase = "grammaticalCase",
  Gender = "gender",
  Number = "number",
  Person = "person",
  Tense = "tense",
  Group = "group",
  DeterminationType = "determination.type",
  OwnerPerson = "owner.person",
  OwnerGender = "owner.gender",
}

// =============================================================================
// FALLBACK / DEFAULT VALUES
// =============================================================================

/** Fallback values used when a specific form is not found */
export enum FallbackValue {
  Default = "default",
  FirstGroup = "1st group",
}

// =============================================================================
// INVARIABLES (conjunctions, relative pronouns, etc.)
// =============================================================================

export enum Conjunction {
  And = "and",
  Or = "or",
  But = "but",
}

/** Conjunctions used in comparisons */
export enum ComparisonConjunction {
  Than = "than",
}

export enum RelativePronoun {
  That = "that",
  Which = "which",
  Who = "who",
}

// =============================================================================
// PART OF SPEECH CODES
// =============================================================================

/** Part of speech codes used in sentence tree nodes */
export enum PosCode {
  Adjective = "Adj",
  AdjectivePhrase = "AdjP",
  Adverb = "Adv",
  AdverbialPhrase = "AdvP",
  Conjunction = "Con",
  Determiner = "Det",
  Deictic = "Deic",
  Group = "G",
  Interrogative = "Int",
  Noun = "N",
  NounPhrase = "NP",
  Number = "Num",
  Object = "Obj",
  Preposition = "Pre",
  Pronoun = "Pro",
  RelativePronoun = "RelPro",
  Subject = "S",
  TenseMarker = "TM",
  Verb = "V",
  VerbPhrase = "VP",
}

// =============================================================================
// UTILITY: Get all values from an enum
// =============================================================================

/** Helper to get all values of an enum as an array */
export function enumValues<T extends Record<string, string>>(enumObj: T): T[keyof T][] {
  return Object.values(enumObj) as T[keyof T][];
}
