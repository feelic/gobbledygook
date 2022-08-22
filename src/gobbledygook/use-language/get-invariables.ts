import { PoS, Context, tPosCode } from "../interfaces";
import {posCodesLabels} from "../constants/pos-codes";

function getInvariable(
  posCode: tPosCode,
  context: Context,
  invariable: string
): PoS | null {
  const { lang } = context;

  if (!invariable) {
    return null;
  }
  if (!lang.morphemeDictionary[invariable]) {
    throw new Error(`Unknown ${posCodesLabels[posCode]} "${invariable}" in ${lang.name}`);
  }
  const { morpheme } = lang.morphemeDictionary[invariable];
  return { pos: posCode, form: morpheme, meaning: invariable };
}

export function getConjunction(context: Context, invariable: string) {
  return getInvariable("Con", context, invariable);
}
export function getAdverb(context: Context, invariable: string) {
  return getInvariable("Adv", context, invariable);
}
export function getPreposition(context: Context, grammaticalCase: string) {
  const { lang } = context;

  return {
    pos:"Pre",
    form: lang.declension.prepositions[grammaticalCase] || "",
    meaning: `${grammaticalCase} preposition`
  };
}
export function getInterrogative(context: Context, invariable: string) {
  return getInvariable("Int", context, invariable);
}
export function getInterrogativeParticle(context: Context, invariable: string) {
  return getInvariable("Int", context, invariable);
}
export function getRelativePronoun(context: Context, invariable: string) {
  return getInvariable("Pro", context, invariable);
}
