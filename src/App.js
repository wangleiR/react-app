import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloMessage from './component/HelloMessage.js';
import Clock from './component/Clock.js';
import Toggle from './component/Toggle';
import LoginControl from './component/LoginControl';
import Calculator from './component/Calculator';

class Bpp extends Component {

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
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload. 
          </p>

          <HelloMessage value={this.state.value} />
          <Clock />
          <Toggle />

          <LoginControl />
          <Calculator />

          <footer className="App-footer">
              <h1 className="App-footer-footer-style">the footer</h1>
          </footer>
      </div>
      );
  }
}



export default Bpp;
