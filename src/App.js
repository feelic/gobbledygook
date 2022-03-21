import { Routes, Route, NavLink } from "react-router-dom";
import ProcGenConLang from "./components/ProcGenConLang";
import PhraseBook from "./components/PhraseBook";
import Game from "./game/index";
import About from "./components/About";
import styles from "./App.module.scss";
import "./App.css";

const menu = [
  // { title: "gobbledygook", link: `${process.env.PUBLIC_URL}/` },
  { title: "ProcGenConLang", link: `${process.env.PUBLIC_URL}/` },
  { title: "Phrase book", link: `${process.env.PUBLIC_URL}/PhraseBook` },
  // { title: "About", link: `${process.env.PUBLIC_URL}/About` },
];
export default function App() {
  return (
    <div className={styles.App}>
      <h1>gobbledygook</h1>
      <p>
        Welcome to gobbledygook, it's a constructed language procedural
        generator.
      </p>
      <p>
        You can generate an imaginary language by changing the seed, choose a
        voice and listen to it !
      </p>
      <Routes>
        <Route path={`PhraseBook`} element={<PhraseBook />} />
        // <Route path="/About" element={<About />} />
        <Route path={`/`} element={<ProcGenConLang />} />
        // <Route path={`/`} element={<Game />} />
      </Routes>

      <footer>
        {menu.map((entry) => {
          return (
            <NavLink key={entry.link} className={styles.navBtn} to={entry.link}>
              {entry.title}
            </NavLink>
          );
        })}
        <span>
          made by <a href="https://twitter.com/feelic">@feelic</a> ;-){" "}
        </span>
      </footer>
    </div>
  );
}
