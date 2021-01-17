import { useEffect, useState } from "react";
import { generateLanguage } from "../gobbledygook/generate-language/index";
import { transliterate } from "../gobbledygook/use-language";
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
          console.log(e.target.value)
          setVoice(e.target.value)
        }} value={voice}>
        {Object.keys(VOICES).map((v) => (
          <option value={v} key={v}>{VOICES[v]}</option>
        ))}
      </select>
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
    </section>
  );
}
