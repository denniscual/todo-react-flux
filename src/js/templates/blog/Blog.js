

import React from 'react';
import { render } from 'react-dom';
import Sidebar from '../../components/layout/Sidebar';


export default class Blog extends React.Component{

  render(){

    const {params} = this.props;
    let renderHTML = "";
    if(this.props.articles == undefined){
      renderHTML = this.props.article;
    }
    else{
      renderHTML = this.props.articles;
    }


    return(
      <div className="row">
        <div className="col-lg-2 ">
          <Sidebar/>
        </div>
        <div className="col-lg-10 ">
          {renderHTML}
        </div>
      <hr/>
      </div>
    );
  }

}
