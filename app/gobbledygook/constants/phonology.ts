import consonants from "./consonants";
import vowels, { nasalVowels } from "./vowels";

export const phonemes = {
  consonants,
  vowels,
  nasalVowels,
};

export const phonemicDistribution = {
  consonants: {
    min: 7,
    mean: 18,
    stdev: 8,
    max: 40,
  },
  vowels: {
    min: 5,
    mean: 14,
    stdev: 6,
    max: 20,
  },
};

export const clusterConsonantPositions = {
  start: ["s"],
  final: ["l", "r", "j"],
  mid: ["b", "t", "k", "d", "p", "v", "f", "g", "θ"],
};
