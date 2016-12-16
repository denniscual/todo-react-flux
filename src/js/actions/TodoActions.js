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

export function deleteTodo(id: number){
  dispatcher.dispatch(
    {
      type: "DELETE_TODO",
      id: id
    }
  )
}
