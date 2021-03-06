// @flow

import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';


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
          <main classID="siteMain">
            <div className="row">
              {this.props.children}
            </div>
          </main>
      </div>
    );
  }

}
