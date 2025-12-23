import {
  AdjectiveCategory,
  ComparisonDegree,
  ComparisonValue,
  DeclensionType,
  DeterminationType,
  EntityType,
  Gender,
  GrammaticalCase,
  GrammaticalNumber,
  GrammaticalPerson,
  InterrogativeWord,
  MorphologyType,
  PosCode,
  SentenceType,
  Tense,
} from "./constants/grammar";

// =============================================================================
// SENTENCE TREE (output of sentence generation)
// =============================================================================

export type SentenceTree = Array<PoS>;

export interface PoS {
  pos: PosCode;
  form?: string;
  content?: SentenceTree;
  meaning?: string;
  rules?: Record<string, string>;
}

// =============================================================================
// CONTEXT
// =============================================================================

export interface Context {
  lang: Language;
  sentence?: SentenceStructureDefinition;
  entities?: Record<string, EntityDefinition>;
  references?: Record<string, boolean>;
}

// =============================================================================
// MORPHEME
// =============================================================================

export interface Morpheme {
  morpheme: string;
  gender?: Gender;
  declensionGroup?: string;
  type?: PosCode;
  /** Irregular forms following the same structure as FormTable.forms */
  irregular?: FormsType;
  comparative?: string;
  superlative?: string;
}

// =============================================================================
// LANGUAGE
// =============================================================================

export interface Language {
  name: string;
  morphologyType?: MorphologyType;
  genders?: Array<Gender>;
  grammaticalCases: Array<GrammaticalCase> | null;
  morphemeDictionary: Record<string, Morpheme>;
  determiners: FormTable;
  pronouns: FormTable;
  conjugation: FormTable;
  declension: FormTable;
  syntax: SyntaxDefinition;
  comparisonAdverb: ComparisonAdverbDefinition;
  numbers: NumberSystemDefinition;
  vowels: Record<string, Phoneme>;
  consonants: Record<string, Phoneme>;
}

// =============================================================================
// SYNTAX
// =============================================================================

export interface SyntaxDefinition {
  nounPhraseFormation: PhraseFormation;
  verbPhraseFormation: PhraseFormation;
  sentenceFormations: Record<SentenceType, PhraseFormation>;
  adjectiveClauseFormation: PhraseFormation;
  adjectiveFormation: PhraseFormation;
  /** Defines adjective position relative to noun, by category */
  adjectives: AdjectivePositionDefinition;
  comparative: PhraseFormation;
  superlative: PhraseFormation;
}

export interface AdjectivePositionDefinition {
  preadjectives: Array<AdjectiveCategory>;
  postadjectives: Array<AdjectiveCategory>;
}

export interface ComparisonAdverbDefinition {
  comparative: Record<ComparisonValue, string>;
  superlative: Record<ComparisonValue, string>;
}

export interface NumberSystemDefinition {
  digits: Record<number, string>;
  unitFormation: Record<string, string>;
  formation: string;
}

// =============================================================================
// PHONOLOGY
// =============================================================================

export type PhonologyType = Record<PhonemeType, Record<string, Phoneme>>;
export type PhonemeType = "vowels" | "consonants";

export interface Phoneme {
  weight: number;
  translit: string;
}

// =============================================================================
// FORM TABLES (declension, conjugation, determiners, pronouns)
// =============================================================================

export type PhraseFormation = Array<string>;

export interface FormTable {
  rules: Array<string>;
  forms: FormsType;
  /** Prepositions for grammatical cases (only define cases that use prepositions) */
  prepositions?: Partial<Record<GrammaticalCase, string>>;
  tenseSystem?: Record<string, string>;
  tenseMarkers?: Record<string, string>;
  declensionGroups?: Array<string> | null;
  conjugationGroups?: Array<string> | null;
}

/**
 * Recursive type for nested form tables.
 * Each level corresponds to a rule, ending with a string template.
 * Example: forms.firstPerson.nominative.masc.singular = "{morpheme}"
 */
export type FormsType = { [key: string]: FormsType | string };

export type tRuleName =
  | "determiners"
  | "pronouns"
  | "conjugation"
  | "declension";

// =============================================================================
// GROUPS (for language generation)
// =============================================================================

export type GroupsType = {
  genders: Array<Gender>;
  declensionGroups?: Array<string> | null;
  conjugationGroups?: Array<string> | null;
};

// =============================================================================
// SENTENCE DEFINITION (input for sentence generation)
// =============================================================================

export interface SentenceDefinition {
  transcript: string;
  entities: Record<string, EntityDefinition>;
  sentence: SentenceStructureDefinition;
}

export interface SentenceStructureDefinition {
  type?: SentenceType;
  question?: InterrogativeWord;
  subject: SentencePartDefinition;
  verb: VerbDefinition;
  object?: SentencePartDefinition;
  adverbialClauses?: Array<SentencePartDefinition>;
}

export interface SentencePartDefinition {
  id?: string;
  determination?: DeterminationDefinition;
  grammaticalCase?: GrammaticalCase;
  adverbs?: Array<string>;
  adjectives?: Partial<Record<AdjectiveCategory, string>>;
  /** Genitive relationship - might be better as an adjective clause */
  genitive?: string;
  /** Adjective clause modifying this part */
  adjectiveClause?: SentenceStructureDefinition;
  /** Multiple entities linked by "and" */
  entities?: Array<SentencePartDefinition>;
  // Comparison fields
  quality?: string;
  degree?: ComparisonDegree;
  type?: EntityType;
  value?: ComparisonValue;
  /** Object of comparison (e.g., "taller than X") */
  object?: string;
  gender?: Gender;
  number?: GrammaticalNumber;
}

export interface VerbDefinition {
  verb: string;
  tense: Tense;
  group?: string;
  adverbs?: Array<string>;
}

export interface DeterminationDefinition {
  type: DeterminationType;
  /** Owner for possessive determination (entity id or reference) */
  owner?: string;
  usePronoun?: boolean;
}

// =============================================================================
// ENTITY DEFINITION
// =============================================================================

export interface EntityDefinition {
  core?: string;
  gender?: Gender;
  number?: GrammaticalNumber;
  determination?: DeterminationDefinition;
  usePronoun?: boolean;
  person?: GrammaticalPerson;
  morpheme?: Morpheme;
  count?: number;
  type?: EntityType;
  adjectives?: Partial<Record<AdjectiveCategory, string>>;
}

// =============================================================================
// FORM PARAMETERS (used during sentence generation)
// =============================================================================

export interface FormParameters {
  determination?: DeterminationDefinition;
  morpheme?: Morpheme;
  id?: string;
  person?: GrammaticalPerson;
  owner?: EntityDefinition;
  gender?: Gender;
  number?: GrammaticalNumber;
  group?: string;
  tense?: Tense;
  grammaticalCase?: GrammaticalCase;
  /** Morphological type for declension (noun, adjective, comparative, superlative) */
  declensionType?: DeclensionType;
  declensionGroup?: string;
}
