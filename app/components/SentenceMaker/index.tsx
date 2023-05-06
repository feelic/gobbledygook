import { useState } from "react";
import {
  makeSentence,
  getIPATranscript,
} from "../../gobbledygook/use-language";
import { english, french } from "../../gobbledygook/languages/index";
import sentences from "../../gobbledygook/sample-sentences/index";
import AudioButton from "../AudioButton";
import InteractiveTranscription from "../InteractiveTranscription";
import Sentence from "../Sentence";
import { Language, SentenceDefinition } from "@/app/gobbledygook/interfaces";

export default function SentenceMaker({
  lang,
  voice,
}: {
  lang: Language;
  voice: string;
}) {
  return null;
  // const languages = [lang, english, french];
  // const sentence: SentenceDefinition = {
  //   transcript: "sample sentence",
  //   sentence: {
  //     subject: {},
  //     verb: { verb: "do", tense: "general" },
  //   },
  //   entities: {},
  // };

  // return (
  //   <div>
  //     {languages.map((language) => {
  //       return (
  //         <Sentence
  //           key={sentence.transcript + language.name}
  //           lang={language}
  //           sentence={sentence}
  //           voice={voice}
  //         />
  //       );
  //     })}
  //   </div>
  // );
}
