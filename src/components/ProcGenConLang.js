import { useEffect, useState, Fragment } from "react";
import { generateLanguage } from "../gobbledygook/generate-language/index";
import {
  transliterate,
  makeNumber,
} from "../gobbledygook/use-language";
import sentences from "../gobbledygook/sample-sentences/index";
import AudioButton from "./AudioButton";
import { VOICES, DEFAULT_VOICE } from "../constants/voices";
import InteractiveTranscription from "./InteractiveTranscription";
import ConLangDescription from "./ConLangDescription";
import SentenceMaker from "./SentenceMaker/index";
import Sentence from "./Sentence";           
import styles from "./ProcGenConLang.module.scss";

import { setSeed } from "../gobbledygook/util/random";

export default function ProcGenConLang() {
  const [seed, setCurrentSeed] = useState("");
  const [lang, setLang] = useState();
  useEffect(() => {
    setSeed(seed);
    setLang(generateLanguage());
  }, [seed]);
  const [voice, setVoice] = useState(DEFAULT_VOICE);

  return (
    <section className={`procGenConLang`}>
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
      {!lang || (!seed && <p>Input a seed to generate a language</p>) || (
        <LanguageDescription lang={lang} voice={voice} />
      )}
    </section>
  );
}
function LanguageDescription({ lang, voice }) {
  return (
    <Fragment>
      <h2>ProcGenConLang: {transliterate(lang, lang.name)} language</h2>
      <ul className={styles.toc}>
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
        A short description of the {transliterate(lang, lang.name)} language
      </h3>
      <ConLangDescription lang={lang} />
      <h3>Make your own sentences</h3>
      <SentenceMaker lang={lang} voice={voice} />
      <h3 id="phrase-book">{transliterate(lang, lang.name)} phrase book</h3>
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
      <h3 id="dictionary">{transliterate(lang, lang.name)} dictionary</h3>
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
      <h3 id="raw">{transliterate(lang, lang.name)} raw definition</h3>
      <pre className="codeBlock open">{JSON.stringify(lang, null, 2)}</pre>
    </Fragment>
  );
}

function CountToTen({ lang, voice }) {
  const sentence = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => {
    return makeNumber({ lang }, number);
  });

  return (
    <div className="sentenceBlock">
      <InteractiveTranscription lang={lang} sentence={sentence} />
      <p>
        <AudioButton sentence={sentence} voice={voice} />
        <br />
        <span className="transcript">0 1 2 3 4 5 6 7 8 9 10</span>
      </p>
    </div>
  );
}

