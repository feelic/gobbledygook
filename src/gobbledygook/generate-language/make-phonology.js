import {
  gaussian,
  nRandomFromArray,
  randomFromArray,
  random,
  shuffleArray,
} from "../util/random";
import { bindNumber } from "../util/index";

import {
  phonemes,
  phonemicDistribution,
  clusterConsonantPositions,
} from "../constants/phonology";

const makeClusters = {
  vowels: makeDiphtongs,
  consonants: makeConsonantClusters,
};

// Ideas for an improved phonology generation
// const startConsonants = [];
// const finalConsonants = [];

/*
 * Returns an array of all phonemes allowed in a language
 */
export function makePhonemeSet(type = "consonants") {
  const distrib = phonemicDistribution[type];

  const standard = gaussian(distrib.mean, distrib.stdev);
  const number = bindNumber(standard(), distrib.min, distrib.max);
  const phonemeSet = getPhonemes(type);
  const selectedPhonemes = nRandomFromArray(Object.keys(phonemeSet), number);
  const clustersExist = Boolean(Math.round(random()));

  const clusters =
    (clustersExist && makeClusters[type](selectedPhonemes)) || [];

  const phonemesWithFrequency = assignFreqAndTranslit(
    shuffleArray(selectedPhonemes),
    type
  );
  const clustersWithFrequency = assignFreqAndTranslit(
    shuffleArray(clusters),
    type,
    5
  );

  return { ...phonemesWithFrequency, ...clustersWithFrequency };
}
function getPhonemes(type) {
  const includeNasalVowels = Boolean(random() < 0.18);

  if (type === "vowels" && includeNasalVowels) {
    return { ...phonemes[type], ...phonemes["nasalVowels"] };
  }
  return phonemes[type];
}

function assignFreqAndTranslit(selectedPhonemes, type, high = 50) {
  const reduction = Math.ceil(high / selectedPhonemes.length);
  const allPhonemes = {
    ...phonemes.consonants,
    ...phonemes.vowels,
    ...phonemes.nasalVowels,
  };

  return selectedPhonemes.reduce((res, phoneme, idx) => {
    const freq = Math.ceil(-reduction * idx) + high;

    const translit =
      (allPhonemes[phoneme] && allPhonemes[phoneme].translit) ||
      phoneme
        .split("")
        .map((char) => {
          return allPhonemes[char].translit;
        })
        .join("");
    return {
      ...res,
      [phoneme]: {
        ...selectedPhonemes[phoneme],
        weight: (freq > 0 && freq) || 1,
        translit,
      },
    };
  }, {});
}

function makeDiphtongs() {
  return [];
}

function makeConsonantClusters(languageConsonants) {
  const startConsonants = clusterConsonantPositions.start.filter((consonant) =>
    languageConsonants.includes(consonant)
  );
  const midConsonants = clusterConsonantPositions.mid.filter((consonant) =>
    languageConsonants.includes(consonant)
  );
  const finalConsonants = clusterConsonantPositions.final.filter((consonant) =>
    languageConsonants.includes(consonant)
  );

  if (!startConsonants.length && !finalConsonants.length) {
    return [];
  }

  const advancedClustersExist = Boolean(Math.round(random()));
  const nbClusters = languageConsonants.length;
  const clusters = [];

  for (let i = 0; i < nbClusters; i += 1) {
    const hasStart = startConsonants.length && Boolean(Math.round(random()));
    const hasEnd =
      finalConsonants &&
      (!hasStart ||
        (advancedClustersExist && Boolean(Math.round(random() * 0.9))));
    const mid = randomFromArray(midConsonants);
    const start = (hasStart && randomFromArray(startConsonants)) || "";
    const end = (hasEnd && randomFromArray(finalConsonants)) || "";
    const cluster = start + mid + end;
    clusters.push(cluster);
  }
  return clusters;
}
