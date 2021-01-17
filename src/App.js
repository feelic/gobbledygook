import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import ProcGenConLang from "./components/ProcGenConLang";
import PhraseBook from "./components/PhraseBook";
import "./App.css";

export default function App() {
  const match = useRouteMatch();

  console.log(match);
  return (
    <div className="App">
      <h1>gobbledygook</h1>
      <nav>
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
          to={`${process.env.PUBLIC_URL}/ProcGenConLang`}
        >
          ProcGenConLang
        </NavLink>
      </nav>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/PhraseBook`}>
          <PhraseBook />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/ProcGenConLang`}>
          <ProcGenConLang />
        </Route>
      </Switch>
    </div>
  );
}
