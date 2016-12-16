
import React, { PropTypes } from 'react'

class Sidebar extends React.Component {
  render () {
    return(
        <div className="sidenav">
           <p><a href="#">Category 1</a></p>
           <p><a href="#">Category 2</a></p>
           <p><a href="#">Category 3</a></p>
        </div>
    );
  }
}

export default Sidebar;
