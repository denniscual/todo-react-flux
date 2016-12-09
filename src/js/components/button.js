import React from 'react';

export default class Button extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          subText: this.props.buttonText
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log("the component will received props");
        if (this.props != nextProps) {
            this.setState({
                subText: "Show the subtitle text"
            });
        }
    }




    render(){
        return(
            <button onClick={this.props.buttonHandler}>{this.state.subText}</button>
        );
    }
}