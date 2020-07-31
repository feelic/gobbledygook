import { makeNounPhrase } from "./make-noun-phrase";
import getConjunction from "./get-conjunction";

export function makeObject (context, object) {
  if (object.entities && object.entities.length) {
    return object.entities.map(entity => {
      const singleEntity = {...object, ...entity};

      delete singleEntity.entities;
      return makeObject(context, singleEntity)
    }).join(getConjunction(context, 'and'));
  }

  if (object.type=== 'adjective') {
    return makeAdjectivePredicate(context, object);
  }

  return makeNounPhrase(context, object)
}

function makeAdjectivePredicate (context) {

}
