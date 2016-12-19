//@flow
import React from "react";

type Props = {
  checked: boolean,
  onStatusChange: () => void
}

type State = {
  todoStatus: boolean
};

class Checkbox extends React.Component {

  state: State;

  constructor(props: Props){
    super(props);
    this.state = {
      todoStatus: this.props.checked
    }
  }

  onHandleChange(){
    this.setState({
      todoStatus: !this.state.todoStatus
    });
    this.props.onStatusChange(this.state.todoStatus);
  }

  render () {
    return(
      <input type="checkbox" onChange={this.onHandleChange.bind(this)} checked={this.state.todoStatus}/>
    );
  }
}

export default Checkbox;
