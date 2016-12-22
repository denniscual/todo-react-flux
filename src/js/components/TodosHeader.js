//@flow

import React, { PropTypes } from 'react'
import TodoDate from "../util/TodoDate";

const TodosHeader = () => {

    const inlineStyle = {
      position: "relative"
    };

    return(
      <li style={inlineStyle} class="todos__item todos__item--header">
        <a class="forkTag" href="https://github.com/denniscual/todo-react-flux">Fork me on github</a>
        <div className="date">
          <div className="date__col">
            <span className="date__text date__text--big">{TodoDate.date}</span>
          </div>
          <div className="date__col flex--col">
            <span className="date__text">{TodoDate.month}</span>
            <span className="date__text date__text--light">{TodoDate.year}</span>
          </div>
          <div className="date__col">
            <span className="date__text">{TodoDate.day}</span>
          </div>
        </div>
      </li>
    );



  }

export default TodosHeader;
