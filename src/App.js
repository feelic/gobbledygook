import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { generateLanguage } from "./gobbledygook/generate-language/index";
import { transliterate, makeSentence } from "./gobbledygook/use-language";

import { fetchAudio } from "./api";
import { english, french } from "./gobbledygook/languages/index";
import sentences from "./gobbledygook/sample-sentences/index";
const { setSeed } = require("./gobbledygook/util/random");

function App() {
  const [seed, setCurrentSeed] = useState("globe");
  const [lang, setLang] = useState();
  const [audio, setAudio] = useState();
  const audioPlayer = useRef();

  useEffect(() => {
    setSeed(seed);
    setLang(generateLanguage());
  }, [seed]);

  if (!lang) {
    return <div>no language</div>;
  }

  function handlePlayAudio(phrase, voice) {
    fetchAudio(phrase, voice)
      .then(res => setAudio(res))
      .then(() => {
        audioPlayer.current.load();
        audioPlayer.current.play();
      });
  }

  return (
    <div className="App">
      <div className="speechBlock">
        <label htmlFor="seed">Seed:</label>{" "}
        <input
          id="seed"
          type="text"
          value={seed}
          onChange={e => {
            setCurrentSeed(e.target.value);
          }}
        />
        <div>
          {sentences.map(sentence => {
            const frenchSentence = makeSentence(french, sentence);
            const englishSentence = makeSentence(english, sentence);

            return (
              <div>
                <p>
                  {transliterate(french, frenchSentence)}{" "}
                  <button
                    onClick={() => handlePlayAudio(frenchSentence, "Celine")}
                  >
                    :V
                  </button>
                </p>
                <p>
                  {transliterate(english, englishSentence)}{" "}
                  <button
                    onClick={() => handlePlayAudio(englishSentence, "Brian")}
                  >
                    :V
                  </button>
                </p>
                <p></p>
              </div>
            );
          })}
        </div>
        <ul>
          {Object.entries(lang.morphemeDictionary).map(([meaning, word]) => {
            const translit = transliterate(lang, word);
            return (
              <li>
                {meaning}: {translit} ( /{word}/ ){" "}
                <button onClick={() => handlePlayAudio(word)}>:V</button>
              </li>
            );
          })}
        </ul>
        <audio ref={audioPlayer}>
          {audio && <source src={audio} type="audio/mpeg"></source>}
        </audio>
      </div>
      <div className="block">
        <pre>{JSON.stringify(lang, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
