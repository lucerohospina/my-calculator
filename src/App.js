import React, { Component } from 'react';
import './App.css';
import Screen from './components/Screen.js';

class App extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center mt-4">
       
          <div className="screen border border-info">
            <Screen
              num='10'
            />
          </div>
    
      </div>
    );
  }
}

export default App;
