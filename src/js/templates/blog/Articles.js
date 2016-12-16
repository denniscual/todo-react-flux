//@flow
import React from 'react'


export class Articles extends React.Component {

  // we create our instance object of the Article
  article1: Article = new Article("Some-article 1", "lorem ipsum data.", "Dexter Amper");
  article2: Article = new Article("Some-article 2", "lorem ipsum data.", "Reymark Santiago");

  // we create an  array which holds all the  article object
  articles: Array<Article> = [
    this.article1,
    this.article2,
  ];

  // we map the articles object that produces an Article nview.
  articleArray: Array<any> = this.articles.map((item, i) => <ArticleView key={i} article={item} />);


  render () {
    return(
      <div>
        <h2>Blog List</h2>
        <ul className="articles">
            {this.articleArray}
        </ul>
      </div>
    );
  }
}



export class ArticleView extends React.Component {
  render(){
    const {articleTitle, articleBody, articleAuthor} = this.props.article;
    return(
      <li className="articles__item">
          <h3>{articleTitle}</h3>
          <p>{articleBody}</p>
          <h4>{articleAuthor}</h4>
      </li>
    );
  }
}

// encapsulations of class Article
class Article{

  articleTitle: string;
  articleBody: string;
  articleAuthor: string;

  constructor(title: string, body: string, author: string){
    this.articleTitle = title;
    this.articleBody = body;
    this.articleAuthor = author;
  }

}
