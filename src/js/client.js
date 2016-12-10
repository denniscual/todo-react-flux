import React from 'react';
import { render } from 'react-dom';

import {Header} from './components/header'
import Button from './components/button'


class App extends React.Component{


    constructor(){
        super();
        this.state = {
            isToggleText: true,
            isToggleSubtitle: true
        };
        this.handleClick = this.handleClick.bind(this);
    }




    handleClick() {
        this.setState(prevState => ({
            isToggleText: !prevState.isToggleText,
            isToggleSubtitle: !prevState.isToggleSubtitle
        }));
    }

    // composition let you described a name for your element props.
    render(){
        let headerComp = "";
        if(this.state.isToggleSubtitle){
            headerComp = (
                <p>
                    Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Cras
                    ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Cras
                    ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Pellentesque in ipsum id
                    orci porta dapibus. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna
                    dictum porta. Donec sollicitudin molestie malesuada.
                </p>
            );
        }
        return(
            <div>
                <Header
                    headingText ={
                        <h3>This is the header. This element is passed like a props data.</h3>
                    }
                    subText = {
                        headerComp
                    }
                />

              <Button
                    buttonHandler={
                        this.handleClick
                    }
                    buttonText={
                        this.state.isToggleText ? 'Hide Subtitle' : 'Show Subtitle'
                    }
                />

            </div>
        );
    }

}




render(<App/>, document.getElementById("app"));
