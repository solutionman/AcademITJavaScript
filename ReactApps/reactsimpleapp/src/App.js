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
          <input className="App-input" id="forNumber"></input>
          <button type="button" onClick={this.plisButton}> + </button>
        </div>
      </div>
      
    );

  }

    minusButton(){
      var inputNumber = document.getElementById('forNumber').value;
      console.log(' - clicked');
      --inputNumber;
      console.log(inputNumber);
    };
    plisButton(){
      var inputNumber = document.getElementById('forNumber').value;
      console.log(' + clicked');
      ++inputNumber;
      console.log(inputNumber);
    }
}

export default App;
