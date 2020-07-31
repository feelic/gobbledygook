export default function getConjunction(context, conjunction) {
  const { lang } = context;
  const {morpheme}= lang.morphemeDictionary[conjunction]

  return ` ${morpheme} `;
}
