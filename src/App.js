import { Switch, Route, NavLink } from "react-router-dom";
import ProcGenConLang from "./components/ProcGenConLang";
import PhraseBook from "./components/PhraseBook";
import Game from "./game/index";
import About from "./components/About";
import styles from "./App.module.scss";
import "./App.css";

const menu = [
  { title: "gobbledygook", link: `${process.env.PUBLIC_URL}/` },
  { title: "ProcGenConLang", link: `${process.env.PUBLIC_URL}/PGCL` },
  { title: "Phrase book", link: `${process.env.PUBLIC_URL}/PhraseBook` },
  { title: "About", link: `${process.env.PUBLIC_URL}/About` },
];
export default function App() {
  return (
    <div className={styles.App}>
      <h1>gobbledygook</h1>

      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/PhraseBook`}>
          <PhraseBook />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/PGCL`}>
          <ProcGenConLang />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`}>
          <Game />
        </Route>
      </Switch>

      <footer>
        {menu.map((entry) => {
          return (
            <NavLink
            key={entry.link}
              activeClassName={styles.active}
              className={styles.navBtn}
              exact
              to={entry.link}
            >
              {entry.title}
            </NavLink>
          );
        })}
        <span>made by <a href="https://twitter.com/feelic">@feelic</a> ;-) </span>
      </footer>
    </div>
  );
}
