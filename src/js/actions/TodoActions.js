//@flow
import dispatcher from "../dispatcher";
import type {TodosObjectType} from "../stores/TodoStore";


export function createTodo(title: string){
  dispatcher.dispatch(
    {
      type: "CREATE_TODO",
      text: title
    }
  )
}

export function updateTodo(id: number, title: string){
  dispatcher.dispatch({
    type: "UPDATE_TODO",
    id: id,
    title: title
  });
}

export function deleteTodo(id: number){
  dispatcher.dispatch(
    {
      type: "DELETE_TODO",
      id: id
    }
  )
}

export function completeTodo(id: number, complete: boolean){
  dispatcher.dispatch(
    {
      type: "COMPLETE_TODO",
      id: id,
      complete: complete
    }
  )
}

export function getAllUnCompleteTodo() {
  dispatcher.dispatch(
    {
      type: "FILTER_UNCOMPLETE_TODO"
    }
  )
}
