//main page so far
//imports
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './fonts.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Header/> 			
				<div id="main">
          {this.props.children}
        </div>
  </div>
    );
  }
}

export default App;