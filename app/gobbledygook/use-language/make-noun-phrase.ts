import { getRequiredForm, getDeterminer } from "./get-required-form";
import { makeAdjectives } from "./make-adjectives";
import { makeAdjectiveClause } from "./make-adjective-clause";
import { getNounInfo } from "./get-noun-info";
import { getConjunction, getPreposition } from "./get-invariables";
import {
  Context,
  PoS,
  SentencePartDefinition,
  SentenceTree,
} from "../interfaces";
import { DeclensionType, GrammaticalCase, PhraseElement, Conjunction, PosCode } from "../constants/grammar";

export function makeNounPhrase(
  context: Context,
  nounEntity: SentencePartDefinition
): PoS | null {
  const entities = nounEntity.entities;
  if (entities) {
    const group = entities.reduce((prev: SentenceTree, entity, idx) => {
      const singleEntity = { ...nounEntity, ...entity };

      delete singleEntity.entities;

      const np = makeNounPhrase(context, singleEntity);
      if (!np) {
        return prev;
      }
      if (idx === entities.length - 1) {
        return [...prev, np];
      }
      return [...prev, np, getConjunction(context, Conjunction.And)];
    }, []);
    return { pos: PosCode.Group, content: group };
  }

  const { lang, references = {} } = context;
  const nounDefinition = getNounInfo(context, nounEntity);
  const { morpheme, gender, number, grammaticalCase, person, usePronoun } =
    nounDefinition;
  const { declensionGroup } = morpheme;

  if (usePronoun || (references[nounDefinition.id] && person)) {
    return getRequiredForm(context, "pronouns", {
      person,
      grammaticalCase,
      gender,
      number,
      morpheme,
      id: nounDefinition.id,
    });
  }
  // ADD REFERENCE MARKER TO ENTITY
  references[nounDefinition.id] = true;

  const NP: SentenceTree = [];
  lang.syntax.nounPhraseFormation.forEach((pos) => {
    switch (pos) {
      case PhraseElement.Preposition:
        const pre = getPreposition(context, grammaticalCase);
        pre && NP.push(pre);
        break;
      case PhraseElement.Determiner:
        const det = getDeterminer(context, nounDefinition);
        det && NP.push(det);
        break;
      case PhraseElement.Preadjectives:
      case PhraseElement.Postadjectives:
        const adjectives = makeAdjectives(context, nounDefinition);
        adjectives[pos]?.forEach((adj) => {
          NP.push(adj);
        });
        break;
      case PhraseElement.Noun:
        const N = getRequiredForm(context, "declension", {
          declensionType: DeclensionType.Noun,
          declensionGroup,
          grammaticalCase,
          gender,
          number,
          morpheme,
          id: nounDefinition.id,
        });
        N && NP.push(N);
        break;
      case PhraseElement.Genitive:
        const genForm = makeGenitiveForm(context, nounDefinition);
        genForm && NP.push(genForm);
        break;
      case PhraseElement.AdjectiveClause:
        const AdjCl = makeAdjectiveClause(context, nounDefinition);
        AdjCl && NP.push(AdjCl);
        break;
      default:
        throw new Error(`unrecognized part of sentence ${pos}`);
    }
  });

  return { pos: PosCode.NounPhrase, content: NP };
}

function makeGenitiveForm(
  context: Context,
  { genitive }: SentencePartDefinition
) {
  if (!genitive) {
    return null;
  }
  const nounDefinition = getNounInfo(context, { id: genitive });
  const { morpheme, gender, number } = nounDefinition;
  const { declensionGroup } = morpheme;
  const genitiveForm = getRequiredForm(context, "declension", {
    declensionType: DeclensionType.Noun,
    declensionGroup,
    grammaticalCase: GrammaticalCase.Genitive,
    gender,
    number,
    morpheme,
    id: nounDefinition.id,
  });

  return genitiveForm;
}
