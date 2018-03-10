import React, { Component } from 'react';

class Operators extends Component {
  render() {
    const listOfOperators = this.props.operators.map((operator, index)=>{
      return <li key={index}>{operator}</li>
    })

    return (
      <div>
        <ul className="list-style">{listOfOperators}</ul>
      </div>  
    )
  }
}

export default Operators;