export default {
  horse: { morpheme: "hors" },
  carrot: { morpheme: "kærət" },
  love: { morpheme: "lov" },
  gray: { morpheme: "greɪ" },
  orange: { morpheme: "orɪndʒ" },
  small: { morpheme: "smɔl" },
  give: {
    morpheme: "giv",
    irregular: {
      default: {
        default: {
          default: { default: "{verb}" },
          thirdPerson: { singular: "{verb}z", plural: "{verb}" },
        },
        past: { default: { default: "geɪv" } },
      },
    },
  },
  go: { morpheme: "go" },
  have: {
    morpheme: "ha",
    irregular: {
      default: {
        default: {
          default: { default: "{verb}v" },
          thirdPerson: { singular: "{verb}z", plural: "{verb}v" },
        },
      },
    },
  },
  beach: { morpheme: "bitʃ" },
  chicken: { morpheme: "tʃɪkɪn" },
  dog: { morpheme: "dɒɡ" },
  lose: {
    morpheme: "luz",
    irregular: {
      default: {
        default: {
          default: { default: "{verb}" },
          thirdPerson: { singular: "{verb}əz", plural: "{verb}" },
        },
        past: {
          default: { default: "lost" },
        },
      },
    },
  },
  take: { morpheme: "teɪk" },
  place: { morpheme: "pleɪs" },
  hide: {
    morpheme: "haɪd",
    irregular: {
      default: {
        default: {
          default: { default: "{verb}" },
          thirdPerson: { singular: "{verb}z", plural: "{verb}" },
        },
        past: {
          default: { default: "hɪd" },
        },
      },
    },
  },
  treasure: { morpheme: "trɛʒə" },
  castle: { morpheme: "kɑsəl" },
  tower: { morpheme: "taʊər" },
  be: {
    morpheme: "bi",
    irregular: {
      default: {
        default: {
          firstPerson: { singular: "am", plural: "ar" },
          secondPerson: { singular: "ar", plural: "ar" },
          thirdPerson: { singular: "ɪz", plural: "ar" },
        },
        past: {
          default: { default: "hɪd" },
        },
      },
    },
  },
  round: { morpheme: "raʊnd" },
  ugly: { morpheme: "əɡli" },
  stupid: { morpheme: "stjupɪd" },
  smell: { morpheme: "smɛl" },
  bad: { morpheme: "bæd" },
  grass: { morpheme: "grɑs" },
  donkey: { morpheme: "dɑŋki" },
  and: { morpheme: "ænd" },
  very: { morpheme: "vɛri" },
  really: { morpheme: "rɪli" },
  tall: {morpheme: 'tɔl'},
};
