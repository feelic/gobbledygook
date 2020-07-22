export function getNounInfo(context, noun) {
  const { entities } = context;
  const nounDefinition = entities[noun.id];
  const morpheme = getMorpheme(context, nounDefinition);

  const normalizedDefinition = {
    ...nounDefinition,
    morpheme,
    gender: nounDefinition.gender || morpheme.gender || null,
    number: nounDefinition.number || "singular",
    determination: nounDefinition.determination || { type: "definite" },
    grammaticalCase: noun.grammaticalCase || "nominative",
    person: noun.person || "thirdPerson",
    ...noun,
  };

  return normalizedDefinition;
}

function getMorpheme(context, nounDefinition) {
  const { lang } = context;
  const morpheme = lang.morphemeDictionary[nounDefinition.core];

  if (!morpheme) {
    return { morpheme: nounDefinition.core };
  }

  return morpheme;
}
