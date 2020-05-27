const {
  gaussian,
  nRandomFromArray,
  randomFromArray,
  random,
  shuffleArray,
} = require('../util/random');
const { bindNumber } = require('../util/index');
const consonants = require('../constants/consonants');
const vowels = require('../constants/vowels');

const phonemes = {
  consonants,
  vowels,
};

const phonemicDistribution = {
  consonants: {
    min: 5,
    mean: 18,
    stdev: 8,
    max: 40,
  },
  vowels: {
    min: 3,
    mean: 14,
    stdev: 6,
    max: 20,
  },
};
const makeClusters = {
  vowels: makeDiphtongs,
  consonants: makeConsonantClusters,
};

/*
 * Returns an array of all phonemes allowed in a language
 */
module.exports.makePhonemeSet = function makePhonemeSet(type = 'consonants') {
  const distrib = phonemicDistribution[type];
  const standard = gaussian(distrib.mean, distrib.stdev);
  const number = bindNumber(standard(), distrib.min, distrib.max);
  const selectedPhonemes = nRandomFromArray(
    Object.keys(phonemes[type]),
    number,
  );
  const clustersExist = Boolean(Math.round(random()));

  const clusters = (clustersExist && makeClusters[type](selectedPhonemes)) || [];

  const phonemesWithFrequency = assignFreqAndTranslit(
    shuffleArray(selectedPhonemes),
    type,
  );
  const clustersWithFrequency = assignFreqAndTranslit(
    shuffleArray(clusters),
    type,
    5,
  );

  return { ...phonemesWithFrequency, ...clustersWithFrequency };
};

function assignFreqAndTranslit(selectedPhonemes, type, high = 50) {
  const reduction = Math.ceil(high / selectedPhonemes.length);
  return selectedPhonemes.reduce((res, phoneme, idx) => {
    const freq = Math.ceil(-reduction * idx) + high;
    const translit = (phonemes[type][phoneme] && phonemes[type][phoneme].translit)
      || phoneme
        .split('')
        .map((char) => phonemes[type][char].translit)
        .join('');
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
  const startConsonants = ['s'].filter((consonant) => languageConsonants.includes(consonant));
  const midConsonants = [
    'b',
    't',
    'k',
    'd',
    'p',
    'v',
    'f',
    'g',
    'θ',
  ].filter((consonant) => languageConsonants.includes(consonant));
  const finalConsonants = ['l', 'r', 'j'].filter((consonant) => languageConsonants.includes(consonant));

  if (!startConsonants.length && !finalConsonants.length) {
    return [];
  }

  const advancedClustersExist = Boolean(Math.round(random()));
  const nbClusters = languageConsonants.length;
  const clusters = [];

  for (let i = 0; i < nbClusters; i += 1) {
    const hasStart = startConsonants.length && Boolean(Math.round(random()));
    const hasEnd = finalConsonants
      && (!hasStart
        || (advancedClustersExist && Boolean(Math.round(random() * 0.9))));
    const mid = randomFromArray(midConsonants);
    const start = (hasStart && randomFromArray(startConsonants)) || '';
    const end = (hasEnd && randomFromArray(finalConsonants)) || '';
    const cluster = start + mid + end;
    clusters.push(cluster);
  }
  return clusters;
}
