import { useState } from "react";
import { transliterate, makeSentence } from "../gobbledygook/use-language";
import { english, french } from "../gobbledygook/languages/index";
import sentences from "../gobbledygook/sample-sentences/index";
import AudioButton from './AudioButton';

export default function PhraseBook() {
  return (
    <section className={`phraseBook`}>
      <h2>Generated phrase book</h2>
      {sentences.map((sentence) => {
        const frenchSentence = makeSentence(french, sentence);
        const englishSentence = makeSentence(english, sentence);

        return (
          <div key={sentence.transcript} className="sentenceBlock">
            <p>
              {transliterate(french, frenchSentence)}{" "}
              <AudioButton sentence={frenchSentence} voice="Celine" />
              <br />
              {transliterate(english, englishSentence)}{" "}

              <AudioButton sentence={englishSentence} voice="Brian" />
            </p>
            <PhraseDefinitionBlock sentence={sentence} />
          </div>
        );
      })}
    </section>
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
