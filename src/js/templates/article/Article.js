import React from "react";


class Article extends React.Component {
  render () {
    const {params} = this.props;
    console.log(this.props);
    return(
      <div>
        <h1>{`You are on the ${params.title} page!`}</h1>
      </div>
    );
  }
}

export default Article;
