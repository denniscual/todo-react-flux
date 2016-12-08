import React from 'react';
import { render } from 'react-dom'
import TableRow from './table-row'

// export default should be the 'main' exported.
// 1 export default per module.
export class Main extends React.Component{

	constructor(){
		// call the super method first before you can use the this keyword.
		// call this if this class is a subclass
		// super keyword is used to call functions on an object's parent.
		super();
		// statefull is define when the data used in component is coming in javascript.
		this.state = {
			data: [
					{
						id: 1001,
						name: "Irish Jane",
						initialAge: 21
					},
					{
						id: 1002,
						name: "Dennis Cual",
						initialAge: 24
					},
					{
						id: 1003,
						name: "Drish Ryo Cual",
						initialAge: 3
					}
				]
		};

	}


	render() {
		// you can add inline style, the variable and properties should CamelCase.
		// the value should be string, and if you dont wrap it the number automatically added a suffix px.
		var mainStyle = {
			backgroundColor: '#BBDEFB',
			width: '100%',
			height: 700
		};

		var heading = {
			padding: 0,
			margin: '0 0 25px 0',
			textAlign: 'center'
		};

		// map function return a newly array object and we set it to this let data.
		let tableRow = this.state.data.map((person, i) =>
									 <TableRow greet={this.onGreet}
									 	prefText="This is the their I.D "
									 	key={i}
									 	data={person}
									 />
								);

		/* the key attributes is used for performance boost,
		 lets say the array is changed, instead of re-rendering entire list,
		 the element that modified is the only re-render.
		 we are using map method to pass each object and their key to the table row component.
		*/``
		return(
			<div>
				<main id="siteMain" style={mainStyle}>
					<h1 style={heading}>This is the main content.</h1>
					<table>
						<tbody>
							{tableRow}
						</tbody>
					</table>
					{this.props.children}
				</main>
			</div>
		);
	}

}
