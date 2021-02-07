import { transliterate } from "../gobbledygook/use-language";

export default function InteractiveTranscription(props) {
  const { sentence, lang } = props;

  return (
    <div className="InteractiveTranscription">
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
      <span className="posGroup">
        {pos.content.map((subpos, idx) => {
          return <PartOfSpeech key={idx} pos={subpos} lang={lang} />;
        })}
      </span>
    );
  }

  return (
    <span className="pos" title={pos.meaning}>
      {transliterate(lang, pos.form)}
    </span>
  );
}
