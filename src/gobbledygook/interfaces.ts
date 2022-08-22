export interface PoS {
  pos: tPosCode;
  content?: Array<PoS>;
  meaning?: string;
  form?: string;
}

export interface Context {
  lang: Language;
  entities: any;
}
export interface Morpheme {
  morpheme: string;
  gender?: string;
}
export interface Language {
  name: string;
  morphemeDictionary: Record<string, Morpheme>;
  determiners: FormTable;
  pronouns: FormTable;
  conjugation: FormTable;
  declension: FormTable;
}

export interface FormTable {
  rules: Array<string>;
  forms: any;
  prepositions: any;
}

export type tRuleName =
  | "determiners"
  | "pronouns"
  | "conjugation"
  | "declension";

export type tPosCode =
  | "Adj"
  | "Adv"
  | "AdvP"
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
  core: string;
  gender?: string;
  number?: string;
  determination?: { type: string; owner?: any; usedPronoun?: boolean };
  adjective?: any;
  person?: string;
  morpheme?: Morpheme;
  count?: number;
}
