import { PosCode } from "./grammar";

export const posCodesLabels: Record<PosCode, string> = {
  [PosCode.Adjective]: "Adjective",
  [PosCode.AdjectivePhrase]: "Adjective clause",
  [PosCode.Adverb]: "Adverb",
  [PosCode.AdverbialPhrase]: "Adverbial clause",
  [PosCode.Conjunction]: "Conjunction",
  [PosCode.Determiner]: "Determiner",
  [PosCode.Deictic]: "Deictic",
  [PosCode.Group]: "Group",
  [PosCode.Interrogative]: "Interrogative",
  [PosCode.Noun]: "Noun",
  [PosCode.NounPhrase]: "Noun phrase",
  [PosCode.Number]: "Number",
  [PosCode.Object]: "Object",
  [PosCode.Preposition]: "Preposition",
  [PosCode.Pronoun]: "pronoun",
  [PosCode.RelativePronoun]: "Relative pronoun",
  [PosCode.Subject]: "Subject",
  [PosCode.TenseMarker]: "Tense marker",
  [PosCode.Verb]: "Verb",
  [PosCode.VerbPhrase]: "Verb phrase",
};
