import React from 'react';
import { render } from 'react-dom'

// export default should be the 'main' exported.
// 1 export default per module.
export class Header extends React.Component{

	constructor({headerText}){
		super();
		this.state = {
			newHeaderText: headerText
		}
	}

	onChangeHeaderText() {
		this.props.changeHeaderText(this.state.newHeaderText);
	}

	onChangeHeaderTextHandler(event){
		this.setState({
			newHeaderText: event.target.value
		});
	}

	// this method invoke before the initial rendering. Setting state in this method will not cause a re-rendering because
	// this will invoke before the render method.
	componentWillMount(){
		console.log("The component will mount!");
	}

	// this method invoke after the initial rendering.
	componentDidMount(){
		console.log("The component did mount!");
	}

    componentWillReceiveProps(nextProps){
		console.log("Component will received props!" + nextProps)
	}

	componentWillUnmount(){
    	console.log("The header has been removed on the DOM");
	}

	render() {
		// we can ternary operator here in jsx
		var bool = true;

		// you can add inline style, the variable and properties should CamelCase.
		// the value should be string, and if you dont wrap it the number automatically added a suffix px.
		var headerStyle = {
			backgroundColor: '#f6f6f6',
			width: '100%',
			height: 120
		};

		// props is read-only. It is immutable
		let {headerText} = this.props;

		return(
			<div>
				<header id="siteHeader" style={headerStyle}>
					<nav>
						{headerText}
						<input type="text" value={this.state.newHeaderText} onChange={ (event) => this.onChangeHeaderTextHandler(event) } />
						<button onClick={this.onChangeHeaderText.bind(this)}> Change the header text</button>
      			</nav>
				</header>
			</div>
		);
	}

}

// set the default value of the props here using defaultProps class properties
Header.defaultProps = {
    headerText: "This is the header text section"
};

// // we are forcing to pass an element.
// Header.propTypes = {
// 	children: React.PropTypes.element.isRequired
// };
