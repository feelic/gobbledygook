export function getConjunction(context, conjunction) {
  const { lang } = context;

  if (! conjunction) {
    return '';
  }
  if (! lang.morphemeDictionary[conjunction]) {
    throw new Error (`Unknown conjunction "${conjunction}" in ${lang.name}`)
  }
  const { morpheme } = lang.morphemeDictionary[conjunction];

  return ` ${morpheme} `;
}

export function getAdverb(context, adverb) {
  const { lang } = context;

  if (! adverb) {
    return '';
  }
  if (! lang.morphemeDictionary[adverb]) {
    throw new Error (`Unknown adverb "${adverb}" in ${lang.name}`)
  }
  const { morpheme } = lang.morphemeDictionary[adverb];

  return morpheme;
}
