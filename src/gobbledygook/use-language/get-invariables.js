const posCodes = {
  "conjunction": 'Con',
  "adverb": 'Adv',
  "preposition": 'Pre',
  "interrogative": 'Int',
  "relativePronoun": 'Pro'
}

function getInvariable(type, context, invariable) {
  const { lang } = context;

  if (!invariable) {
    return null;
  }
  if (!lang.morphemeDictionary[invariable]) {
    throw new Error(`Unknown ${type} "${invariable}" in ${lang.name}`);
  }
  const { morpheme } = lang.morphemeDictionary[invariable];

  return {pos: posCodes[type], form: morpheme};
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
export function getRelativePronoun(context, invariable) {
  return getInvariable("relativePronoun", context, invariable);
}
