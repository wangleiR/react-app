import React, { Component } from 'react';

class NumberList extends React.Component{

	constructor(props){
		super(props);
		this.state = {numbers : [1,2,3,4,5,6]};
		//this.handleClick = this.handleClick.bind(this);
	}

	// handleClick(){
	// 	const listItems = this.state.numbers.map((number) =>
	// 	     {this.state.numbers}
	// 	);
	// 	this.setState({numbers : listItems});
	// }

	render(){
		return (
			<ul>
		{this.state.numbers.map((number) =>
			<li>{this.state.numbers}</li>

			)}
		</ul>);

	}
}

	export default NumberList;
