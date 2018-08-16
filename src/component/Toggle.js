
import React, { Component } from 'react';

//事件处理
class Toggle extends  Component{

	constructor(props){
		super(props);
		this.state = {isToggleOn : true};
		// 这个绑定是必要的，使`this`在回调中起作用
		this.handleClick = this.handleClick.bind(this);
	}


	handleClick(){
		this.setState(prevState => ({
			isToggleOn : !prevState.isToggleOn
		}));
	}

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }

}

export default Toggle; 