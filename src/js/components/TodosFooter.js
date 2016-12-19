//@flow

import * as todoAction from "../actions/TodoActions";
import pluralize from "pluralize";
import React, { PropTypes } from 'react'
import {todoStore} from "../stores/TodoStore";
import type {TodosObjectType} from "../stores/TodoStore";



class TodosFooter extends React.Component {

  onLinkClick: () => void;

  onLinkClick(event: any){
    event.preventDefault();
    todoAction.getAllUnCompleteTodo();
  }


  render () {
    const {count, completedCount} = this.props;
    const todoSizePluralize = pluralize("task", count)
    const todosSize = `${count} uncompleted ${todoSizePluralize}`;

    let footerComp = "";

    // if there is no completed task - dont display the clear button
    if(completedCount > 0){
       footerComp = (
        <div className="formGroup formGroup--footer">
          <span>
             {todosSize}
          </span>
          <a onClick={this.onLinkClick.bind(this)} class="formGroup__link">
            Clear completed
          </a>
        </div>
      );
    }
    else{
       footerComp = (
        <div className="formGroup formGroup--footer">
          <span>
             {todosSize}
          </span>
        </div>
      );
    }

    return(
      <li class="todos__item">
        {footerComp}
      </li>
    );
  }
}

export default TodosFooter;
