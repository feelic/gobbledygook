import { generateLanguage } from "./app/gobbledygook/generate-language";
import { setSeed } from "./app/gobbledygook/util/random";
import sentences from "./app/gobbledygook/sample-sentences";
import { makeSentence } from "./app/gobbledygook/use-language";

const seeds = [
  "speak",
  "give",
  "take",
  "make",
  "go",
  "come",
  "bring",
  "read",
  "walk",
  "run",
  "learn",
  "love",
  "lose",
  "find",
  "hide",
  "smell",
  "sing",
  "father",
  "mother",
  "brother",
  "sister",
  "group",
  "dog",
  "cat",
  "cow",
  "horse",
  "chicken",
  "donkey",
  "carrot",
  "white",
  "gray",
  "black",
  "orange",
  "pink",
  "red",
  "yellow",
  "blue",
  "green",
  "purple",
  "small",
  "round",
  "stupid",
  "ugly",
  "bad",
  "dumb",
  "ready",
  "be",
  "have",
  "do",
  "beach",
  "place",
  "castle",
  "tower",
  "cave",
  "treasure",
  "grass",
  "car",
  "pancake",
  "very",
  "really",
  "so",
  "here",
];

test();

export function test() {
  const generateErrors: Array<string> = [];
  const sentenceErrors: Array<string> = [];
  const sentencePass: Array<string> = [];
  seeds.forEach((seed) => {
    try {
      setSeed(seed);
      const lang = generateLanguage();
      sentences.forEach((sentence) => {
        try {
          setSeed(seed);
          makeSentence(lang, sentence);
          sentencePass.push(`${seed}: "${sentence.transcript}"`);
        } catch {
          sentenceErrors.push(`${seed}: "${sentence.transcript}"`);
        }
      });
    } catch {
      generateErrors.push(seed);
    }
  });

  if (generateErrors.length) {
    console.log(generateErrors);
    console.log();
    console.error("generateLanguage()", generateErrors.length, "errors");
  }

  if (sentenceErrors.length) {
    console.log(sentenceErrors);
    console.log();
  }
  console.log(
    "makeSentence()",
    sentenceErrors.length,
    "errors,",
    sentencePass.length,
    "passed"
  );
}
