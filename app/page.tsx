"use client";

import { useEffect, useState, Fragment } from "react";
import { generateLanguage } from "./gobbledygook/generate-language/index";
import {
  transliterate,
  makeNumber,
  getIPATranscript,
} from "./gobbledygook/use-language";
import { Language } from "./gobbledygook/interfaces";
import sentences from "./gobbledygook/sample-sentences/index";
import { setSeed } from "./gobbledygook/util/random";

import AudioButton from "./components/AudioButton";
import InteractiveTranscription from "./components/InteractiveTranscription";
import ConLangDescription from "./components/ConLangDescription";
import SentenceMaker from "./components/SentenceMaker";
import Sentence from "./components/Sentence";

import { VOICES, DEFAULT_VOICE } from "./constants/voices";

import styles from "./styles.module.scss";

export default function Home() {
  const [seed, setCurrentSeed] = useState("");
  const [lang, setLang] = useState<Language | null>(null);
  useEffect(() => {
    setSeed(seed);
    setLang(generateLanguage());
  }, [seed]);
  const [voice, setVoice] = useState(DEFAULT_VOICE);

  console.log(lang);
  return (
    <section>
      <p>
        Welcome to gobbledygook: a constructed language procedural generator.
        <br />
        You can generate an imaginary language by changing the seed, choose a
        voice and listen to it !
      </p>
      <p>
        <label htmlFor="seed">Seed:</label>{" "}
        <input
          id="seed"
          type="text"
          value={seed}
          onChange={(e) => {
            setCurrentSeed(e.target.value);
          }}
        />
        <select
          onChange={(e) => {
            setVoice(e.target.value);
          }}
          value={voice}
        >
          {Object.keys(VOICES).map((v) => (
            <option value={v} key={v}>
              {VOICES[v]}
            </option>
          ))}
        </select>
      </p>
      <hr />
      {!lang || (!seed && <i>Input a seed to generate a language</i>) || (
        <LanguageDescription lang={lang} voice={voice} />
      )}
    </section>
  );
}
type LanguageDescriptionProps = {
  lang: Language;
  voice: string;
};
function LanguageDescription({ lang, voice }: LanguageDescriptionProps) {
  const rawLangName = transliterate(lang, lang.name);
  const langName = rawLangName.slice(0, 1).toUpperCase() + rawLangName.slice(1);
  return (
    <Fragment>
      <h2 id="title">{langName} language</h2>
      <ul>
        <li>
          <a href="#description">description</a>
        </li>
        <li>
          <a href="#phrase-book">phrase book</a>
        </li>
        <li>
          <a href="#dictionary">dictionary</a>
        </li>
        <li>
          <a href="#raw">raw definition file</a>
        </li>
      </ul>
      <h3 id="description">
        A short description of the {langName} language <a href="#title">#</a>
      </h3>
      <ConLangDescription lang={lang} />
      <h3>
        Make your own sentences <a href="#title">#</a>
      </h3>
      <SentenceMaker lang={lang} voice={voice} />
      <h3 id="phrase-book">
        {langName} phrase book <a href="#title">#</a>
      </h3>
      {sentences.map((sentence) => {
        return (
          <Sentence
            key={sentence.transcript}
            lang={lang}
            sentence={sentence}
            voice={voice}
          />
        );
      })}
      <CountToTen lang={lang} voice={voice} />
      <h3 id="dictionary">
        {langName} dictionary <a href="#title">#</a>
      </h3>
      <ul>
        {Object.entries(lang.morphemeDictionary).map(([meaning, word]) => {
          const translit = transliterate(lang, word.morpheme);

          return (
            <li key={meaning}>
              {meaning}: {translit} ( /{word.morpheme}/ ){" "}
              <AudioButton sentence={word.morpheme} voice={voice} />
            </li>
          );
        })}
      </ul>
      <h3 id="raw">
        {langName} raw definition <a href="#title">#</a>
      </h3>
      <pre className="codeBlock open">{JSON.stringify(lang, null, 2)}</pre>
    </Fragment>
  );
}

function CountToTen({ lang, voice }: LanguageDescriptionProps) {
  const sentence = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => {
    return makeNumber({ lang }, number);
  });

  const sentenceIPA = getIPATranscript(sentence);

  return (
    <article className={styles.phraseBlock}>
      <InteractiveTranscription lang={lang} sentence={sentence} />
      <p>
        <AudioButton sentence={sentenceIPA} voice={voice} />
        <span className="transcript">0 1 2 3 4 5 6 7 8 9 10</span>
      </p>
    </article>
  );
}
