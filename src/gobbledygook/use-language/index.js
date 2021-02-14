export * from "./transliterate";
export * from "./make-sentence";
export * from "./make-number";
export * from "./get-required-form";

export function getIPATranscript(sentence) {
  return sentence
    .map((pos) => {
      if (pos.content && Array.isArray(pos.content)) {
        return getIPATranscript(pos.content);
      }

      if (!pos.pos || pos.form === undefined) {
        throw new Error(`cant find info in ${JSON.stringify(pos)}
          ${JSON.stringify(sentence, null, 2)}`)
      }
      return pos.form;
    })
    .flat()
    .join(" ");
}
