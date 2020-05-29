import { random, randomFromArray, randomWithCoef } from "../util/random";
import {
  morphotypes,
  wordOrders,
  interrogationModes
} from "../constants/morphology";
import { makeMorpheme } from "./make-morpheme";

const makeAdvancedMorphology = {
  isolating: makeIsolatingMorphology
};

export default function makeMorphology(phonology) {
  const morphotype = randomFromArray(morphotypes);
  const wordOrder = randomWithCoef(wordOrders);
  const interrogationMode = randomFromArray(interrogationModes);
  const advancedMorphology =
    (makeAdvancedMorphology[morphotype] &&
      makeAdvancedMorphology[morphotype](phonology)) ||
    {};

  return {
    wordOrder,
    morphotype,
    interrogationMode,
    ...advancedMorphology
  };
}

export function makeIsolatingMorphology(phonology) {
  const caseMarkerPosition = randomFromArray(["before", "after"]);

  const caseMarkers = {
    ablative: makeMorpheme(phonology, Math.round(random()) + 1),
    genitive: makeMorpheme(phonology, Math.round(random()) + 1),
    vocative: makeMorpheme(phonology, Math.round(random()) + 1),
    locative: makeMorpheme(phonology, Math.round(random()) + 1),
    instrumental: makeMorpheme(phonology, Math.round(random()) + 1)
  };

  function createNounPhraseTemplate(caseMarker) {
    if (!caseMarker) {
      return "{noun}";
    }
    if (caseMarkerPosition === "before") {
      return `${caseMarker} {noun}`;
    }

    return `{noun} ${caseMarker}`;
  }

  return {
    caseMarkers,
    caseMarkerPosition,
    nounPhraseFormation: {
      nominative: createNounPhraseTemplate(caseMarkers.nominative),
      accusative: createNounPhraseTemplate(caseMarkers.accusative),
      dative: createNounPhraseTemplate(caseMarkers.dative),
      ablative: createNounPhraseTemplate(caseMarkers.ablative),
      genitive: createNounPhraseTemplate(caseMarkers.genitive),
      vocative: createNounPhraseTemplate(caseMarkers.vocative),
      locative: createNounPhraseTemplate(caseMarkers.locative),
      instrumental: createNounPhraseTemplate(caseMarkers.instrumental)
    }
  };
}
