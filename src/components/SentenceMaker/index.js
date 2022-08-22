import { useState } from "react";
import { makeSentence, getIPATranscript } from "../../gobbledygook/use-language";
import { english, french } from "../../gobbledygook/languages/index";
import sentences from "../../gobbledygook/sample-sentences/index";
import AudioButton from "../AudioButton";
import InteractiveTranscription from "../InteractiveTranscription";
import Sentence from "../Sentence";           


export default function SentenceMaker({ lang, voice }) {

    const languages = [lang, english, french];
    const sentence = {
        "transcript": "sample sentence"
    };
    return <div>
      {languages.map((language) => {
        return (
          <Sentence
            key={sentence.transcript}
            lang={language}
            sentence={sentence}
            voice={voice}
          />
        );
      })}
    </div>
}