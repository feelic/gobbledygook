const dictionary = {
  horse: { morpheme: "ʃɘval", gender: "masc" },
  carrot: { morpheme: "kaʁot", gender: "fem" },
  love: { morpheme: "ɛm" },
  gray: {
    morpheme: "gʁi",
    declensionGroup: "zEnding",
  },
  orange: { morpheme: "oʁɑ̃ʒ" },
  pink: { morpheme: "ʁoz" },
  small: { morpheme: "pɘti", declensionGroup: "tEnding" },
  give: { morpheme: "don" },
  go: {
    morpheme: "al",
    irregular: {
      default: {
        present: {
          firstPerson: { singular: "vɛ", plural: "{morpheme}ɔ̃" },
          secondPerson: { singular: "va", plural: "{morpheme}e" },
          thirdPerson: { singular: "va", plural: "vɔ̃" },
        },
      },
    },
  },
  do: {
    morpheme: "fɛ",
    irregular: {
      default: {
        present: {
          firstPerson: { singular: "fɛ", plural: "fɔ̃" },
          secondPerson: { singular: "fɛ", plural: "fɛt" },
          thirdPerson: { singular: "fɛ", plural: "fɔ̃" },
        },
      },
    },
  },
  have: {
    morpheme: "a",
    irregular: {
      default: {
        default: {
          firstPerson: { singular: "ai", plural: "{morpheme}vɔ̃" },
          secondPerson: { singular: "{morpheme}", plural: "{morpheme}ve" },
          thirdPerson: { singular: "a", plural: "zɔ̃" },
        },
      },
    },
  },
  beach: { morpheme: "plaʒ", gender: "fem" },
  chicken: { morpheme: "pulɛ", gender: "masc" },
  dog: { morpheme: "ʃiɛ̃", gender: "masc" },
  pancake: { morpheme: "pɑ̃kɛk" },
  lose: {
    morpheme: "peʁ",
    irregular: {
      default: {
        past: {
          firstPerson: { singular: "ɛ {morpheme}dy", plural: "avɔ̃ {morpheme}dy" },
          secondPerson: { singular: "a {morpheme}dy", plural: "ave {morpheme}dy" },
          thirdPerson: { singular: "a {morpheme}dy", plural: "zɔ̃ {morpheme}dy" },
        },
      },
    },
  },
  find: {
    morpheme: "tʁuv",
  },
  take: {
    morpheme: "pʁɑ̃",
    irregular: {
      default: {
        default: {
          default: { default: "{morpheme}" },
        },
        past: { default: { default: "a pʁi" } },
      },
    },
  },
  sing: {
    morpheme: "ʃɑ̃t",
    irregular: {
      default: {
        default: {
          default: { default: "{morpheme}" },
        },
        past: { default: { default: "a ʃɑ̃te" } },
      },
    },
  },
  group: { morpheme: "gʁup", gender: "masc" },
  place: { morpheme: "plas", gender: "fem" },
  hide: { morpheme: "kaʃ" },
  treasure: { morpheme: "tʁezoʁ", gender: "masc" },
  castle: { morpheme: "ʃato", gender: "masc" },
  tower: { morpheme: "tuʁ", gender: "fem" },
  make: {
    morpheme: "fɛ"
  },
  be: {
    morpheme: "ɛ",
    irregular: {
      default: {
        default: {
          firstPerson: { singular: "syi", plural: "som" },
          secondPerson: { singular: "ɛ", plural: "ɛt" },
          thirdPerson: { singular: "ɛ", plural: "sɔ̃" },
        },
        past: {
          default: { default: "hɪd" },
        },
      },
    },
  },
  car: { morpheme: "vwatyʁ", gender: "fem" },
  round: { morpheme: "ʁɔ̃", declensionGroup: "dEnding" },
  ugly: { morpheme: "mɔʃ" },
  dumb: { morpheme: "kɔ̃" },
  ready: { morpheme: "pʁɛ" },
  stupid: { morpheme: "stypid" },
  smell: { morpheme: "sɑ̃" },
  bad: { morpheme: "mɔvɛ" },
  grass: { morpheme: "ɛʁb" },
  donkey: { morpheme: "an" },
  and: { morpheme: "e" },
  here: { morpheme: "isi" },
  very: { morpheme: "tʁɛ" },
  really: { morpheme: "vʁɛmɑ̃" },
  so: { morpheme: "osi" },
  tall: { morpheme: 'gʁɑ̃' },
  cave: { morpheme: 'gʁot', gender: "fem" },
  // const quantifiers = {
  all: { morpheme: "tu" },
  some: { morpheme: "kelk" },
  many: { morpheme: "boku" },
  few: { morpheme: "pɘ" },
  no: { morpheme: "okɛ̃" },
  // };
  // const relativePronouns {
  that: { morpheme: "kɘ" },
  // };
  // const distributive = {
  each: { morpheme: "ʃak" },
  any: { morpheme: "tu" },
  // };
  // const interrogative = {
  what: { morpheme: "kɘ" },
  which: { morpheme: "kɛl" },
  when: { morpheme: "kɑ̃" },
  where: { morpheme: "u" },
  who: { morpheme: "ki" },
  why: { morpheme: "puʁkwa" },
  how: { morpheme: "komɑ̃" },
  // };
  // const prepositions = {
  than: { morpheme: "kɘ" },
  to: { morpheme: "a" },
  up: { morpheme: "o dɘsy" },
  down: { morpheme: "ɑ̃ dɘsu" },
  above: { morpheme: "o dɘsy" },
  upon: { morpheme: "syʁ" },
  under: { morpheme: "su" },
  around: { morpheme: "otuʁ" },
  through: { morpheme: "a tʁavɛʁ" },
  infront: { morpheme: "dɘvɑ̃" },
  behind: { morpheme: "dɛʁiɛʁ" },
  in: { morpheme: "dɑ̃" },
  out: { morpheme: "ɑ̃ deoʁ" },
  into: { morpheme: "dɑ̃" },
  outof: { morpheme: "oʁ" },
  against: { morpheme: "kɔ̃tʁ" },
  beside: { morpheme: "a kote" },
  from: { morpheme: "dɘ" },
  toward: { morpheme: "vɛʁ" },
  with: { morpheme: "avɛk" },
  by: { morpheme: "paʁ" },
  for: { morpheme: "puʁ" },
  // };
};

export default dictionary;
