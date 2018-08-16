import React, { Component } from 'react';

class NumberList extends Component{

	constructor(props){
		super(props);
		this.state = {numbers : [1,2,3,4,5,6]};
	}

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
