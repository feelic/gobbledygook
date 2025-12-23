import {
  Context,
  EntityDefinition,
  Morpheme,
  SentencePartDefinition,
  DeterminationDefinition,
} from "../interfaces";
import {
  GrammaticalCase,
  GrammaticalNumber,
  GrammaticalPerson,
  DeterminationType,
  Gender,
} from "../constants/grammar";

/** Normalized noun info with guaranteed required fields */
export interface NormalizedNounInfo extends EntityDefinition {
  id: string;
  morpheme: Morpheme;
  gender: Gender | undefined;
  number: GrammaticalNumber;
  determination: DeterminationDefinition;
  grammaticalCase: GrammaticalCase;
  person: GrammaticalPerson;
}

export function getNounInfo(context: Context, noun: SentencePartDefinition): NormalizedNounInfo {
  const { entities } = context;

  if (!entities || !noun.id || !entities[noun.id]) {
    throw new Error(`no entity for ${noun.id}`);
  }
  const nounDefinition = entities[noun.id];

  const morpheme = getMorpheme(context, nounDefinition);

  return {
    ...nounDefinition,
    id: noun.id,
    morpheme,
    gender: nounDefinition.gender || morpheme.gender,
    number: nounDefinition.number || GrammaticalNumber.Singular,
    determination: nounDefinition.determination || { type: DeterminationType.Definite },
    grammaticalCase: noun.grammaticalCase || GrammaticalCase.Nominative,
    person: nounDefinition.person || GrammaticalPerson.Third,
    ...noun,
  };
}

export function getSubjectInfo(context: Context, subject: SentencePartDefinition) {
  if (subject.entities) {
    return {
      number: GrammaticalNumber.Plural,
      person: GrammaticalPerson.Third,
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
