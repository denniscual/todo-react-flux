import React from 'react';
import { render } from 'react-dom';

import {Header} from './components/header'
import Button from './components/button'

class App extends React.Component{

    constructor(){
        super();
        this.hideText = "Hide the subtitle text";
        // this.displayText = "Show the subtitle of heading text";
        this.state = {
            stateSubTextComp: true,
            subText: this.hideText
        };
    }


    onStateSubText(newText) {
        this.setState({
            stateSubTextComp: !this.state.stateSubTextComp,
            subText: newText
        });

    }


    // composition let you described a name for your element props.
    render(){
        {/*let subTextComp = "";*/}
        // if(this.state.stateSubTextComp){
        //     subTextComp = (
        //         <p>
        //             Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada.
        //         </p>
        //     );
        //
        // }
        return(
            <div>
                <Header
                    headingText ={
                        <h3>This is the header. This element is passed like a props data.</h3>
                    }
                    subText = {
                        <p>
                            Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Cras
                            ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Cras
                            ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Pellentesque in ipsum id
                            orci porta dapibus. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna
                            dictum porta. Donec sollicitudin molestie malesuada.
                        </p>
                    }

                />
                <Button buttonText={this.state.subText} buttonHandler={this.onStateSubText.bind(this)}/>
            </div>
        );
    }

}

render(<App/>, document.getElementById("app"));