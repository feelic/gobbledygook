export function getNounInfo(context, noun) {
  const { entities } = context;
  const nounDefinition = entities[noun.id];

  if (!nounDefinition) {
    debugger;
    console.log("no entity for ", noun.id);
  }

  const morpheme = getMorpheme(context, nounDefinition);

  const normalizedDefinition = {
    ...nounDefinition,
    morpheme,
    gender: nounDefinition.gender || morpheme.gender || null,
    number: nounDefinition.number || "singular",
    determination: nounDefinition.determination || { type: "definite" },
    grammaticalCase: noun.grammaticalCase || "nominative",
    person: nounDefinition.person || "thirdPerson",
    ...noun,
  };

  return normalizedDefinition;
}

export function getSubjectInfo(context, subject) {
  if (subject.entities) {
    return {
      number: "plural",
      person: "thirdPerson",
    };
  }

  return getNounInfo(context, subject);
}

function getMorpheme(context, nounDefinition) {
  const { lang } = context;

  const morpheme = lang.morphemeDictionary[nounDefinition.core];

  if (!morpheme) {
    return { morpheme: nounDefinition.core };
  }

  return morpheme;
}
