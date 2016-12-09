import React from 'react';

export default class Button extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          subText: this.props.buttonText
        };
    }


    onChangeButtonText(){
        this.props.buttonHandler(this.state.subText);
    }



    render(){
        return(
            <button onClick={this.onChangeButtonText.bind(this)}>{this.state.subText}</button>
        );
    }
}