export interface PoS {
  pos: pos;
  content?: Array<PoS>;
  meaning?: string;
  form?: string;
}

export interface Context {
  lang: Language;
}
export interface Dictionary<T> {
  [Key: string]: T;
}
export interface Morpheme {
  morpheme: string;
}
export interface Language {
  name: string;
  morphemeDictionary: Dictionary<Morpheme>;
}
type tPoSCodes = {
  [Key: string]: pos;
};
type pos =
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

export const posCodes: tPoSCodes = {
  conjunction: "Con",
  adverb: "Adv",
  preposition: "Pre",
  interrogative: "Int",
  relativePronoun: "Pro",
};
