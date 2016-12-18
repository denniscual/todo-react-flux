//@flow

import React from 'react';
import Todo from "../components/Todo";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as todoAction from "../actions/TodoActions";
import {todoStore} from "../stores/TodoStore";
import type {TodosObjectType} from "../stores/TodoStore";


type State = {
  todosArray: Array<TodosObjectType>,
  initialText: string,
  todoId: number
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
      initialText: "",
      todoId: 0
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

  changeInitialText(text: string, id: number){
    this.setState({
      initialText: text,
      todoId: id
    });
  }

  onChangeInitialTextHandler(event: any){
    const textVal = event.target.value;
    this.setState({
      initialText: textVal
    });
  }

  // create todo
  createTodo(event: any){

    if(event.keyCode === 13){
        event.preventDefault(); // Ensure it is only this code that rusn
        event.target.value != "" ? todoAction.createTodo(event.target.value) : alert("The field is empty!");
        event.target.value = "";
    }

  }

  updateTodo(){
    todoAction.updateTodo(this.state.todoId, this.state.initialText);
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
        <ul class="todos">
            <li class="todos__item">
              <div className="formGroup">
                <input class="formGroup__field" onKeyDown={(event) => this.createTodo(event)} placeholder="What will you do today?" id="todoText" type="text" />
              </div>
            </li>
            {/*wrap this ReactCSSTransitionGroup on the todo component to initialize transition*/}
            <ReactCSSTransitionGroup
               transitionName={ {
                 enter: 'todos__item--enter',
                 enterActive: 'todos__item--enterActive',
                 leave: 'todos__item--leave',
                 leaveActive: 'todos__item--leaveActive'
               } }
               transitionEnterTimeout={500}
               transitionLeaveTimeout={300}>
               {TodoComponents}
           </ReactCSSTransitionGroup>
        </ul>
        <div class="form-group">
          <input id="textUpdate" onChange={(event) => this.onChangeInitialTextHandler(event)}  type="text" value={this.state.initialText} />
          <button onClick={this.updateTodo.bind(this)}>Update todo</button>
        </div>
      </div>
    );

  }
}

export default Todos;
