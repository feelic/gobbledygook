function getInvariable(type, context, invariable) {
  const { lang } = context;

  if (!invariable) {
    return "";
  }
  if (!lang.morphemeDictionary[invariable]) {
    throw new Error(`Unknown ${type} "${invariable}" in ${lang.name}`);
  }
  const { morpheme } = lang.morphemeDictionary[invariable];

  return ` ${morpheme} `;
}

export function getConjunction(context, invariable) {
  return getInvariable("conjunction", context, invariable);
}
export function getAdverb(context, invariable) {
  return getInvariable("adverb", context, invariable);
}
export function getPreposition(context, invariable) {
  return getInvariable("preposition", context, invariable);
}
export function getInterrogative(context, invariable) {
  return getInvariable("interrogative", context, invariable);
}
