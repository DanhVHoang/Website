//main page so far
//imports
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello this is Danh  Hoang</h1>
        </header>
        <p className="App-intro">
          To get started, consult alice lam at alicelam.co
        </p>
      </div>
    );//end return 
  }//end render
}//end class App 

export default App;
