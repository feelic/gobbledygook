import { transliterate } from "../gobbledygook/use-language";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './InteractiveTranscription.module.scss';

const posAbbreviations = {
  N: 'noun',
  V: 'verb',
  Adv: 'adverb',
  Adj: 'adjective',
  Pro: 'pronoun',
  Num: 'number',
  Con: 'conjunction',
  Pre: 'preposition'
}
export default function InteractiveTranscription(props) {
  const { sentence, lang } = props;

  return (
    <div className={styles.InteractiveTranscription}>
      {sentence.map((pos, idx) => {
        return <PartOfSpeech key={idx} pos={pos} lang={lang} />;
      })}
    </div>
  );
}
function PartOfSpeech(props) {
  const { pos, lang } = props;

  if (!pos) {
    return null;
  }

  if (pos.content) {
    return (
      <span className={styles.posGroup}>
        {pos.content.map((subpos, idx) => {
          return <PartOfSpeech key={idx} pos={subpos} lang={lang} />;
        })}
      </span>
    );
  }

  return (
    <Tippy content={<DefinitionToolTip pos={pos} />} placement="bottom">
      <span className={styles.pos}>
      {transliterate(lang, pos.form)}{" "}
      </span>
    </Tippy>
  );
}

function DefinitionToolTip (props) {
  const {pos} = props;

  return <div className={styles.DefinitionToolTip}><h3>{pos.meaning}, <span>{posAbbreviations[pos.pos]}</span></h3>
  {pos.rules &&
    <ul>{Object.keys(pos.rules).map(rule => {
      return <li key={rule}>{rule}: {pos.rules[rule]}</li>
    })}</ul>
  }
  </div>
}
