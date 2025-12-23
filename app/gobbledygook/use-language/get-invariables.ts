import { PoS, Context } from "../interfaces";
import { GrammaticalCase, PosCode } from "../constants/grammar";
import { posCodesLabels } from "../constants/pos-codes";

function getInvariable(
  posCode: PosCode,
  context: Context,
  invariable: string
): PoS {
  const { lang } = context;

  if (!invariable) {
    throw new Error("missing invariable");
  }
  if (!lang.morphemeDictionary[invariable]) {
    throw new Error(
      `Unknown ${posCodesLabels[posCode]} "${invariable}" in ${lang.name}`
    );
  }
  const { morpheme } = lang.morphemeDictionary[invariable];
  return { pos: posCode, form: morpheme, meaning: invariable };
}

export function getConjunction(context: Context, invariable: string) {
  return getInvariable(PosCode.Conjunction, context, invariable);
}
export function getAdverb(context: Context, invariable: string) {
  return getInvariable(PosCode.Adverb, context, invariable);
}
export function getPreposition(context: Context, grammaticalCase?: GrammaticalCase): PoS {
  const { lang } = context;

  return {
    pos: PosCode.Preposition,
    form: (grammaticalCase && lang.declension.prepositions?.[grammaticalCase]) || "",
    meaning: `${grammaticalCase} preposition`,
  };
}
export function getInterrogative(context: Context, invariable: string) {
  return getInvariable(PosCode.Interrogative, context, invariable);
}
export function getInterrogativeParticle(context: Context, invariable: string) {
  return getInvariable(PosCode.Interrogative, context, invariable);
}
export function getRelativePronoun(context: Context, invariable: string) {
  return getInvariable(PosCode.Pronoun, context, invariable);
}
export function getTenseMarker(context: Context, tense: string): PoS | null {
  const { lang } = context;

  if (!lang.conjugation.tenseMarkers || !lang.conjugation.tenseMarkers[tense]) {
    return null;
  }
  return {
    pos: PosCode.Deictic,
    form: lang.conjugation.tenseMarkers[tense],
    meaning: `${tense} preposition`,
  };
}
