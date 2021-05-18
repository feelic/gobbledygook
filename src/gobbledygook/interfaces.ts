export interface PoS {
  pos: tPosCode;
  content?: Array<PoS>;
  meaning?: string;
  form?: string;
}

export interface Context {
  lang: Language;
}
export interface Morpheme {
  morpheme: string;
}
export interface Language {
  name: string;
  morphemeDictionary: Record<string,Morpheme>;
}

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
