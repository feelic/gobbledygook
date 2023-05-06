import { transliterate } from "../gobbledygook/use-language";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import styles from "./InteractiveTranscription.module.scss";
import React from "react";
import { Language, PoS, SentenceTree } from "../gobbledygook/interfaces";

import { posCodesLabels } from "../gobbledygook/constants/pos-codes";

export default function InteractiveTranscription({
  sentence,
  lang,
}: {
  sentence: SentenceTree;
  lang: Language;
}) {
  return (
    <div className={styles.InteractiveTranscription}>
      {sentence.map((pos, idx) => {
        return <PartOfSpeech key={idx} pos={pos} lang={lang} />;
      })}
    </div>
  );
}
export function PartOfSpeech({ pos, lang }: { pos: PoS; lang: Language }) {
  if (!pos) {
    return null;
  }

  if (pos.content) {
    return (
      <span className={pos.pos}>
        {pos.content.map((subpos, idx) => {
          return <PartOfSpeech key={idx} pos={subpos} lang={lang} />;
        })}
      </span>
    );
  }

  if (!pos.form) {
    return null;
  }

  return (
    <Tippy content={<DefinitionToolTip pos={pos} />} placement="bottom">
      <span className={styles.pos}>{transliterate(lang, pos.form)} </span>
    </Tippy>
  );
}

function DefinitionToolTip({ pos }: { pos: PoS }) {
  return (
    <div className={styles.DefinitionToolTip}>
      <h3>
        {pos.meaning}, <span>{posCodesLabels[pos.pos]}</span>
      </h3>
      IPA: <span>/{pos.form}/</span>
      {pos.rules && (
        <ul>
          {Object.keys(pos.rules).map((rule) => {
            if (!pos.rules) {
              return;
            }
            return (
              <li key={rule}>
                {rule}: {pos.rules[rule]}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
