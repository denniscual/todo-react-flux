// @flow

import React from 'react';
import { render } from 'react-dom';
import { Link, IndexLink } from 'react-router';

export default class Header extends React.Component{


  render(){

    const { location } = this.props;
    const path = location.pathname;
    const blogClass = path.match(/^\/blog/) ? "active" : "";
    const todosClass = path === "todos" ? "active" : "";
    const servicesClass = path === "services" ? "active" : "";
    const contactClass = path ===  "contact" ? "active" : "";
    // const
    return(
      <header class="siteHeader">
          <nav class="navbar navbar-default">
              <div class="container">
                  <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                          <span class="sr-only">Toggle navigation</span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                      </button>
                      <IndexLink class="navbar-brand" to="/"> React </IndexLink>
                  </div>

                  <div class="collapse navbar-collapse" class="bs-example-navbar-collapse-1">
                      <ul class="nav navbar-nav">
                          <li><Link to="blog" class={blogClass}> Blog </Link></li>
                          <li><Link to="todos" class={todosClass}> Todos </Link></li>
                          <li><Link to="services" class={servicesClass}> Services </Link></li>
                          <li><Link to="contact" class={contactClass}> Contact </Link></li>
                      </ul>
                      <ul class="nav navbar-nav navbar-right">
                          <li><a href="#">Link</a></li>
                          <li class="dropdown">
                              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                              <ul class="dropdown-menu">
                                  <li><a href="#">Action</a></li>
                                  <li><a href="#">Another action</a></li>
                                  <li><a href="#">Something else here</a></li>
                                  <li role="separator" class="divider"></li>
                                  <li><a href="#">Separated link</a></li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </header>
    );
  }

}
