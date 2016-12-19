//@flow

import React, { PropTypes } from 'react'
import * as todoAction from "../actions/TodoActions";
import classnames from "classnames";
import Checkbox from "./Checkbox";


type Props = {
  title: string,
  id: number,
  changeText: (string, number) => void
};

type State = {
  todoStatus: boolean
}

class Todo extends React.Component {

  state: State;
  todoId: number;

  constructor(props: Props){
    super(props);
    this.state = {
      todoStatus: this.props.complete
    }

    this.todoId = this.props.id;

  }

  deleteTodo(){
    todoAction.deleteTodo(this.todoId)
  }


  changeTextValue({title,id}: Props){
    this.props.changeText(title, id);
  }

  onChangeTextHandler(event: any){
    event.preventDefault();
    this.changeTextValue(this.props);
  }

  onHandleChange(status: boolean){
    this.setState({
      todoStatus: status
    });
  }

  render () {

    const checkboxID = this.props.title.replace(/\s/g, '').toLowerCase();
    // toggle class in checkboxID
    const classes = classnames('formGroup__checkbox', {active: this.state.todoStatus});
    return(
        <li class="todos__item">
          <div className="formGroup">
            <Checkbox onStatusChange = {this.onHandleChange.bind(this)} checked={this.state.todoStatus}/>
            <input onChange={this.onHandleChange.bind(this)} checked={this.state.todoStatus} id={checkboxID} type="checkbox" className={classes} />
            <label className="formGroup__label" htmlFor={checkboxID}>
              {this.props.title}
            </label>
            <button class="formGroup__button" onClick={this.deleteTodo.bind(this)}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
        </li>
    );

  }

}
// <a onClick={(event) => this.onChangeTextHandler(event)} href="#">{this.props.title}</a>



export default Todo;
