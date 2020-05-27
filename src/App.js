import React, { useEffect, useState } from "react";
import "./App.css";
import { generateLanguage } from "./gobbledygook/generate-language/index";
import { makeMorpheme, transliterate } from "./gobbledygook/use-language";
const { setSeed } = require("./gobbledygook/util/random");

function App(props) {
  const { seed = "coucou" } = props;
  const [lang, setLang] = useState();

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
            {word} {translit}
          </p>
        );
      })}
    </div>
  );
}

export default App;
