import React, { Component } from 'react';
import HelloMessage from './HelloMessage.js';
import Clock from './Clock.js';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Calculator from './Calculator';

class ReactComponentApp extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: "Today"
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }


    render() {
        return (
           <div>
                <HelloMessage value={this.state.value} />
                <Clock />
                <Toggle />
                <LoginControl />
                <Calculator />
           </div>

        );
    }
}

export default ReactComponentApp;
