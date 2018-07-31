
import React, { Component } from 'react';

//状态和生命周期
class Clock extends React.Component{

	constructor(props){
		super(props);
		this.state = { date : new Date()};
	}

	//生命周期钩子
	componentDidMount(){
		this.timerID = setInterval(
				()=>this.tick(),
				1000
			);
	}

	componentWillUnmount(){
		clearInterval(this.timerID);
	}


	tick(){
		this.setState({
			date : new Date()
		});
	}

	render(){
		return (
			<div>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

export default Clock;