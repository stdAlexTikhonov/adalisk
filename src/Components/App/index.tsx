import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "../Login";
import { Table } from "../Table";
import { DataPage } from "../DataPage";
import { NotFound } from "../NotFound";

export const App = () => (
  <Router>
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/data" exact component={Table} />
      <Route path="/data/:id" exact component={DataPage} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);
