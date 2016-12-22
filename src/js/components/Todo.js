//@flow

import React, { PropTypes } from 'react'
import * as todoAction from "../actions/TodoActions";
import classnames from "classnames";


type Props = {
  title: string,
  id: number,
  changeText: (string, number) => void,
  complete: boolean,
  statusChange: (boolean) => void,
  isEdit: boolean,
  onEdit: (Object) => void
};

type State = {
  todoStatus: boolean,
  isEdit: boolean,
  textValue: string
}

class Todo extends React.Component {

  state: State;
  todoId: number;
  textInput: HTMLElement;

  constructor(props: Props){
    super(props);
    this.state = {
      todoStatus: false,
      isEdit: this.props.isEdit,
      textValue: this.props.title
    }

    this.todoId = this.props.id;

  }


  deleteTodo(){
    todoAction.deleteTodo(this.todoId)
  }

  updateTodo(event: any) {
    // if we press enter
    if (event.keyCode === 13) {
        event.preventDefault(); // Ensure it is only this code that rusn
        todoAction.updateTodo(this.todoId, this.state.textValue);
        // hide the input text field.
        this.setState({
          isEdit: !this.state.isEdit
        })
    }
    // if we press escape key.
    else if(event.keyCode == 27){
      this.setState({
        isEdit: !this.state.isEdit
      })
    }
  }

  // change the text value based on the input text
  onChangeTextHandler(event: any){
    const value = event.target.value;
    this.setState({
      textValue: value
    });
  }

  // change the status of the todo
  onHandleChange(){
    this.setState({
        todoStatus: !this.state.todoStatus
      }, () => this.props.statusChange(this.state.todoStatus, this.props.id)
    );       // after we update the state, fire this callback function.
  }

  // to hide the label
  onEditTodo(){
    this.props.onEdit();
    this.setState({
      isEdit: !this.state.isEdit
      }
    );
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
    // hide the label if the edit button is clicked. the state became edited if this operand returns true.
    const liClass = classnames("todos__item", {editing: this.props.isEdit && this.state.isEdit})
    return(
        <li class={liClass}>
          <div className="formGroup">
            <input id={checkboxID} className={classes} type="checkbox" onChange={this.onHandleChange.bind(this)} checked={this.state.todoStatus}/>
            <label className="formGroup__label" htmlFor={checkboxID}>
              {this.props.title}
            </label>
            <input onKeyDown={this.updateTodo.bind(this)}
                   onChange={(e) => this.onChangeTextHandler(e)}
                   ref={(input) => this.textInput = input }
                   type="text"
                   className="formGroup__field formGroup__field--hidden"
                   value={this.state.textValue}/>
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

export default Todo;
