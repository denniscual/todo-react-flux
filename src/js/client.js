import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/header'
import { Main } from './components/main/main'
import { Footer } from './components/footer'



class App extends React.Component {

	// constructor is the right place to initialize a state property.
	constructor(){
		super();
		this.state = {
			initialHeaderText: "This is the header",
			stateHeader: true
		};
	}

	changeHeaderText(newText) {
        this.setState({
            initialHeaderText: newText
        });
    }

	onChangeRemoveHeader(){
		this.setState({
			stateHeader: !this.state.stateHeader
		});
	}

	// all of the element inside this should be wrapped only in one div.. because this will only return
	// a single child element.
    render() {
		let headerComp = "";
		if(this.state.stateHeader){
			headerComp = (
				<Header headerText={this.state.initialHeaderText} changeHeaderText={this.changeHeaderText.bind(this)}/>
            );
        }

        return (
			<div>
				{ headerComp }
				<Main>
					<button onClick={this.onChangeRemoveHeader.bind(this)}>Removed the Header!</button>
				</Main>
				<Footer footerText="This is a footer section."/>
			</div>
        );
    }
}


// naming convention of React, the name of component should starts in uppercase.
render(<App/>, document.getElementById('app'));


// es6 tutorial

class Animal {
	// this is a class public properties. you should include a plugin so that it will work.
	count = 1;
	constructor(name){
		this._name = name;
	}


	set animalName(newName){
		if(newName){
			this._name = newName;
		}
	}

	get animalName(){
		return this._name;
	}

	shoutWord() {
		console.log('hello world');
	}
}

class Bird extends Animal {
	constructor(){
		let count = 1;
		super('birdy');
		console.log(this.animalName);
		this.shoutWord();
		console.log(this.count);
	}
}

const birdy = new Bird();
