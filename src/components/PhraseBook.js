import { useState } from "react";
import {
  transliterate,
  makeSentence,
  getIPATranscript,
} from "../gobbledygook/use-language";
import { english, french } from "../gobbledygook/languages/index";
import sentences from "../gobbledygook/sample-sentences/index";
import AudioButton from "./AudioButton";

export default function PhraseBook() {
  return (
    <section className={`phraseBook`}>
      <h2>Generated phrase book</h2>
      {sentences.map((sentence) => {
        const frenchSentence = makeSentence(french, sentence);
        const frenchSentenceIPA = getIPATranscript(frenchSentence);
        const englishSentence = makeSentence(english, sentence);
        const englishSentenceIPA = getIPATranscript(englishSentence);

        return (
          <div key={sentence.transcript} className="sentenceBlock">
            <p>
              {transliterate(french, frenchSentenceIPA)}
              <AudioButton sentence={frenchSentenceIPA} voice="Celine" />
            </p>
            <PhraseDefinitionBlock sentence={frenchSentence} />
            <p>
              {transliterate(english, englishSentenceIPA)}

              <AudioButton
                sentence={englishSentenceIPA}
                voice="Brian"
              />
            </p>
            <PhraseDefinitionBlock sentence={englishSentence} />
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
