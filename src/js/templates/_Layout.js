// @flow

import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import Header from '../snippets/Header';
import Footer from '../snippets/Footer'

type Props = {
  children: Element<any>
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
        <Header />
          <main classID="siteMain">
            {this.props.children}
          </main>
        <Footer />
      </div>
    );
  }

}
