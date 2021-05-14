import { PoS, Context, Language, posCodes } from "../interfaces";

function getInvariable(
  type: string,
  context: Context,
  invariable: string
): PoS | null {
  const { lang } = context;

  if (!invariable) {
    return null;
  }
  if (!lang.morphemeDictionary[invariable]) {
    throw new Error(`Unknown ${type} "${invariable}" in ${lang.name}`);
  }
  const { morpheme } = lang.morphemeDictionary[invariable];
  const posCode = posCodes[type];
  return { pos: posCode, form: morpheme, meaning: invariable };
}

export function getConjunction(
  context: Context,
  invariable: string
): PoS | null {
  return getInvariable("conjunction", context, invariable);
}
export function getAdverb(context: Context, invariable: string): PoS | null {
  return getInvariable("adverb", context, invariable);
}
export function getPreposition(
  context: Context,
  invariable: string
): PoS | null {
  return getInvariable("preposition", context, invariable);
}
export function getInterrogative(
  context: Context,
  invariable: string
): PoS | null {
  return getInvariable("interrogative", context, invariable);
}
export function getRelativePronoun(
  context: Context,
  invariable: string
): PoS | null {
  return getInvariable("relativePronoun", context, invariable);
}
