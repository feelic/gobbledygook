import { makeSentence, getIPATranscript } from "../gobbledygook/use-language";
import InteractiveTranscription from "./InteractiveTranscription";
import AudioButton from "./AudioButton";
import React from "react";
import { Language, SentenceDefinition } from "../gobbledygook/interfaces";

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
    <article>
      <InteractiveTranscription lang={lang} sentence={formedSentence} />
      <p>
        <AudioButton
          sentence={getIPATranscript(formedSentence)}
          voice={voice}
        />
        <br />
        <span className="transcript">{sentence.transcript}</span>
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
