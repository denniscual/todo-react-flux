//@flow
import React from 'react';
import { render } from 'react-dom';

import {Header} from './components/header';
import Button from './components/button';



class App extends React.Component{

    // setting the data type of the properties of state
    state: {
      isToggleText: boolean,
      isToggleSubtitle: boolean
    };
    // datatype of handleclick
    handleClick: () => void;


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

// let arrayObject: Array<number> = [1,2,3,4,'five'];
// arrayObject.forEach((item) => console.log(item));

interface IBar{
  bar(): string;
}

// creating an interface - to define a contract to the class which will implement this interface.
interface IFoolable extends IBar{
  foo(): string;
  bar(): string;
}

class Bar {
  foo() {
    return 'call';
  }
  bar() {
    return 'bar';
  }
}
// implementing the foolable interface on this class
(new Bar: IFoolable);



class Program<T>{

  isEqual: boolean;
  name: T

  constructor(name: T){
    this.name = name;
    this.isEqual = Calculator.isEqualTo(1, 1);
    console.log(this.isEqual ? 'The two values are equal.' : 'The two values are not equal.');
  }

}

class Calculator{

  static isEqualTo<T>(val1: T, val2: T): boolean{
    return val1 === val2;
  }

}

let program: Program<string> = new Program("hello");
