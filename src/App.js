import React, { Component } from 'react';
import Keyboard from './components/Keyboard';
import Operators from './components/Operators';
import Screen from './components/Screen';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="container mt-4">
        <div className="row screen border border-info">
            <Screen
              num='10'
            />
          
        </div>
        <div className="row keyboard">
          <Keyboard 
            numbers={["1","2","3"]}
            numbers2={["4","5","6"]}
            numbers3={["7","8","9"]}
            numbers4={["c","0","."]}
         />
         <Operators
           operators={["<-", "+", "-", "x", "/" , "="]}
          />
        </div>
      </div>
    );
  }
}

export default App;
