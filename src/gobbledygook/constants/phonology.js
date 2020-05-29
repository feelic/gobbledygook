import consonants from "../constants/consonants";
import vowels from "../constants/vowels";

export const phonemes = {
  consonants,
  vowels
};

export const phonemicDistribution = {
  consonants: {
    min: 5,
    mean: 18,
    stdev: 8,
    max: 40
  },
  vowels: {
    min: 3,
    mean: 14,
    stdev: 6,
    max: 20
  }
};

export const clusterConsonantPositions = {
  start: ["s"],
  final: ["l", "r", "j"],
  mid: ["b", "t", "k", "d", "p", "v", "f", "g", "θ"]
};
