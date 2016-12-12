// @flow

import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

export default class Header extends React.Component{

  render(){
    return(
      <header classID="siteHeader">
          <nav className="navbar navbar-default">
              <div className="container">
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <Link className="navbar-brand" to="/"> React </Link>
                  </div>

                  <div className="collapse navbar-collapse" classID="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                          <li><Link to="blog" activeClassName="active"> Blog </Link></li>
                          <li><Link to="services" activeClassName="active"> Services </Link></li>
                          <li><Link to="contact" activeClassName="active"> Contact </Link></li>
                      </ul>
                      <ul className="nav navbar-nav navbar-right">
                          <li><a href="#">Link</a></li>
                          <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                              <ul className="dropdown-menu">
                                  <li><a href="#">Action</a></li>
                                  <li><a href="#">Another action</a></li>
                                  <li><a href="#">Something else here</a></li>
                                  <li role="separator" className="divider"></li>
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
