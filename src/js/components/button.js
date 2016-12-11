//@flow

import React from 'react';

export default class Button extends React.Component{
    render(){
        return(
            <button id="button" onClick={this.props.buttonHandler}>
                {this.props.buttonText}
            </button>
        );
    }
}
