import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { generateLanguage } from "./gobbledygook/generate-language/index";
import { transliterate, makeSentence } from "./gobbledygook/use-language";

import { fetchAudio } from "./api";
import { english, french } from "./gobbledygook/languages/index";
import sentences from "./gobbledygook/sample-sentences/index";
import { setSeed } from "./gobbledygook/util/random";

function App() {
  const [seed, setCurrentSeed] = useState("globe");
  const [activePage, setactivePage] = useState("phraseBook");
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
      .then((res) => setAudio(res))
      .then(() => {
        audioPlayer.current.load();
        audioPlayer.current.play();
      });
  }

  return (
    <div className="App">
      <h1>gobbledygook</h1>
      <nav>
        <button
          className={`${(activePage === "phraseBook" && "active") || ""}`}
          onClick={() => setactivePage("phraseBook")}
        >
          Phrase book
        </button>
        <button
          className={`${(activePage === "procGenConLang" && "active") || ""}`}
          onClick={() => setactivePage("procGenConLang")}
        >
          ProcGenConLang
        </button>
      </nav>
      <section
        className={`phraseBook ${
          (activePage === "phraseBook" && "open") || ""
        }`}
      >
        <h2>Generated phrase book</h2>
        {sentences.map((sentence) => {
          const frenchSentence = makeSentence(french, sentence);
          const englishSentence = makeSentence(english, sentence);

          return (
            <div key={sentence.transcript} className="sentenceBlock">
              <p>
                {transliterate(french, frenchSentence)}{" "}
                <button
                  onClick={() => handlePlayAudio(frenchSentence, "Celine")}
                >
                  :V
                </button>
                <br />
                {transliterate(english, englishSentence)}{" "}
                <button
                  onClick={() => handlePlayAudio(englishSentence, "Brian")}
                >
                  :V
                </button>
              </p>
              <PhraseDefinitionBlock sentence={sentence} />
            </div>
          );
        })}
      </section>
      <section
        className={`procGenConLang ${
          (activePage === "procGenConLang" && "open") || ""
        }`}
      >
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
        <ul>
          {Object.entries(lang.morphemeDictionary).map(([meaning, word]) => {
            const translit = transliterate(lang, word);
            return (
              <li key={meaning}>
                {meaning}: {translit} ( /{word}/ ){" "}
                <button onClick={() => handlePlayAudio(word)}>:V</button>
              </li>
            );
          })}
        </ul>
        <audio ref={audioPlayer}>
          {audio && <source src={audio} type="audio/mpeg"></source>}
        </audio>
      </section>
    </div>
  );
}
function PhraseDefinitionBlock({ sentence }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button title="show phrase definition" onClick={() => setOpen(!open)}>
        +
      </button>
      <pre className={`codeBlock ${(open && "open") || ""}`}>
        {JSON.stringify(sentence, null, 2)}
      </pre>
    </div>
  );
}

export default App;
