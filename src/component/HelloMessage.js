
import React, { Component } from 'react';

class HelloMessage extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello {this.props.value}</h1>
			</div>
			);
		}
	}

export default HelloMessage;