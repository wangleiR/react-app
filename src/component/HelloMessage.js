
import React, { Component } from 'react';

class HelloMessage extends Component {
	render() {
		return (
			<div>
				<h1>Hello {this.props.value}</h1>
			</div>
			);
		}
	}

export default HelloMessage;