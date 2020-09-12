export default {
  horse: { morpheme: "ʃɘval", gender: "masc" },
  carrot: { morpheme: "kaʁot", gender: "fem" },
  love: { morpheme: "ɛm" },
  gray: {
    morpheme: "gʁi",
    declensionGroup: "zEnding",
  },
  orange: { morpheme: "oʁɑ̃ʒ" },
  small: { morpheme: "pɘti", declensionGroup: "tEnding" },
  give: { morpheme: "don" },
  go: {
    morpheme: "al",
    irregular: {
      default: {
        present: {
          firstPerson: { singular: "vɛ", plural: "{verb}ɔ̃" },
          secondPerson: { singular: "va", plural: "{verb}e" },
          thirdPerson: { singular: "va", plural: "vɔ̃" },
        },
      },
    },
  },
  have: {
    morpheme: "a",
    irregular: {
      default: {
        present: {
          firstPerson: { singular: "ai", plural: "{verb}vɔ̃" },
          secondPerson: { singular: "{verb}", plural: "{verb}ve" },
          thirdPerson: { singular: "a", plural: "zɔ̃" },
        },
      },
    },
  },
  beach: { morpheme: "plaʒ", gender: "fem" },
  chicken: { morpheme: "pulɛ", gender: "masc" },
  dog: { morpheme: "ʃiɛ̃" },
  lose: {
    morpheme: "per",
    irregular: {
      default: {
        past: {
          firstPerson: { singular: "ɛ {verb}dy", plural: "avɔ̃ {verb}dy" },
          secondPerson: { singular: "a {verb}dy", plural: "ave {verb}dy" },
          thirdPerson: { singular: "a {verb}dy", plural: "zɔ̃ {verb}dy" },
        },
      },
    },
  },
  take: { morpheme: "prɑ̃" },
  place: { morpheme: "plas", gender: "fem" },
  hide: { morpheme: "kaʃ" },
  treasure: { morpheme: "tʁezoʁ", gender: "masc" },
  castle: { morpheme: "ʃato", gender: "masc" },
  tower: { morpheme: "tuʁ", gender: "fem" },
  be: { morpheme: "ɛ" },
  round: { morpheme: "ʁɔ̃", declensionGroup: "dEnding" },
  ugly: { morpheme: "mɔʃ" },
  stupid: { morpheme: "stypid" },
  smell: { morpheme: "sɑ̃" },
  bad: { morpheme: "mɔvɛ" },
  grass: { morpheme: "ɛʁb" },
  donkey: { morpheme: "an" },
  and: { morpheme: "e" },
  very: { morpheme: "tʁɛ" },
  really: { morpheme: "vʁɛmɑ̃" },
  tall: {morpheme: 'gʁɑ̃'},
  // const quantifiers = {
  all: {morpheme:"tu"},
  some: {morpheme:"kelk"},
  many: {morpheme:"boku"},
  few: {morpheme:"pɘ"},
  no: {morpheme:"okɛ̃"},
  // };
  // const distributive = {
  each: {morpheme:"ʃak"},
  any: {morpheme:"tu"},
  // };
  // const interrogative = {
  what: {morpheme:"kwa"},
  which: {morpheme:"kɛl"},
  when: {morpheme:"kɑ̃"},
  where: {morpheme:"u"},
  who: {morpheme:"ki"},
  why: {morpheme:"puʁkwa"},
  how: {morpheme:"komɑ̃"},
  // };
  // const prepositions = {
  to: {morpheme:"a"},
  up: {morpheme:"o desy"},
  down: {morpheme:"ɑ̃ desu"},
  above: {morpheme:"o desy"},
  upon: {morpheme:"syʁ"},
  under: {morpheme:"su"},
  around: {morpheme:"otuʁ"},
  through: {morpheme:"a tʁavɛʁ"},
  infront: {morpheme:"dɘvɑ̃"},
  behind: {morpheme:"dɛʁiɛʁ"},
  in: {morpheme:"dɑ̃"},
  out: {morpheme:"ɑ̃ deoʁ"},
  into: {morpheme:"dɑ̃"},
  outof: {morpheme:"oʁ"},
  against: {morpheme:"kɔ̃tʁ"},
  beside: {morpheme:"a kote"},
  from: {morpheme:"dɘ"},
  toward: {morpheme:"vɛʁ"},
  with: {morpheme:"avɛk"},
  by: {morpheme:"paʁ"},
  for: {morpheme:"puʁ"},
  // };
};
