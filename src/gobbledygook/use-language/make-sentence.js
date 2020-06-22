export function makeSentence(lang, sentenceDefinition) {
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
    gender: nounDefinition.gender || morpheme.gender || null,
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
  const determiner = getRequiredForm(lang, "determiners", [
    determination.type,
    grammaticalCase,
    gender,
    number
  ]);
  const declinedNoun = getRequiredForm(lang, "declension", [
    "noun",
    grammaticalCase,
    gender,
    number
  ]).replace("{noun}", morpheme.morpheme);
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
      const declinedAdjective = getRequiredForm(
        lang,
        "declension",
        ["adjective", grammaticalCase, gender, number],
        morpheme
      ).replace("{adjective}", morpheme.morpheme);

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
  const conjugatedVerb = getRequiredForm(
    lang,
    "conjugation",
    [tense, person, number],
    morpheme
  ).replace("{verb}", morpheme.morpheme);

  return lang.verbPhraseFormation
    .replace("{preadverbs}", "")
    .replace("{postadverbs}", "")
    .replace("{verb}", conjugatedVerb);
}

function getRequiredForm(lang, rule, parameters, morpheme = {}) {
  if (!lang[rule]) {
    throw new Error(
      `Error: ${lang.name || "language"} doesn't have a rule set for ${rule}`
    );
  }
  const form = parameters.reduce((prev, curr) => {
    let key = curr;

    if (!prev[key] && prev[key] !== "") {
      key = "default";
    }
    if (!prev[key] && prev[key] !== "") {
      debugger;
      throw new Error(
        `Error: couldn't agree ${lang.name ||
          "language"} ${rule} with parameter "${curr}" (${parameters.join(
          ", "
        )})`
      );
    }
    return prev[key];
  }, lang[rule]);

  return form;
}

// function getPhonemeSeparator(lang, form, morpheme) {
//   const morph = morpheme.morpheme;
//   let lastPhonemeOfMorpheme = morph[morph.length - 1];
//   const languagePhonemes = [
//     ...Object.keys(lang.vowels),
//     ...Object.keys(lang.consonants)
//   ];
//
//   if (!languagePhonemes.includes(lastPhonemeOfMorpheme)) {
//     lastPhonemeOfMorpheme = morph[morph.length - 2] + morph[morph.length - 1];
//
//     if (!languagePhonemes.includes(lastPhonemeOfMorpheme)) {
//       throw new Error(
//         `Error: looks like "${lastPhonemeOfMorpheme}" is not a valid ${lang.name ||
//           "language"} phoneme`
//       );
//     }
//   }
//
//   if (Object.values(lang.vowels).includes(lastPhonemeOfMorpheme)) {
//     return lang.phonemeSeparators.consonant;
//   } else {
//     return lang.phonemeSeparators.vowel;
//   }
// }
