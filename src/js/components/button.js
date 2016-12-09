import React from 'react';

export default class Button extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            buttonText: this.props.buttonText
        };
    }


    onChangeButtonText(){

        if(this.props.buttonText == "Hide the subtitle text"){
            this.setState({
                buttonText: "Show subtitle text"
            });
        }
        this.props.buttonHandler(this.state.buttonText);
    }



    render(){
        return(
            <button onClick={this.onChangeButtonText.bind(this)}>{this.state.buttonText}</button>
        );
    }
}