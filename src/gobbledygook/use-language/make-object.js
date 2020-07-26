import { makeNounPhrase } from "./make-noun-phrase";
import { getNounInfo } from "./get-noun-info";

export function makeObject (context) {
  const {sentence} = context;

  if (sentence.object.type=== 'adjective') {
    return 'adjective'
  }

  const object = getNounInfo(context, sentence.object);

  return makeNounPhrase(context, object)
}
