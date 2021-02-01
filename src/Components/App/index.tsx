import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "../Login";
import { Cases } from "../Table";
import { DataPage } from "../DataPage";
import { NotFound } from "../NotFound";
import Data from "../../store/Data";

export const App = () => {
  useEffect(() => {
    Data.fetchData();
  }, []);

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
