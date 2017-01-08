// @flow

import React from "react";
import { render } from "react-dom";
import {Router, Route, IndexRoute, browserHistory, hashHistory} from "react-router";

import Layout from "./templates/_Layout";
import Todos from "./templates/Todos";

// end of imports ------------------------

const app = document.getElementById("app");

render(
  <Router history={hashHistory} >
    <Route path="/" component={Layout}>
      <IndexRoute component={Todos} />
    </Route>
  </Router>
, app);

const Person = {
  firstname: "kobe",
  lastname: "bryant"
}
// Person.firstname = 12;
