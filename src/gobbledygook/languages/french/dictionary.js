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
  ugly: {morpheme: 'mɔʃ'},
  stupid: {morpheme: 'stypid'},
  smell: {morpheme: 'sɑ̃'},
  bad: {morpheme: 'mɔvɛ'},
};
