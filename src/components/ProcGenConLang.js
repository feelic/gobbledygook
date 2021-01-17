import { useEffect, useState } from "react";
import { generateLanguage } from "../gobbledygook/generate-language/index";
import { transliterate, makeSentence } from "../gobbledygook/use-language";
import sentences from "../gobbledygook/sample-sentences/index";
import AudioButton from "./AudioButton";
import { VOICES, DEFAULT_VOICE } from "../constants/voices";

import { setSeed } from "../gobbledygook/util/random";

export default function ProcGenConLang() {
  const [seed, setCurrentSeed] = useState("globe");
  const [lang, setLang] = useState();
  useEffect(() => {
    setSeed(seed);
    setLang(generateLanguage());
  }, [seed]);
  const [voice, setVoice] = useState(DEFAULT_VOICE);

  if (!lang) {
    return <div>no language</div>;
  }

  return (
    <section className={`procGenConLang`}>
      <h2>ProcGenConLang: {transliterate(lang, lang.name)} language</h2>
      <label htmlFor="seed">Seed:</label>{" "}
      <input
        id="seed"
        type="text"
        value={seed}
        onChange={(e) => {
          setCurrentSeed(e.target.value);
        }}
      />
    <select onChange={(e) => {
          setVoice(e.target.value)
        }} value={voice}>
        {Object.keys(VOICES).map((v) => (
          <option value={v} key={v}>{VOICES[v]}</option>
        ))}
      </select>
      <h3>{transliterate(lang, lang.name)} phrase book</h3>
      {sentences.map((sentence) => {
        return <Sentence key={sentence.transcript} lang={lang} sentence={sentence} voice={voice} />
      })}
      <h3>{transliterate(lang, lang.name)} dictionary</h3>
      <ul>
        {Object.entries(lang.morphemeDictionary).map(([meaning, word]) => {
          const translit = transliterate(lang, word);

          return (
            <li key={meaning}>
              {meaning}: {translit} ( /{word}/ ) <AudioButton sentence={word} voice={voice} />
            </li>
          );
        })}
      </ul>
      {sentences.map((sentence) => {
        return <Sentence key={sentence.transcript} lang={lang} sentence={sentence} voice={voice} />
      })}
    </section>
  );
}

function Sentence ({lang, sentence, voice}) {
  try {
    const formedSentence = makeSentence(lang, sentence);

    return (
      <div className="sentenceBlock">
        <p>
          {transliterate(lang, formedSentence)}{" "}
          <AudioButton sentence={formedSentence} voice={voice} />
        </p>
      </div>
    );
  } catch {
    return <p>Couldn't say <span className="originalSentence">"{sentence.transcript}"</span> in {transliterate(lang, lang.name)}</p>
  }


}
