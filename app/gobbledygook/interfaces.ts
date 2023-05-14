import { StringMappingType } from "typescript";

export type SentenceTree = Array<PoS>;

export interface PoS {
  pos: tPosCode;
  form?: string;
  content?: SentenceTree;
  meaning?: string;
  rules?: Record<string, string>;
}

export interface Context {
  lang: Language;
  sentence?: SentenceStructureDefinition;
  entities?: any;
  references?: Record<string, boolean>;
}
export interface Morpheme {
  morpheme: string;
  gender?: string;
  declensionGroup?: string;
  type?: tPosCode;
  irregular?: any;
  comparative?: string;
  superlative?: string;
}
export interface Language {
  name: string;
  morphologyType?: string;
  genders?: Array<string>;
  grammaticalCases: Array<string> | null;
  morphemeDictionary: Record<string, Morpheme>;
  determiners: FormTable;
  pronouns: FormTable;
  conjugation: FormTable;
  declension: FormTable;
  syntax: {
    nounPhraseFormation: PhraseFormation;
    verbPhraseFormation: PhraseFormation;
    sentenceFormations: Record<string, PhraseFormation>;
    adjectiveClauseFormation: PhraseFormation;
    adjectiveFormation: PhraseFormation;
    adjectives: any;
    comparative: PhraseFormation;
    superlative: PhraseFormation;
  };
  comparisonAdverb: any;
  numbers: {
    digits: Record<number, string>;
    unitFormation: Record<string, string>;
    formation: string;
  };
  vowels: Record<string, Phoneme>;
  consonants: Record<string, Phoneme>;
}

export type PhonologyType = Record<PhonemeType, Record<string, Phoneme>>;
export type PhonemeType = "vowels" | "consonants";

export type GroupsType = {
  genders: Array<string>;
  declensionGroups?: Array<string> | null;
  conjugationGroups?: Array<string> | null;
};

export interface Phoneme {
  weight: number;
  translit: string;
}
export type PhraseFormation = Array<string>;

export interface FormTable {
  rules: Array<string>;
  forms: FormsType | string;
  prepositions?: any;
  tenseSystem?: Record<string, string>;
  tenseMarkers?: Record<string, string>;
  declensionGroups?: Array<string> | null;
}
export type FormsType = Record<string, any>;

export type tRuleName =
  | "determiners"
  | "pronouns"
  | "conjugation"
  | "declension";

export type tPosCode =
  | "Adj"
  | "AdjP"
  | "Adv"
  | "AdvP"
  | "Det"
  | "Deic"
  | "Con"
  | "G"
  | "Int"
  | "N"
  | "NP"
  | "Num"
  | "Obj"
  | "Pre"
  | "Pro"
  | "S"
  | "V"
  | "VP";

export interface EntityDefinition {
  core?: string;
  gender?: string;
  number?: string;
  determination?: DeterminationDefinition;
  usePronoun?: boolean;
  adjective?: any;
  person?: string;
  morpheme?: Morpheme;
  count?: number;
  type?: string;
  adjectives?: {
    color?: string;
    size?: string;
  };
}

export interface SentenceDefinition {
  transcript: string;
  entities: Record<string, EntityDefinition>;
  sentence: SentenceStructureDefinition;
}

export interface SentenceStructureDefinition {
  type?: string;
  question?: "who" | "what" | "where" | "why" | "how";
  subject: SentencePartDefinition;
  verb: VerbDefinition;
  object?: SentencePartDefinition;
  adverbialClauses?: Array<SentencePartDefinition>;
}
export interface SentencePartDefinition {
  id?: string;
  determination?: DeterminationDefinition;
  grammaticalCase?: string;
  adverbs?: Array<string>;

  adjectives?: any;

  // genitive might be better off as an adj clause
  genitive?: string;
  // adj clause does some heavy lifting here
  adjectiveClause?: SentenceStructureDefinition;
  //multiple entities linked by and
  entities?: Array<SentencePartDefinition>;
  //comparison, feels shoddy
  quality?: string;
  degree?: ComparisonDegreeType;
  type?: string;
  value?: string;
  object?: string;
  gender?: string;
  number?: string;
}
export type ComparisonDegreeType = "comparative" | "superlative";
export interface VerbDefinition {
  verb: string;
  tense: string;
  group?: string;
  adverbs?: Array<string>;
}
export interface DeterminationDefinition {
  type: string;
  owner?: any;
  usePronoun?: boolean;
}
export interface FormParameters {
  determination?: DeterminationDefinition;
  morpheme?: Morpheme;
  id?: string;
  person?: string;
  owner?: Object;
  gender?: string;
  number?: string;
  group?: string;
  tense?: string;
  grammaticalCase?: string;
  type?: string;
  declensionGroup?: string;
}
