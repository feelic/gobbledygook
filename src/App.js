import { Switch, Route, NavLink } from "react-router-dom";
import ProcGenConLang from "./components/ProcGenConLang";
import PhraseBook from "./components/PhraseBook";
import About from "./components/About";
import styles from "./App.module.scss";
import "./App.css";

const menu = [
  { title: "ProcGenConLang", link: `${process.env.PUBLIC_URL}/` },
  { title: "Phrase book", link: `${process.env.PUBLIC_URL}/PhraseBook` },
  { title: "About", link: `${process.env.PUBLIC_URL}/About` },
];
export default function App() {
  return (
    <div className={styles.App}>
      <h1>gobbledygook</h1>
      <nav>
        {menu.map((entry) => {
          return (
            <NavLink
              activeClassName={styles.active}
              className={styles.navBtn}
              exact
              to={entry.link}
            >
              {entry.title}
            </NavLink>
          );
        })}
      </nav>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/PhraseBook`}>
          <PhraseBook />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`}>
          <ProcGenConLang />
        </Route>
      </Switch>
    </div>
  );
}
