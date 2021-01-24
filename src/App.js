import { Switch, Route, NavLink } from "react-router-dom";
import ProcGenConLang from "./components/ProcGenConLang";
import PhraseBook from "./components/PhraseBook";
import About from "./components/About";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>gobbledygook</h1>
      <nav>
        <NavLink
          activeClassName="active"
          className="navBtn"
          exact
          to={`${process.env.PUBLIC_URL}/`}
        >
          ProcGenConLang
        </NavLink>
        <NavLink
          activeClassName="active"
          className="navBtn"
          to={`${process.env.PUBLIC_URL}/PhraseBook`}
        >
          Phrase book
        </NavLink>
        <NavLink
          activeClassName="active"
          className="navBtn"
          to={`${process.env.PUBLIC_URL}/About`}
        >
          About
        </NavLink>
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
