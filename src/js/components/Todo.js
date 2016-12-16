//@flow

import React, { PropTypes } from 'react'
import * as todoAction from "../actions/TodoActions";


type Props = {
  title: string,
  id: number,
  changeText: (string, number) => void
};

class Todo extends React.Component {

  deleteTodo(){
    const todoId: number = this.props.id;
    todoAction.deleteTodo(todoId)
  }

  changeTextValue({title,id}: Props){
    this.props.changeText(title, id);
  }

  onChangeTextHandler(event: any){
    event.preventDefault();
    this.changeTextValue(this.props);
  }

  render () {

    return(
        <li class="todos__item">
          <div className="formGroup">
            <input type="checkbox" class="formGroup__checkbox"/>
            <a onClick={(event) => this.onChangeTextHandler(event)} href="#">{this.props.title}</a>
            <button class="formGroup__button" onClick={this.deleteTodo.bind(this)}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
        </li>
    );
  }
}


export default Todo;
