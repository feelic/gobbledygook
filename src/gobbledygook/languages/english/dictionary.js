const dictionary = {
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
          default: { default: "{morpheme}" },
          thirdPerson: { singular: "{morpheme}z", plural: "{morpheme}" },
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
          default: { default: "{morpheme}v" },
          thirdPerson: { singular: "{morpheme}z", plural: "{morpheme}v" },
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
          default: { default: "{morpheme}" },
          thirdPerson: { singular: "{morpheme}əz", plural: "{morpheme}" },
        },
        past: {
          default: { default: "lost" },
        },
      },
    },
  },
  find: {
    morpheme: "faind",
    irregular: {
      default: {
        default: {
          default: { default: "{morpheme}" },
          thirdPerson: { singular: "{morpheme}z", plural: "{morpheme}" },
        },
        past: {
          default: { default: "fawnd" },
        },
      },
    },
  },
  take: {
    morpheme: "teɪk",
    irregular: {
      default: {
        default: {
          default: { default: "{morpheme}" },
          thirdPerson: { singular: "{morpheme}s", plural: "{morpheme}" },
        },
        past: { default: { default: "tuk" } },
      },
    },
  },
  group: { morpheme: "grup" },
  place: { morpheme: "pleɪs" },
  hide: {
    morpheme: "haɪd",
    irregular: {
      default: {
        default: {
          default: { default: "{morpheme}" },
          thirdPerson: { singular: "{morpheme}z", plural: "{morpheme}" },
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
  tall: { morpheme: "tɔl", comparative: 'tɔlər', superlative:'tɔləst' },
  cave: { morpheme: "keɪv" },
  // const quantifiers = {
  all: { morpheme: "ɔl" },
  some: { morpheme: "sʌm" },
  many: { morpheme: "mɛnɪ" },
  few: { morpheme: "fju" },
  no: { morpheme: "no" },
  // };
  // const relativePronouns {
  that: {morpheme: "ðat"},
  // };
  // const distributive = {
  each: { morpheme: "itʃ" },
  any: { morpheme: "ɛnɪ" },
  // };
  // const interrogative = {
  what: { morpheme: "hwat" },
  which: { morpheme: "hwitʃ" },
  when: { morpheme: "hwɛn" },
  where: { morpheme: "hwɛr" },
  who: { morpheme: "hu" },
  why: { morpheme: "hwaɪ" },
  how: { morpheme: "how" },
  // };
  // const prepositions = {
  to: { morpheme: "tu" },
  up: { morpheme: "up" },
  down: { morpheme: "down" },
  above: { morpheme: "above" },
  upon: { morpheme: "upon" },
  under: { morpheme: "under" },
  around: { morpheme: "around" },
  through: { morpheme: "through" },
  infront: { morpheme: "infront" },
  behind: { morpheme: "behind" },
  in: { morpheme: "in" },
  out: { morpheme: "out" },
  into: { morpheme: "into" },
  outof: { morpheme: "outof" },
  against: { morpheme: "against" },
  beside: { morpheme: "beside" },
  from: { morpheme: "from" },
  toward: { morpheme: "toward" },
  with: { morpheme: "with" },
  by: { morpheme: "by" },
  for: { morpheme: "for" },
  // };
};

export default dictionary;
