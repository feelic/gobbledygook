import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { SentenceTree } from "../gobbledygook/interfaces";
import { getIPATranscript } from "../gobbledygook/use-language";
import AudioButton from "./AudioButton";
import styles from "../styles.module.scss";

type PhraseActionsBlockProps = {
  sentence: SentenceTree;
  voice: string;
};
export default function PhraseActionsBlock({
  sentence,
  voice,
}: PhraseActionsBlockProps) {
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
