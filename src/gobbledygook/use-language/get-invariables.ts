import { PoS, Context, Language, tPosCode } from "../interfaces";
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
export function getPreposition(context: Context, invariable: string) {
  return getInvariable("Pre", context, invariable);
}
export function getInterrogative(context: Context, invariable: string) {
  return getInvariable("Int", context, invariable);
}
export function getRelativePronoun(context: Context, invariable: string) {
  return getInvariable("Pro", context, invariable);
}
