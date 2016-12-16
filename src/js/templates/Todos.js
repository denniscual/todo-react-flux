//@flow

import React from 'react';
import Todo from "../components/Todo";
import * as todoAction from "../actions/TodoActions";
import {todoStore} from "../stores/TodoStore";
import type {TodosObjectType} from "../stores/TodoStore";


type State = {
  todosArray: Array<TodosObjectType>,
  initialText: string
}

class Todos extends React.Component {

  //decalartion of variable in here
  state: State;
  createTodo: () => void;
  getTodos: () => void;

  constructor(){
    super();
    this.state = {
      todosArray: todoStore.getAllTodo(), // spit all the object that inside this array.
      initialText: ""
    };
    this.getTodos = this.getTodos.bind(this);

  }

  componentWillMount() {
    // we create a change event and attach it to our todoStore object.
    todoStore.on("change", this.getTodos);

  }

  componentWillUnmount(){
    todoStore.removeListener("change", this.getTodos);
  }

  getTodos(){
    this.setState({
      todosArray: todoStore.getAllTodo()
    });
  }

  changeInitialText(text: string){
    this.setState({
      initialText: text
    });
  }


  // create todo
  createTodo(){
    // call the create todo function on TodoAction.
    const field: any = document.getElementById("todoText");
    todoAction.createTodo(field.value);
  }

  render () {

    const ulStyle = {
      listStyleType: "none",
      margin: 0,
      padding: 0,
      marginBottom: 20
    };

    const {todosArray} = this.state;
    const TodoComponents = todosArray.map((todo) => {
       return <Todo changeText={this.changeInitialText.bind(this)} key={todo.id} {...todo} />
    });

    return(
      <div class="container">
        <h3>Todos</h3>
        <ul style={ulStyle}>{TodoComponents}</ul>
        <div class="form-group">
          <input id="todoText" type="text" />
          <button onClick={this.createTodo.bind(this)}>Create todo</button>
        </div>
        <div class="form-group">
          <input id="textUpdate"  type="text" value={this.state.initialText} />
          <button onClick={this.createTodo.bind(this)}>Update todo</button>
        </div>
      </div>
    );

  }
}

export default Todos;
