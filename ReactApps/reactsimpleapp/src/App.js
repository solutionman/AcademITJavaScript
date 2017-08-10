import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
            <Nav>
              <NavItem eventKey={1} href="#">Home</NavItem>
              <NavItem eventKey={2} href="#">Contact</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated Link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Header>
        </Navbar>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          Введите число от 1 до 9.
        </p>
        <div>
          <button type="button" onClick={this.minusButton}> - </button>
          <input className="App-input" id="forNumber" onInput={this.checkNumber}></input>
          <button type="button" onClick={this.plusButton}> + </button>
        </div>
        <p id="messageForUser">
        </p>
      </div>
      
    );

  }

    //document.getElementById('forNumber').addEventListener();
    checkNumber(){
      var checkedNumber = document.getElementById('forNumber').value;
      console.log(checkedNumber);

      var messageForUser = document.getElementById('messageForUser');

      if(checkedNumber > 1 && checkedNumber < 9){     
      messageForUser.innerText = '';
      } else {
        console.log('wrong symbol');        
        messageForUser.innerText = 'вы должны ввести число от 1 до 9';
        //document.getElementById('forNumber').value = 5;
      }
    }

    minusButton(){
      var inputNumber = document.getElementById('forNumber').value;
      //console.log(' - clicked');
      if(inputNumber <= 1){
        inputNumber = 1;
      } else {
        --inputNumber;
      }
      //console.log(inputNumber);
      document.getElementById('forNumber').value = inputNumber;
    };
    plusButton(){
      var inputNumber = document.getElementById('forNumber').value;
      //console.log(' + clicked');
      if(inputNumber >= 9){
        inputNumber = 9;
      } else {
        ++inputNumber;
      }
      //console.log(inputNumber);
      document.getElementById('forNumber').value = inputNumber;
    }
}

export default App;
