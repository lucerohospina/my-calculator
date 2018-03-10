import React, { Component } from 'react';

class Operators extends Component {
  render() {
    const listOfOperators = this.props.operators.map((operator, index)=>{
      return <li key={index} className= "operators-style">{operator}</li>
    })

    return (
      <div className= "section-operator">
        <ul className="list-style text-center">{listOfOperators}</ul>
      </div>  
    )
  }
}

export default Operators;