// @flow

import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import Layout from './templates/_Layout';
import Blog from './templates/Blog';
import Contact from './templates/Contact';
import Home from './templates/Home';
import Services from './templates/Services';

// end of imports ------------------------

const app = document.getElementById('app');

render(
  <Router history={hashHistory} >
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="blog(/:article)" component={Blog} />
      <Route path="services" component={Services} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
, app);
