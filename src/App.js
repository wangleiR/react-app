import React, { Component } from 'react';
import logo from './image/logo.svg';
import './sass/App.css';
import ReactComponentApp from './component/ReactComponentApp';

class App extends Component {

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

          <ReactComponentApp />

          <footer className="App-footer">
              <h1 className="App-footer-footer-style">the footer</h1>
          </footer>
      </div>
      );
  }
}

export default App;
