import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "../Login";
import { Table } from "../Table";
import { DataPage } from "../DataPage";

export const App = () => (
  <Router>
    <Route path="/login" exact component={Login} />
    <Route path="/data" exact component={Table} />
    <Route path="/data/:id" exact component={DataPage} />
    <Route path="/" exact render={() => "Hello adalisk!"} />
  </Router>
);
