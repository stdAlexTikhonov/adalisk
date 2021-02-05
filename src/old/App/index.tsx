import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Login } from "../Login";
import { CasesTable } from "../CasesTable";
import { CasePage } from "../CasePage";
import { NotFound } from "../NotFound";
import Auth from "../../store/Authentication";
import { autorun } from "mobx";

export const App = () => {
  autorun(() => {
    Auth.checkLocalStorage();
  });

  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/cases" />} />
        <Route path="/login" exact component={Login} />
        <Route path="/cases" exact component={CasesTable} />
        <Route path="/case/:id" exact component={CasePage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};
