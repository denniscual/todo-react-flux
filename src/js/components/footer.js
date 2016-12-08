import React from 'react';
import { render } from 'react-dom';

var footerStyle = {
		backgroundColor: '#B2DFDB',
		width: '100%',
		height: 120
	};

// export default should be the 'main' exported.
// 1 export default per module.
// if the component doesnt use state, it is a stateless component
export const Footer = ({footerText}) =>
	// you can add inline style, the variable and properties should CamelCase.
	// the value should be string, and if you dont wrap it the number automatically added a suffix px.
		<div>
			<footer id="siteFooter" style={footerStyle}>
				{ footerText }
			</footer>
		</div>

