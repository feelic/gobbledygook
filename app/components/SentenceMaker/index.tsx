import { useState } from "react";
import { english, french } from "../../gobbledygook/languages/index";
import Sentence from "../Sentence";
import {
  DeterminationDefinition,
  EntityDefinition,
  Language,
  SentenceDefinition,
  SentencePartDefinition,
  SentenceStructureDefinition,
  VerbDefinition,
} from "@/app/gobbledygook/interfaces";
import {
  GrammaticalCase,
  Gender,
  GrammaticalNumber,
  Tense,
  DeterminationType,
  enumValues,
} from "@/app/gobbledygook/constants/grammar";

import styles from "./index.module.scss";

export default function SentenceMaker({
  lang,
  voice,
}: {
  lang: Language;
  voice: string;
}) {
  const languages = [lang, english, french];
  const [sentence, setSentence] = useState<SentenceDefinition>({
    transcript: "sample sentence",
    sentence: {
      subject: { id: "Bob", grammaticalCase: GrammaticalCase.Nominative },
      verb: { verb: "sing", tense: Tense.General },
    },
    entities: {
      Bob: {
        core: "Bob",
        number: GrammaticalNumber.Singular,
        gender: Gender.Masculine,
        determination: { type: DeterminationType.ProperNoun },
      },
    },
  });

  function updateEntity(key: string, entity: EntityDefinition) {
    const newSentence: SentenceDefinition = {
      ...sentence,
      entities: {
        ...sentence.entities,
        [key]: entity,
      },
    };

    setSentence(newSentence);
  }

  function updateSentenceStructure<K extends keyof SentenceStructureDefinition>(
    prop: K,
    value: SentenceStructureDefinition[K]
  ) {
    const newSentence: SentenceDefinition = {
      ...sentence,
      sentence: {
        ...sentence.sentence,
        [prop]: value,
      },
    };

    setSentence(newSentence);
  }

  return (
    <div className="grid">
      <SentenceForm
        sentenceDefinition={sentence}
        updateEntity={updateEntity}
        updateSentence={updateSentenceStructure}
      />
      <div>
        {languages.map((language) => {
          return (
            <Sentence
              key={sentence.transcript + language.name}
              lang={language}
              sentence={sentence}
              voice={voice}
            />
          );
        })}
      </div>
    </div>
  );
}

interface SentenceFormProps {
  sentenceDefinition: SentenceDefinition;
  updateEntity: (key: string, entity: EntityDefinition) => void;
  updateSentence: <K extends keyof SentenceStructureDefinition>(
    prop: K,
    value: SentenceStructureDefinition[K]
  ) => void;
}

function SentenceForm({
  sentenceDefinition,
  updateEntity,
  updateSentence,
}: SentenceFormProps) {
  const { entities, transcript, sentence } = sentenceDefinition;
  const [newEntityId, setNewEntityId] = useState("Joe");

  return (
    <div className={styles.sentenceForm}>
      <input type="text" value={transcript} readOnly />

      <h4>Structure</h4>
      <label htmlFor="sentenceType">Sentence type</label>
      <select id="sentenceType" value={sentence.type || "declarative"}>
        <option value="declarative">declarative</option>
        <option value="polarInterrogative">polar interrogative</option>
        <option value="openInterrogative">open interrogative</option>
      </select>

      <SentencePartForm
        role="Subject"
        sentencePart={sentence.subject}
        updateSentencePart={(value) => updateSentence("subject", value)}
        entities={entities}
      />

      <VerbForm
        verb={sentence.verb}
        updateVerb={(value) => updateSentence("verb", value)}
      />

      <SentencePartForm
        role="Object"
        sentencePart={sentence.object}
        updateSentencePart={(value) => updateSentence("object", value)}
        entities={entities}
      />

      <h4>Entities</h4>
      {Object.entries(entities).map(([key, entity]) => {
        return (
          <EntityForm
            key={key}
            id={key}
            entity={entity}
            entities={entities}
            updateEntity={(value) => updateEntity(key, value)}
          />
        );
      })}
      <div className="grid">
        <input type="text" onChange={(e) => setNewEntityId(e.target.value)} />
        <button onClick={() => updateEntity(newEntityId, {})}>
          add entity
        </button>
      </div>
      <code>{JSON.stringify(sentenceDefinition, null, 2)}</code>
    </div>
  );
}

interface EntityFormProps {
  entity: EntityDefinition;
  updateEntity: (entity: EntityDefinition) => void;
  id: string;
  entities: Record<string, EntityDefinition>;
}

function EntityForm({ entity, updateEntity, id, entities }: EntityFormProps) {
  function handleUpdateEntity<K extends keyof EntityDefinition>(
    prop: K,
    value: EntityDefinition[K]
  ) {
    updateEntity({
      ...entity,
      [prop]: value,
    });
  }

  return (
    <article>
      <header>{id}</header>
      <div className="grid">
        <label htmlFor={`core-${id}`}>Core</label>
        <input
          type="text"
          id={`core-${id}`}
          value={entity.core || ""}
          onChange={(e) => handleUpdateEntity("core", e.target.value)}
        />
      </div>
      <div className="grid">
        <label htmlFor={`gender-${id}`}>Gender</label>
        <select
          id={`gender-${id}`}
          value={entity.gender || ""}
          onChange={(e) =>
            handleUpdateEntity("gender", e.target.value as Gender)
          }
        >
          <option value="">none</option>
          {enumValues(Gender).map((gender: string) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>
      <div className="grid">
        <label htmlFor={`number-${id}`}>Number</label>
        <select
          id={`number-${id}`}
          value={entity.number || ""}
          onChange={(e) =>
            handleUpdateEntity("number", e.target.value as GrammaticalNumber)
          }
        >
          <option value="">none</option>
          {enumValues(GrammaticalNumber).map((num: string) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div className="grid">
        <DeterminationForm
          determination={entity.determination}
          entities={entities}
          updateDetermination={(determination) =>
            handleUpdateEntity("determination", determination)
          }
        />
      </div>
      <div className="grid">
        <label htmlFor={`usePronoun-${id}`}>Use pronoun</label>
        <input
          type="checkbox"
          id={`usePronoun-${id}`}
          checked={entity.usePronoun || false}
          onChange={(e) => handleUpdateEntity("usePronoun", e.target.checked)}
        />
      </div>
    </article>
  );
}

interface SentencePartFormProps {
  sentencePart?: SentencePartDefinition;
  updateSentencePart: (value: SentencePartDefinition) => void;
  role: string;
  entities: Record<string, EntityDefinition>;
}

function SentencePartForm({
  sentencePart,
  updateSentencePart,
  role,
  entities,
}: SentencePartFormProps) {
  const currentPart: SentencePartDefinition = sentencePart || {};

  return (
    <article>
      <label htmlFor={`partId${role}`}>{role}</label>
      <select
        id={`partId${role}`}
        value={currentPart.id || ""}
        onChange={(e) => {
          updateSentencePart({
            ...currentPart,
            id: e.target.value || undefined,
          });
        }}
      >
        <option value="">none</option>
        {Object.keys(entities).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <label htmlFor={`grammaticalCase${role}`}>Grammatical Case</label>
      <select
        id={`grammaticalCase${role}`}
        value={currentPart.grammaticalCase || ""}
        onChange={(e) => {
          updateSentencePart({
            ...currentPart,
            grammaticalCase: (e.target.value as GrammaticalCase) || undefined,
          });
        }}
      >
        <option value="">none</option>
        {enumValues(GrammaticalCase).map((grammaticalCase: string) => (
          <option key={grammaticalCase} value={grammaticalCase}>
            {grammaticalCase}
          </option>
        ))}
      </select>
    </article>
  );
}

interface VerbFormProps {
  verb: VerbDefinition;
  updateVerb: (verb: VerbDefinition) => void;
}

function VerbForm({ verb, updateVerb }: VerbFormProps) {
  return (
    <article>
      <label htmlFor="verb">Verb</label>
      <input
        type="text"
        id="verb"
        value={verb.verb}
        onChange={(e) => {
          updateVerb({
            ...verb,
            verb: e.target.value,
          });
        }}
      />
      <label htmlFor="tense">Tense</label>
      <select
        id="tense"
        value={verb.tense}
        onChange={(e) => {
          updateVerb({
            ...verb,
            tense: e.target.value as Tense,
          });
        }}
      >
        {enumValues(Tense).map((tense: string) => (
          <option key={tense} value={tense}>
            {tense}
          </option>
        ))}
      </select>
    </article>
  );
}

interface DeterminationFormProps {
  determination?: DeterminationDefinition;
  updateDetermination: (determination: DeterminationDefinition) => void;
  entities: Record<string, EntityDefinition>;
}

function DeterminationForm({
  determination,
  updateDetermination,
  entities,
}: DeterminationFormProps) {
  const currentDetermination: DeterminationDefinition = determination || {
    type: DeterminationType.Definite,
  };

  return (
    <div>
      <div className="grid">
        <label htmlFor="determinationType">Determination type</label>
        <select
          id="determinationType"
          value={currentDetermination.type}
          onChange={(e) => {
            updateDetermination({
              type: e.target.value as DeterminationType,
            });
          }}
        >
          {enumValues(DeterminationType).map((type: string) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      {currentDetermination.type === "possessive" && (
        <>
          <label htmlFor="possessiveUsePronoun">Use pronoun</label>
          <input
            type="checkbox"
            id="possessiveUsePronoun"
            checked={currentDetermination.usePronoun || false}
            onChange={(e) => {
              updateDetermination({
                ...currentDetermination,
                usePronoun: e.target.checked,
              });
            }}
          />
          <label htmlFor="owner">Owner</label>
          <select
            id="owner"
            value={currentDetermination.owner || ""}
            onChange={(e) => {
              updateDetermination({
                ...currentDetermination,
                owner: e.target.value || undefined,
              });
            }}
          >
            <option value="">none</option>
            {Object.keys(entities).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}
