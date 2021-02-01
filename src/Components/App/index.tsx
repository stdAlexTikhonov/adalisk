import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "../Login";
import { Cases } from "../Table";
import { DataPage } from "../DataPage";
import { NotFound } from "../NotFound";
import Data from "../../store/Data";
import Auth from "../../store/Authentication";
import { autorun } from "mobx";

export const App = () => {
  autorun(() => {
    Data.fetchData();
    Auth.checkLocalStorage();
  });

  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/data" exact component={Cases} />
        <Route path="/data/:id" exact component={DataPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};
