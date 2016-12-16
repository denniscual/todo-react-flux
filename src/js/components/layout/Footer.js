// @flow

import React from 'react';
import { render } from 'react-dom';

export default class Header extends React.Component{


  render(){

    return(
      <footer id="siteFooter">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 center">
              <h3>This is the site footer.</h3>
            </div>
          </div>
        </div>
      </footer>
    );
  }

}
