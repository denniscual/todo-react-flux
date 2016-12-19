//@flow
import React from "react";

class Checkbox extends React.Component {

  constructor(props: Props){
    super(props);
    this.state = {
      todoStatus: this.props.checked
    }
  }

  onHandleChange{

  }

  render () {
    return(
      <input type="checkbox" onChange={} checked={this.props.checked}/>
    );
  }
}

export default Checkbox;
