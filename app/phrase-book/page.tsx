"use client";

import { useState } from "react";
import { makeSentence, getIPATranscript } from "../gobbledygook/use-language";
import { english, danish, french } from "../gobbledygook/languages/index";
import sentences from "../gobbledygook/sample-sentences/index";
import AudioButton from "../components/AudioButton";
import InteractiveTranscription from "../components/InteractiveTranscription";
import React from "react";
import { SentenceTree } from "../gobbledygook/interfaces";
import styles from "../styles.module.scss";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PhraseBook() {
  return (
    <section className={`phraseBook`}>
      <h2>Generated phrase book</h2>
      {sentences.map((sentence) => {
        const englishSentence = makeSentence(english, sentence);
        const danishSentence = makeSentence(danish, sentence);
        const frenchSentence = makeSentence(french, sentence);

        return (
          <article key={sentence.transcript} className={styles.phraseBlock}>
            <InteractiveTranscription lang={french} sentence={frenchSentence} />

            <PhraseActionsBlock sentence={frenchSentence} voice="Celine" />

            <InteractiveTranscription
              lang={english}
              sentence={englishSentence}
            />

            <PhraseActionsBlock sentence={englishSentence} voice="Brian" />

            <InteractiveTranscription lang={danish} sentence={danishSentence} />

            <PhraseActionsBlock sentence={danishSentence} voice="Mads" />
          </article>
        );
      })}
    </section>
  );
}

type PhraseActionsBlockProps = {
  sentence: SentenceTree;
  voice: string;
};
function PhraseActionsBlock({ sentence, voice }: PhraseActionsBlockProps) {
  const [open, setOpen] = useState(false);
  const sentenceIPA = getIPATranscript(sentence);
  return (
    <div>
      <div>
        <AudioButton sentence={sentenceIPA} voice={voice} />

        <button
          className={styles.controls}
          title="show phrase definition"
          onClick={() => setOpen(!open)}
        >
          {(open && <FontAwesomeIcon icon={faAngleDown} />) || (
            <FontAwesomeIcon icon={faAngleRight} />
          )}
        </button>
      </div>
      <pre className={`${styles.codeBlock} ${(open && styles.open) || ""}`}>
        {JSON.stringify(sentence, null, 2)}
      </pre>
    </div>
  );
}
