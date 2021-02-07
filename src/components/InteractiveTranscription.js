import { transliterate } from "../gobbledygook/use-language";

export default function InteractiveTranscription(props) {
  const { sentence, lang } = props;

  return (
    <div class="InteractiveTranscription">
      {sentence.map((pos) => {
        return <PartOfSpeech pos={pos} lang={lang} />;
      })}
    </div>
  );
}
function PartOfSpeech(props) {
  const { pos, lang } = props;

  if (pos.content) {
    return (
      <span class="posGroup">
        {pos.content.map((subpos) => {
          return <PartOfSpeech pos={subpos} lang={lang} />;
        })}
      </span>
    );
  }

  return <span class="pos" title={pos.meaning}>{transliterate(lang, pos.form)}</span>;
}
