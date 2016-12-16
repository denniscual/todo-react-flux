// @flow

import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer'


type Props = {
  children: Element<any>,
  location: Object,
  blog: any,
  sidebar: Element<any>
}

export default class Layout extends React.Component{

  props: Props;

  constructor(props: Props){
    // would pass props from Parent - super is calling the parent constructor.
    super(props);
    this.props = props;

  }

  render(){


    return(
      <div>
        <Header location={this.props.location}/>
          <main classID="siteMain">
            <div className="row">
              {this.props.children}
            </div>
          </main>
        <Footer />
      </div>
    );
  }

}
