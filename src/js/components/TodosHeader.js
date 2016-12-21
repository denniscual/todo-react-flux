//@flow

import React, { PropTypes } from 'react'

const TodosHeader = () => {

    const dateObject: Date = new Date;
    const dayArray: Array<string> = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = dayArray[dateObject.getDay()];

    return(
      <li class="todos__item todos__item--header">
        <div className="date">
          <div className="date__col">
            <span className="date__text date__text--big">12</span>
          </div>
          <div className="date__col flex--col">
            <span className="date__text">JANUARY</span>
            <span className="date__text date__text--light">2016</span>
          </div>
          <div className="date__col">
            <span className="date__text">{day}</span>
          </div>
        </div>
      </li>
    );



  }

export default TodosHeader;
