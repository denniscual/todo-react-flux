//@flow

import React, { PropTypes } from 'react'
import * as todoAction from "../actions/TodoActions";
import classnames from "classnames";


type Props = {
  title: string,
  id: number,
  changeText: (string, number) => void
};

type State = {
  checkboxState: boolean
}

class Todo extends React.Component {

  state: State;

  constructor(){
    super();
    this.state = {
      checkboxState: false
    }

  }

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

  onCheckboxClick(){
    this.setState({
      checkboxState: true
    });
  }

  render () {

    const checkboxID = this.props.title.replace(/\s/g, '').toLowerCase();
    return(
        <li class="todos__item">
          <div className="formGroup">
            <input id={checkboxID} type="checkbox" class="formGroup__checkbox"/>
            <label className="formGroup__label" htmlFor={checkboxID}>
              <a onClick={(event) => this.onChangeTextHandler(event)} href="#">{this.props.title}</a>
            </label>
            <button class="formGroup__button" onClick={this.deleteTodo.bind(this)}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
        </li>
    );

  }

}



export default Todo;
