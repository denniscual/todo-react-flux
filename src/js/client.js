// @flow

import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import Article from "./templates/article/Article";
import { Articles } from "./templates/blog/Articles"
import Layout from './templates/_Layout';
import Blog from './templates/blog/Blog';
import Contact from './templates/Contact';
import Home from './templates/Home';
import Services from './templates/Services';
import Todos from "./templates/Todos"

// end of imports ------------------------

const app = document.getElementById('app');

render(
  <Router history={hashHistory} >
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route component={Blog}>
        <Route path="blog" components={{articles: Articles}} />
        <Route path="blog/:title"  components={{article: Article}} />
      </Route>
      <Route path="todos" component={Todos} />
      <Route path="services" component={Services}/>
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
, app);
