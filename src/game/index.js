import { Switch, Route, NavLink } from "react-router-dom";
import { generateLanguage } from "../gobbledygook/generate-language/index";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import {
  transliterate,
  makeSentence,
  makeNumber,
  getIPATranscript,
} from "../gobbledygook/use-language";
import { setSeed } from "../gobbledygook/util/random";
import inscriptionsCatalogue from './inscriptions';
import Inscription from './Inscription';

export default function App() {
  const [seed, setCurrentSeed] = useState("random");
  const [lang, setLang] = useState();
  useEffect(() => {
    setSeed(seed);
    setLang(generateLanguage());
  }, [seed]);
  const [inscriptions, setInscriptions] = useState(inscriptionsCatalogue);
  const [notes, setNotes] = useState({});

  if (!lang) {
    return <div>loading</div>;
  }
  const sentence = makeSentence(lang, inscriptions[0]);

  function updateNote (id, updatedNote) {
    setNotes({...notes, [id]: updatedNote})
  }

  return <div>
    <h1>Deciphering the {transliterate(lang, lang.name)} language</h1>
    <Inscription lang={lang} sentence={sentence} notes={notes} updateNote={updateNote}/>
  </div>
}
