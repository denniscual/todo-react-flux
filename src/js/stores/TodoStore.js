//@flow
import EventEmitter from "events";
import dispatcher from "../util/dispatcher";

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
         },
         {
           id: 1010,
           title: "Shopping at the mall",
           complete: false
         }
    ];
  }

  // get the todo item
  getAllTodo(): Array<TodosObjectType>{
    return this.todos;
  }

  // get all the complete todo
  getAllUnCompleteTodo() {
    // initialize the instance property value
    this.todos = this.todos.filter((todo) => {
      return todo.complete != true;
    });

    this.emit("change");
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
    const itemIndex = this.getObjectById(todos, key, id);
    if(title != null){
      todos[itemIndex].title = title.trim();
    }
    // invoke the event
    this.emit("change");
  }


  // delete a todo item
  deleteTodo(todos: Array<TodosObjectType>, {key,id}: TodoObjectType ){
    const itemIndex = this.getObjectById(todos, key, id);
    todos.splice(itemIndex, 1);
    // invoke the event
    this.emit("change");
  }

  // completed todo
  completeTodo(todos: Array<TodosObjectType>, params: Object){
    const itemIndex = this.getObjectById(todos, params.key, params.id);
    todos[itemIndex].complete = params.complete;
    this.emit("change");
  }

  //it will return the index of selected object in array
  getObjectById(todos: Array<TodosObjectType>, key: string, id: number): number{
    let itemIndex: number = 0;
    todos.some((item, index: number) => {
      // search an element in array.
      if(todos[index][key] === id){
        itemIndex = index;
        return true;
      }
      return false;
    });
    return itemIndex;
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
        this.completeTodo(this.todos, {key: "id", id: action.id, complete: action.complete});
        break;
      case "FILTER_UNCOMPLETE_TODO":
        this.getAllUnCompleteTodo();
        break;
      default:
    }
  }

}

export const todoStore = new TodoStore;
// we will register our todoStore on our Dispatcher
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.todoStore = todoStore;
window.dispatcher = dispatcher;
