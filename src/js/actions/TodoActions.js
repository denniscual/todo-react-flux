//@flow
import dispatcher from "../dispatcher";

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
