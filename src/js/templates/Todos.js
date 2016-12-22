//@flow

import React from 'react';
import Todo from "../components/Todo";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as todoAction from "../actions/TodoActions";
import { todoStore } from "../stores/TodoStore";
import type {TodosObjectType } from "../stores/TodoStore";
import TodosFooter from "../components/TodosFooter";
import TodosHeader from "../components/TodosHeader"



type State = {
  todosArray: Array<TodosObjectType>,
  todoId: number,
  todoStatus: boolean,
  editingTodo: number
};

class Todos extends React.Component {

  //decalartion of variable in here
  state: State;
  createTodo: () => void;
  getTodos: () => void;

  constructor() {
    super();
    this.state = {
      todosArray: todoStore.getAllTodo(), // spit all the object that inside this array.
      todoId: 0,
      todoStatus: false,
      editingTodo: 0
    };
    this.getTodos = this.getTodos.bind(this);

  }

  componentWillMount() {
    // we create a change event and attach it to our todoStore object.
    todoStore.on("change", this.getTodos);

  }

  componentWillUnmount() {
    todoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todosArray: todoStore.getAllTodo()
    });
  }


  // create todo
  createTodo(event: any) {
    if (event.keyCode === 13) {
      event.preventDefault(); // Ensure it is only this code that rusn
      event.target.value != "" ? todoAction.createTodo(event.target.value) : alert("The field is empty!");
      event.target.value = "";
    }
  }


  onStatusChange(status: boolean, id: number) {
    this.setState({
      todoStatus: status
    }, () => todoAction.completeTodo(id, this.state.todoStatus)
    );
  }

  edit(todo: Object){
    this.setState({
      editingTodo: todo.id
    });
    console.log(todo.id);
  }

  render() {

    const {todosArray} = this.state;
    const TodoComponents = todosArray.map((todo) => {
      return <Todo
                statusChange={this.onStatusChange.bind(this)}
                key={todo.id}
                id={todo.id}
                title={todo.title}
                complete={this.state.todoStatus}
                onEdit={this.edit.bind(this, todo)}
                isEdit ={this.state.editingTodo === todo.id}
              />
    });

    // get the total of uncomplete todo.
    const activeTodoCount = todosArray.reduce(function (accum, todo) {
      return todo.complete ? accum : accum + 1;
    }, 0);

    const completedCount = todosArray.length - activeTodoCount;


    return (
      <div class="container">
        <h1 class="headlineText">todos app</h1>
        {/*wrap this ReactCSSTransitionGroup on the todo component to initialize transition*/}
        <ReactCSSTransitionGroup
          component="ul"
          className="todos"
          transitionName={{
            enter: 'todos__item--enter',
            enterActive: 'todos__item--enterActive',
            leave: 'todos__item--leave',
            leaveActive: 'todos__item--leaveActive'
          }}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300} >
          <TodosHeader />
          <li class="todos__item">
            <div className="formGroup">
              <input  class="formGroup__field" onKeyDown={(event) => this.createTodo(event)} placeholder="What will you do today?" id="todoText" type="text" />
            </div>
          </li>
          {TodoComponents}
          <TodosFooter count={activeTodoCount} completedCount={completedCount} />
        </ReactCSSTransitionGroup>
        <footer class="siteFooter">
          <p class="siteFooter__meta">When you are in edit mode, press ESC to cancel</p>
          <p class="siteFooter__meta">
            <a target="_blank" href="https://github.com/denniscual">Created by Drish</a>
          </p>
        </footer>
      </div>

    );

  }
}


export default Todos;
