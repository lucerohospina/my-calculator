import React, { Component } from 'react';
import Keyboard from './components/Keyboard';
import Operators from './components/Operators';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
         <Keyboard 
           numbers={["1","2","3"]}
           numbers2={["4","5","6"]}
           numbers3={["7","8","9"]}
           numbers4={["C","0","."]}
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
