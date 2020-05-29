import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { generateLanguage } from "./gobbledygook/generate-language/index";
import { transliterate } from "./gobbledygook/use-language";

import { fetchAudio } from "./api";

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
        <ul>
          {Object.entries(lang.morphemeDictionary).map(([meaning, word]) => {
            const translit = transliterate(lang, word);
            return (
              <li>
                {meaning}: {translit} ( /{word}/ ){" "}
                <button
                  onClick={() => {
                    fetchAudio(word)
                      .then(res => setAudio(res))
                      .then(() => {
                        audioPlayer.current.load();
                        audioPlayer.current.play();
                      });
                  }}
                >
                  :O
                </button>
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
