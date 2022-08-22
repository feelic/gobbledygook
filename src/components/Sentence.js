import { Fragment } from "react";
import {
    transliterate,
    makeSentence,
    getIPATranscript,
  } from "../gobbledygook/use-language";
import InteractiveTranscription from "./InteractiveTranscription";
import AudioButton from "./AudioButton";

export default function Sentence({ lang, sentence, voice }) {
    try {
      const formedSentence = makeSentence(lang, sentence);
  
      return (
        <div className="sentenceBlock">
          <InteractiveTranscription lang={lang} sentence={formedSentence} />
          <p>
            <AudioButton
              sentence={getIPATranscript(formedSentence)}
              voice={voice}
            />
            <br />
            <span className="transcript">{sentence.transcript}</span>
          </p>
        </div>
      );
    } catch (error) {
      return (
        <Fragment>
          <p>
            Couldn't say{" "}
            <span className="originalSentence">"{sentence.transcript}"</span> in{" "}
            {transliterate(lang, lang.name)}
            <br />
            <span className="errorDetail">
              error {error.stack.split("\n").slice(1, 2)}
            </span>
          </p>
        </Fragment>
      );
    }
  }
  