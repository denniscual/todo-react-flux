import React from 'react';
import { render } from 'react-dom'

export default class TableRow extends React.Component{


	constructor(props){
		// always call this super method. To execute parent constructor.
		super();
		// you cant use props in here unless you specify it to this constructor
		this.state = {
			age: props.data.initialAge,
			name: props.data.name,
			updatedName: props.data.name
		};

	}

	// we will add event listener to the button
	onMakeOlder(){
		// to change state of the component and value, call the setState function coming from react component.
		// here we access again the age propert of state and re-defined the data.
		this.setState({
			age: this.state.age + 2
		});
	}

	onChangeNameHandler(event){
		this.setState({
			name: event.target.value
		});
	}

	onClickChangeName(){
		this.setState({
			updatedName: this.state.name
		});
		console.log(this.props.data);
	}



    render() {

		let typeStyle = {
			visibility: 'visible'
		};

		let padding = {
			paddingRight: 25,
			paddingBottom: 15
		};

		let {prefText, greet} = this.props;

		// props object is coming rom React.componenet
		// props is a read-only properties. props is a data passed to a component coming from outside.
		let {id,name} = this.props.data;

		return(

				<tr>
					<td style={padding}>{ prefText } { id }</td>
					<td style={padding}>{ this.state.updatedName }</td>
					<td style={padding}>{ this.state.age }</td>
					<td style={padding}><button onClick={ this.onMakeOlder.bind(this) }>Make me older</button></td>
					<td>
						<input type="text" style={typeStyle} value={this.state.name}
							onChange={ (event) => this.onChangeNameHandler(event) }
						/>
						<button onClick={this.onClickChangeName.bind(this)}> Update the name </button>
					</td>
				</tr>


		);
	}
}


// propTypes is used for validation. This will ensure that the data you passed on this variables is correct.
// javascript is not type sensitive, you can dynamically changed the data type of the variable.
TableRow.propTypes = {
	prefText: React.PropTypes.string,
	data: React.PropTypes.object
};
