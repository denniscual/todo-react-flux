import React from 'react';
import { render } from 'react-dom';

export default class Blog extends React.Component{

  render(){
    console.log(this.props);
    const {params} = this.props;
    const articleHeading:string = params.article != null ? `You are on the ${params.article} article.` : 'Blog list' ;

    return(
      <div>
        <h2>{articleHeading}</h2>
      </div>
    );
  }

}
