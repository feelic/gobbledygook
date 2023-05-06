import { Morpheme } from "../../interfaces";

const dictionary: Record<string, Morpheme> = {
  horse: { morpheme: "hest" },
  carrot: { morpheme: "guləʀoðˀ" },
  love: { morpheme: "elsɡə" },
  gray: { morpheme: "gʁo" },
  orange: { morpheme: "orandʒ" },
  pink: { morpheme: "lysəʁœðˀ" },
  small: { morpheme: "lilə" },
  give: {
    morpheme: "giw",
    irregular: {
      default: "giwɐ",
      past: "gæ",
    },
  },
  go: { morpheme: "go" },
  do: {
    morpheme: "du",
  },
  have: {
    morpheme: "ɦɑ",
  },
  beach: { morpheme: "sdʀan" },
  chicken: { morpheme: "kyleŋ" },
  dog: { morpheme: "hun" },
  pancake: { morpheme: "pandekej" },
  lose: {
    morpheme: "",
  },
  find: {
    morpheme: "",
  },
  take: {
    morpheme: "",
  },
  sing: { morpheme: "" },
  group: { morpheme: "" },
  place: { morpheme: "plæs" },
  hide: {
    morpheme: "",
  },
  treasure: { morpheme: "" },
  castle: { morpheme: "" },
  tower: { morpheme: "" },
  make: { morpheme: "lɛw" },
  be: {
    morpheme: "eʀ",
    irregular: {
      default: "eʀ",
      past: "vaʀ",
    },
  },
  car: { morpheme: "bil" },
  round: { morpheme: "" },
  ugly: { morpheme: "gʀim" },
  dumb: { morpheme: "dum" },
  ready: { morpheme: "klaʀ" },
  stupid: { morpheme: "stupið" },
  smell: { morpheme: "" },
  bad: { morpheme: "" },
  grass: { morpheme: "" },
  donkey: { morpheme: "" },
  and: { morpheme: "o" },
  here: { morpheme: "" },
  very: { morpheme: "maj" },
  so: { morpheme: "" },
  really: { morpheme: "" },
  tall: { morpheme: "", comparative: "", superlative: "" },
  cave: { morpheme: "" },
  // const quantifiers = {
  all: { morpheme: "" },
  some: { morpheme: "" },
  many: { morpheme: "" },
  few: { morpheme: "" },
  no: { morpheme: "" },
  // };
  // const relativePronouns {
  that: { morpheme: "" },
  // };
  // const distributive = {
  each: { morpheme: "" },
  any: { morpheme: "" },
  // };
  // const interrogative = {
  what: { morpheme: "" },
  which: { morpheme: "" },
  when: { morpheme: "" },
  where: { morpheme: "" },
  who: { morpheme: "" },
  why: { morpheme: "" },
  how: { morpheme: "" },
  // };
  // const prepositions = {
  than: { morpheme: "" },
  to: { morpheme: "" },
  up: { morpheme: "" },
  down: { morpheme: "" },
  above: { morpheme: "" },
  upon: { morpheme: "" },
  under: { morpheme: "" },
  around: { morpheme: "" },
  through: { morpheme: "" },
  infront: { morpheme: "" },
  behind: { morpheme: "" },
  in: { morpheme: "" },
  out: { morpheme: "" },
  into: { morpheme: "" },
  outof: { morpheme: "" },
  against: { morpheme: "" },
  beside: { morpheme: "" },
  from: { morpheme: "" },
  toward: { morpheme: "" },
  with: { morpheme: "" },
  by: { morpheme: "" },
  for: { morpheme: "" },
  // };
};

export default dictionary;
