import { useState } from "react";
import { makeSentence, getIPATranscript } from "../gobbledygook/use-language";
import { english, danish, french } from "../gobbledygook/languages/index";
import sentences from "../gobbledygook/sample-sentences/index";
import AudioButton from "./AudioButton";
import InteractiveTranscription from "./InteractiveTranscription";

export default function PhraseBook() {
  return (
    <section className={`phraseBook`}>
      <h2>Generated phrase book</h2>
      {sentences.map((sentence) => {
        const englishSentence = makeSentence(english, sentence);
        const danishSentence = makeSentence(danish, sentence);
        const frenchSentence = makeSentence(french, sentence);

        return (
          <div key={sentence.transcript} className="sentenceBlock">
            <InteractiveTranscription lang={french} sentence={frenchSentence} />

            <PhraseActionsBlock sentence={frenchSentence} voice="Celine" />

            <InteractiveTranscription
              lang={english}
              sentence={englishSentence}
            />

            <PhraseActionsBlock sentence={englishSentence} voice="Brian" />

              <InteractiveTranscription
                lang={danish}
                sentence={danishSentence}
              />

            <PhraseActionsBlock sentence={danishSentence} voice="Mads" />
          </div>
        );
      })}
    </section>
  );
}

function PhraseActionsBlock({ sentence, voice }) {
  const [open, setOpen] = useState(false);
  const sentenceIPA = getIPATranscript(sentence);
  return (
    <div className="PhraseActionsBlock">
      <div className="PhraseActionsButtons">
        <AudioButton sentence={sentenceIPA} voice={voice} />
        <button title="show phrase definition" onClick={() => setOpen(!open)}>
          +
        </button>
      </div>
      <pre className={`codeBlock ${(open && "open") || ""}`}>
        {JSON.stringify(sentence, null, 2)}
      </pre>
    </div>
  );
}
