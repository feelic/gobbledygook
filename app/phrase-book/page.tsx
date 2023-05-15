"use client";

import { makeSentence } from "../gobbledygook/use-language";
import { english, danish, french } from "../gobbledygook/languages/index";

import sentences from "../gobbledygook/sample-sentences/index";

import PhraseActionsBlock from "../components/PhraseActionsBlock";
import InteractiveTranscription from "../components/InteractiveTranscription";

import styles from "../styles.module.scss";

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
