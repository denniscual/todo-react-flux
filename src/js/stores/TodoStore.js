//@flow
import EventEmitter from "events";
import dispatcher from "../dispatcher";

export type TodosObjectType = {
  id: number,
  title: string,
  complete: boolean
};

type TodoObjectType = {
  key: string,
  id: number,
  title?: string
};


class TodoStore extends EventEmitter{

  todos: Array<TodosObjectType>;
  params: TodoObjectType;


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
    // override the current todos array
    this.todos = this.todos.filter(function (todo) {
			return !todo.complete;
		});
    return this.todos;
  }

  // add a todo item
  createTodo(title: string){
    const todoID: number = Date.now();
    this.todos.push({
      id: todoID,
      title: title.trim(),
      complete: false
    });
    // we dispatch/invoke the event.
    this.emit("change");
  }

  // update todo
  updateTodo(todos: Array<TodosObjectType>, {key,id,title}: TodoObjectType ){
    todos.some((item, index) => {
        // search if the pass id is equal on the elemnet on the array.
    		if(todos[index][key] === id){
    			// found it! update the value title property on the object element
          // check if the title is exist in declartion
          if(title != null){
            todos[index].title = title.trim();
          }
    			return true; // stops the loop
    		}
    		return false;
    });
    // invoke the event
    this.emit("change");
  }


  // delete a todo item
  deleteTodo(todos: Array<TodosObjectType>, {key,id}: TodoObjectType ){
    todos.some((item, index) => {
        // search if the pass id is equal on the elemnet on the array.
    		if(todos[index][key] === id){
    			// found it! delete the element
    			todos.splice(index, 1);
    			return true; // stops the loop
    		}
    		return false;
    });
    // invoke the event
    this.emit("change");
  }

  // completed todo
  completeTodo(todos: Array<TodosObjectType>, params: Object){
    todos.some((item, index) => {
        // search if the pass id is equal on the elemnet on the array.
        if(todos[index][params.key] === params.id){
          // found it! update the complete status
          todos[index].complete = params.complete;
          return true; // stops the loop
        }
        return false;
    });
    // this.emit("change");
  }

  // a storage of the events - this will be the one decides what events that being omitted/invokde/
  // the decision will be based on the action that will pass by the dispatcher.
  handleActions(action: any){
    switch (action.type) {
      // if the action type is called CREATE_TODO, execute the event.
      case "CREATE_TODO":
        this.createTodo(action.text);
        break;
      case "UPDATE_TODO":
        this.updateTodo(this.todos, {key: "id", id: action.id, title: action.title});
        break;
      case "DELETE_TODO":
        this.deleteTodo(this.todos, {key: "id", id: action.id});
        break;
      case "COMPLETE_TODO":
        this.completeTodo(this.todos, {key: "id", id: action.id, complete: action.complete})
      default:
    }
  }

}

export const todoStore = new TodoStore;
// we will register our todoStore on our Dispatcher
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.todoStore = todoStore;
window.dispatcher = dispatcher;
