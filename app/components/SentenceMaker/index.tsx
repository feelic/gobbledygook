import { useState } from "react";
import {
  makeSentence,
  getIPATranscript,
} from "../../gobbledygook/use-language";
import { english, french } from "../../gobbledygook/languages/index";
import sentences from "../../gobbledygook/sample-sentences/index";
import Sentence from "../Sentence";
import {
  EntityDefinition,
  Language,
  SentenceDefinition,
  SentenceStructureDefinition,
} from "@/app/gobbledygook/interfaces";

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
      subject: { id: "Bob", grammaticalCase:"nominative" },
      verb: { verb: "sing", tense: "general" },
    },
    entities: {
      Bob: {
        core: "Bob",
        number: "singular",
        gender: "masc",
        determination: { type: "properNoun" },
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
  function updateSentenceStructure(
    prop: keyof SentenceStructureDefinition,
    value: any
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

function SentenceForm({
  sentenceDefinition,
  updateEntity,
  updateSentence,
}: {
  sentenceDefinition: SentenceDefinition;
  updateEntity: Function;
  updateSentence: Function;
}) {
  const { entities, transcript, sentence } = sentenceDefinition;
  const [newEntityId, setNewEntityId] = useState("Joe");

  return (
    <div>
      <input type="text" value={transcript} />

      <h4>Structure</h4>
      {/* export interface SentenceStructureDefinition {
      question?: "who" | "what" | "where" | "why" | "how";
      subject: SentencePartDefinition;
      verb: VerbDefinition;
      object?: SentencePartDefinition;
      adverbialClauses?: Array<SentencePartDefinition>; */}
      <label htmlFor="sentenceType">Sentence type</label>
      <select id="sentenceType" value={sentence.type}>
        <option value="declarative">declarative</option>
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
      {Object.entries(entities).map(
        ([key, entity]: [key: string, entity: EntityDefinition]) => {
          return (
            <EntityForm
              key={key}
              id={key}
              entity={entity}
              entities={entities}
              updateEntity={(value) => updateEntity(key, value)}
            />
          );
        }
      )}
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

function EntityForm({ entity, updateEntity, id, entities }) {
  function handleUpdateEntity(prop: keyof EntityDefinition, value: any) {
    updateEntity({
      ...entity,
      [prop]: value,
    });
  }

  return (
    <article>
      <header>{id}</header>
      <div className="grid">
        <label htmlFor="core">Core</label>
        <input
          type="text"
          id="core"
          value={entity.core}
          onChange={(e) => {
            handleUpdateEntity("core", e.target.value);
          }}
        />
      </div>
      <div className="grid">
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          value={entity.gender}
          onChange={(e) => {
            handleUpdateEntity("gender", e.target.value);
          }}
        >
          <option value="masc">masc</option>
          <option value="fem">fem</option>
          <option value="neut">neut</option>
        </select>
      </div>
      <div className="grid">
        <label htmlFor="number">Number</label>
        <select
          id="number"
          value={entity.gender}
          onChange={(e) => {
            handleUpdateEntity("number", e.target.value);
          }}
        >
          <option value="singular">singular</option>
          <option value="plural">plural</option>
        </select>
      </div>
      <div className="grid">
        <DeterminationForm
          determination={entity.determination}
          entities={entities}
          updateDetermination={(determination) => {
            handleUpdateEntity("determination", determination);
          }}
        />
      </div>
      <div className="grid">
        <label htmlFor="usePronoun">Use pronoun</label>
        <input
          type="checkbox"
          id="usePronoun"
          onChange={(e) => {
            handleUpdateEntity("usePronoun", e.target.value);
          }}
        />
      </div>
    </article>
  );
}

function SentencePartForm({
  sentencePart = {},
  updateSentencePart,
  role,
  entities,
}) {
const grammaticalCases= ["nominative", "accusative", "benefactive", "locative", "inessive", "lative", "dative", "instrumental", "genitive"]
  return (
    <article>
      <label htmlFor={`partId${role}`}>{role}</label>
      <select
        id={`partId${role}`}
        value={sentencePart.id}
        onChange={(e) => {
          updateSentencePart({
            ...sentencePart,
            id: e.target.value,
          });
        }}
      >
        <option>none</option>
        {Object.keys(entities).map((key) => {
          return (
            <option key={key} value={key}>
              {key}
            </option>
          );
        })}
      </select>
      <label htmlFor={`grammaticalCase${role}`}>Grammatical Case</label>
      <select
        id={`grammaticalCase${role}`}
        value={sentencePart.grammaticalCase}
        onChange={(e) => {
          updateSentencePart({
            ...sentencePart,
            grammaticalCase: e.target.value,
          });
        }}
      >
        <option>none</option>
        {grammaticalCases.map((grammaticalCase) => {
          return (
            <option key={grammaticalCase} value={grammaticalCase}>
              {grammaticalCase}
            </option>
          );
        })}
      </select>
    </article>
  );
}

function VerbForm({ verb, updateVerb }) {
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
            tense: e.target.value,
          });
        }}
      >
        <option value="general">general</option>
      </select>
    </article>
  );
}

function DeterminationForm({ determination = {}, updateDetermination, entities }) {
  return (
    <div>
      <div className="grid">
        <label htmlFor="determinationType">Determination type</label>
        <select
          id="determinationType"
          value={determination.type}
          onChange={(e) => {
            updateDetermination({
              type: e.target.value,
            });
          }}
        >
          <option value="properNoun">Proper Noun</option>
          <option value="indefinite">Indefinite</option>
          <option value="definite">Definite</option>
          <option value="possessive">Possessive</option>
        </select>
      </div>
      {determination.type === "possessive" && (
        <>
          <label htmlFor="usePronoun">Use pronoun</label>
          <input
            type="checkbox"
            id="usePronoun"
            onChange={(e) => {
              updateDetermination({
                ...determination,
                usePronoun: e.target.value,
              });
            }}
          />
          <label htmlFor={`owner`}>Owner</label>
          <select
            id={`owner`}
            value={determination.owner}
            onChange={(e) => {
              updateDetermination({
                ...determination,
                owner: e.target.value,
              });
            }}
          >
            <option>none</option>
            {Object.keys(entities).map((key) => {
              return (
                <option key={key} value={key}>
                  {key}
                </option>
              );
            })}
          </select>
        </>
      )}
    </div>
  );
}
