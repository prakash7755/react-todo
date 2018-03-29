import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './loginComponent/login';
import Register from './registerComponent/register';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Todo</h1>
        </header>
        <div className="col col-md-4" id="login"></div>
        <div className="col col-md-6" id="register"></div>

      </div>
    );
  }
}

export default App;


