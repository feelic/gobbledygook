import { transliterate } from "../gobbledygook/use-language";
import "tippy.js/dist/tippy.css";
import styles from "./Inscription.module.scss";

export default function Inscription(props) {
  const { sentence, lang, notes, updateNote } = props;

  return (
    <div className={styles.Inscription}>
      {sentence.map((pos, idx) => {
        return (
          <PartOfSpeech
            key={idx}
            pos={pos}
            lang={lang}
            notes={notes}
            updateNote={updateNote}
          />
        );
      })}
    </div>
  );
}
export function PartOfSpeech(props) {
  const { pos, lang, notes, updateNote } = props;
  const note = notes[pos.meaning] || {translation: ''};

  if (!pos) {
    return null;
  }

  if (pos.content) {
    return (
      <>
        {pos.content.map((subpos, idx) => {
          return (
            <PartOfSpeech
              key={idx}
              pos={subpos}
              lang={lang}
              notes={notes}
              updateNote={updateNote}
            />
          );
        })}
      </>
    );
  }

  return (
    <div className={styles.pos}>
      <span>{transliterate(lang, pos.form)} </span>
      <input
        type="text"
        value={note.translation}
        onChange={(e) => {
          updateNote(pos.meaning, { ...note, translation: e.target.value });
        }}
      />
    </div>
  );
}
