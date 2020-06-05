const defaultSentence = {
  subject: {
    core: "horse",
    type: "animal",
    adjectives: { color: "gray", size: "small" },
    number: "singular",
    determination: { type: "definite" },
    person: "thirdPerson"
  },
  verb: { verb: "love", tense: "general" },
  object: {
    core: "carrot",
    number: "plural",
    adjectives: { color: "orange", size: "small" },
    determination: { type: "indefinite" },
    grammaticalCase: "accusative"
  }
};

export function makeSentence(lang, sentenceDefinition = defaultSentence) {
  const subject = normalizeNounDefinition(lang, sentenceDefinition.subject);
  const object = normalizeNounDefinition(lang, sentenceDefinition.object);
  let sentence = lang.sentenceFormation
    .replace("{subject}", makeNounPhrase(lang, subject))
    .replace("{verb}", makeVerbPhrase(lang, sentenceDefinition))
    .replace("{object}", makeNounPhrase(lang, object));

  return sentence;
}

function normalizeNounDefinition(lang, nounDefinition) {
  const morpheme = lang.morphemeDictionary[nounDefinition.core];
  const normalizedDefinition = {
    ...nounDefinition,
    morpheme,
    gender: nounDefinition.gender || morpheme.gender || "neut",
    number: nounDefinition.number || "singular",
    determination: nounDefinition.determination || { type: "definite" },
    grammaticalCase: nounDefinition.grammaticalCase || "nominative"
  };

  return normalizedDefinition;
}

function makeNounPhrase(lang, nounDefinition) {
  const {
    morpheme,
    gender,
    number,
    determination,
    grammaticalCase
  } = nounDefinition;
  const determiner = lang.determiners[determination.type][gender][number];
  const declinedNoun = lang.declension[grammaticalCase][gender][number].replace(
    "{noun}",
    morpheme.morpheme
  );
  const { preadjectives, postadjectives } = makeAdjectives(
    lang,
    nounDefinition
  );

  return lang.nounPhraseFormation
    .replace("{determiner}", determiner)
    .replace("{preadjectives}", preadjectives)
    .replace("{postadjectives}", postadjectives)
    .replace("{noun}", declinedNoun);
}

function makeAdjectives(lang, nounDefinition) {
  if (!nounDefinition.adjectives) {
    return { preadjectives: "", postadjectives: "" };
  }
  const { gender, number, grammaticalCase } = nounDefinition;

  function makeAdjectivesByPosition(adjectives) {
    if (!adjectives || adjectives.length === 0) {
      return "";
    }

    return adjectives.reduce((prev, curr) => {
      const adjective = nounDefinition.adjectives[curr];

      if (!adjective) {
        return prev;
      }
      const morpheme = lang.morphemeDictionary[adjective];
      const declinedAdjective = lang.declension[grammaticalCase][gender][
        number
      ].replace("{noun}", morpheme.morpheme);

      return `${prev} ${declinedAdjective}`;
    }, "");
  }
  const preadjectives = makeAdjectivesByPosition(lang.adjectives.preadjectives);
  const postadjectives = makeAdjectivesByPosition(
    lang.adjectives.postadjectives
  );

  return { preadjectives, postadjectives };
}

function makeVerbPhrase(lang, sentenceDefinition) {
  const { number, person } = sentenceDefinition.subject;
  const { verb, tense } = sentenceDefinition.verb;
  const morpheme = lang.morphemeDictionary[verb];
  const conjugatedVerb = lang.conjugation[tense][person][number].replace(
    "{verb}",
    morpheme.morpheme
  );

  return lang.verbPhraseFormation
    .replace("{preadverbs}", "")
    .replace("{postadverbs}", "")
    .replace("{verb}", conjugatedVerb);
}
