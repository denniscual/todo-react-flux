//@flow

import React, { PropTypes } from 'react'
import * as todoAction from "../actions/TodoActions";

class Todo extends React.Component {

  constructor(){
    super();
  }

  deleteTodo(){
    const todoId: number = this.props.id;
    todoAction.deleteTodo(todoId)
  }

  render () {

    const marginLeft = {
      marginLeft: 20
    };

    return(
        <li>
          <a href="#">{this.props.title}</a>
          <button style={marginLeft} onClick={this.deleteTodo.bind(this)}>Del</button>
        </li>
    );
  }
}

export default Todo;
