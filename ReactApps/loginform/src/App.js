import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      customVal: ''
    };
  }
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
            <input id="inputForLoggin" value={this.state.customVal} onChange={ (e) => this.checkInput(e)}></input>
          </p>
          <p>
            <button id="loginButton" onClick={(e) => this.checkAuthorization(e)}>Войти</button>
          </p>
        </div>
      </div>
    );

  }

    checkInput(e){
      const val = e.target.value;
      this.setState({customVal: val});
    }

    checkAuthorization(e){
      const val = this.state.customVal;
      if(val != null){
        console.log(val);
        var divForRemoving = document.getElementById('authorization');
        console.log(divForRemoving);
        //document.removeChild.getElementById('authorization');
        //document.getElementById('authorization').remove;
      }
      //var lettersFromInput = document.getElementById('inputForLoggin').value;
      //console.log(textFromInput);
    }
}

export default App;
