//@flow
import EventEmitter from "events";
import dispatcher from "../dispatcher";

export type TodosObjectType = {
  id: number,
  title: string,
  complete: boolean
};

class TodoStore extends EventEmitter{

  todos: Array<TodosObjectType>;


  constructor(){
    super();
    this.todos = [
         {
           id: 1001,
           title: "Work out at the morning",
           complete: false
         },
         {
           id: 1005,
           title: "Date with my Girlfriend",
           complete: false
         }
    ];
  }

  // get the todo item
  getAllTodo(): Array<TodosObjectType>{
    return this.todos;
  }

  // add a todo item
  createTodo(title: string){
    const todoID: number = Date.now();
    this.todos.push({
      id: todoID,
      title: title,
      complete: false
    });
    // we dispatch/invoke the event.
    this.emit("change");
  }

  // delete a todo item
  deleteTodo(todos: Array<TodosObjectType>, params: Object ){
    todos.some((item, index) => {
    		if(todos[index][params.key] === params.value){
    			// found it!
    			todos.splice(index, 1);
    			return true; // stops the loop
    		}
    		return false;
    });
    // invoke the event
    this.emit("change");
  }

  // a storage of the events - this will be the one decides what events that being omitted/invokde/
  // the decision will be based on the action that will pass by the dispatcher.
  handleActions(action: any){
    switch (action.type) {
      // if the action type is called CREATE_TODO, execute the event.
      case "CREATE_TODO":
        this.createTodo(action.text);
        break;
      case "DELETE_TODO":
        this.deleteTodo(this.todos, {key: "id", value: action.id });
        console.log(this.todos.length)
      default:
    }
  }

}

export const todoStore = new TodoStore;
// we will register our todoStore on our Dispatcher
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.todoStore = todoStore;
window.dispatcher = dispatcher;
