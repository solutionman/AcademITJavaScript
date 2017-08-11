import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="authorization">
          <p>
            <input id="inputForLoggin" inInput={this.checkInput()}></input>
          </p>
          <p>
            <button id="loginButton" onClick={this.checkAuthorization()}>Войти</button>
          </p>
        </div>
      </div>
    );

  }

    checkInput(){
      //var lettersFromInput = document.getElementById('inputForLoggin').value;
    }

    checkAuthorization(){
      //var lettersFromInput = document.getElementById('inputForLoggin').value;
      //console.log(textFromInput);
    }
}

export default App;
