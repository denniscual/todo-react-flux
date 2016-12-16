//@flow

import React, { PropTypes } from 'react'
import * as todoAction from "../actions/TodoActions";

type State = {
  newText: string
};

type Props = {
  title: string,
  id: number,
  changeText: (string) => void
};

class Todo extends React.Component {

  state: State;
  props: Props;

  constructor(props: Props){
    super(props);
    this.state = {
      newText: this.props.title
    };
  }

  deleteTodo(){
    const todoId: number = this.props.id;
    todoAction.deleteTodo(todoId)
  }

  changeTextValue(){
    this.props.changeText(this.state.newText);
  }

  onChangeText(event: any){
    event.preventDefault();
    const text: string = event.target.innerHTML;
    this.setState({
      newText: text
    });
    this.changeTextValue();
  }

  render () {

    const marginLeft = {
      marginLeft: 20
    };

    return(
        <li>
          <a onClick={(event) => this.onChangeText(event)} href="#">{this.props.title}</a>
          <button style={marginLeft} onClick={this.deleteTodo.bind(this)}>Del</button>
        </li>
    );
  }
}

export default Todo;
