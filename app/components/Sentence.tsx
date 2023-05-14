import { makeSentence, getIPATranscript } from "../gobbledygook/use-language";
import InteractiveTranscription from "./InteractiveTranscription";
import AudioButton from "./AudioButton";
import React from "react";
import { Language, SentenceDefinition } from "../gobbledygook/interfaces";
import styles from "../styles.module.scss";

export default function Sentence({
  lang,
  sentence,
  voice,
}: {
  lang: Language;
  sentence: SentenceDefinition;
  voice: string;
}) {
  // try {
  const formedSentence = makeSentence(lang, sentence);

  return (
    <article className={styles.phraseBlock}>
      <InteractiveTranscription lang={lang} sentence={formedSentence} />
      <p>
        <AudioButton
          sentence={getIPATranscript(formedSentence)}
          voice={voice}
        />
        <small>{sentence.transcript}</small>
      </p>
    </article>
  );
  // } catch (error: any) {
  //   return (
  //     <Fragment>
  //       <p>
  //         Could not say{" "}
  //         <span className="originalSentence">
  //           &quot;{sentence.transcript}&quot;
  //         </span>{" "}
  //         in {transliterate(lang, lang.name)}
  //         <br />
  //         <span className="errorDetail">
  //           error {error.stack.split("\n").slice(1, 2)}
  //         </span>
  //       </p>
  //     </Fragment>
  //   );
  // }
}
