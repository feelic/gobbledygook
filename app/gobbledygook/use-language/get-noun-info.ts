import {
  Context,
  EntityDefinition,
  Morpheme,
  SentencePartDefinition,
} from "../interfaces";

export function getNounInfo(context: Context, noun: SentencePartDefinition) {
  const { entities } = context;

  if (!noun.id || !entities[noun.id]) {
    throw new Error(`no entity for ${noun.id}`);
  }
  const nounDefinition = entities[noun.id];

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

export function getSubjectInfo(context: Context, subject: any) {
  if (subject.entities) {
    return {
      number: "plural",
      person: "thirdPerson",
    };
  }

  return getNounInfo(context, subject);
}

function getMorpheme(
  context: Context,
  nounDefinition: EntityDefinition
): Morpheme {
  const { lang } = context;

  if (!nounDefinition.core) {
    return { morpheme: "" };
  }

  const morpheme = lang.morphemeDictionary[nounDefinition.core];

  if (!morpheme) {
    return { morpheme: nounDefinition.core };
  }

  return morpheme;
}
