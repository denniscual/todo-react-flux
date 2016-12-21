//@flow

import React, { PropTypes } from 'react'
import * as todoAction from "../actions/TodoActions";
import classnames from "classnames";


type Props = {
  title: string,
  id: number,
  changeText: (string, number) => void,
  complete: boolean,
  statusChange: (boolean) => void
};

type State = {
  todoStatus: boolean,
  isEdit: boolean
}

class Todo extends React.Component {

  state: State;
  todoId: number;
  textInput: HTMLElement;

  constructor(props: Props){
    super(props);
    this.state = {
      todoStatus: false,
      isEdit: false
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


  onHandleChange(){
    this.setState({
        todoStatus: !this.state.todoStatus
      }, () => this.props.statusChange(this.state.todoStatus, this.props.id)
    );       // after we update the state, fire this callback function.
  }

  onEditTodo(){
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  // this function is opportunity to opearte and manipulate the DOM, we can get the prev props and state in here.
  componentDidUpdate(){
    this.textInput.focus();
  }


  render () {

    //get rid all the whitesspace of the title value.
    const checkboxID = this.props.title.replace(/\s/g, '').toLowerCase();
    // toggle class in checkboxID
    const classes = classnames('formGroup__checkbox', {active: this.state.todoStatus});
    // hide the label if the edit button is clicked.
    const labelClass = classnames("formGroup__label", {editing: this.state.isEdit})
    return(
        <li class="todos__item">
          <div className="formGroup">
            <input id={checkboxID} className={classes} type="checkbox" onChange={this.onHandleChange.bind(this)} checked={this.state.todoStatus}/>
            <label className={labelClass} htmlFor={checkboxID}>
              {this.props.title}
            </label>
            <input ref={(input) => this.textInput = input } type="text" className="formGroup__field formGroup__field--hidden" value={this.props.title}/>
            <button class="formGroup__button" onClick={this.onEditTodo.bind(this)}>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
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
