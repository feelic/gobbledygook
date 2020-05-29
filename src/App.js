import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { generateLanguage } from "./gobbledygook/generate-language/index";
import { makeMorpheme, transliterate } from "./gobbledygook/use-language";

import { fetchAudio } from "./api";

const { setSeed } = require("./gobbledygook/util/random");

function App(props) {
  const { seed = "coucou" } = props;
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

  const wordLengths = [2, 3, 4, 1, 2];

  return (
    <div className="App">
      {wordLengths.map(len => {
        const word = makeMorpheme(lang, len);
        const translit = transliterate(lang, word);

        return (
          <p>
            {word} {translit}{" "}
            <button
              onClick={() => {
                fetchAudio(word.join(""))
                  .then(res => setAudio(res))
                  .then(() => {
                    audioPlayer.current.load();
                    audioPlayer.current.play();
                  });
              }}
            >
              :O
            </button>
          </p>
        );
      })}
      <audio ref={audioPlayer}>
        {audio && <source src={audio} type="audio/mpeg"></source>}
      </audio>
    </div>
  );
}

export default App;
