import React, { Component } from 'react';

class Keyboard extends Component {
  render() {
    const firstRow = this.props.numbers.map((number, index) => {
      return <span key={index}>{number}</span>
    })
    const secondRow = this.props.numbers2.map((number, index) => {
      return <span key={index}>{number}</span>
    })
    const thirdRow = this.props.numbers3.map((number, index) => {
      return <span key={index}>{number}</span>
    })
    const fourthRow = this.props.numbers3.map((number, index) => {
      return <span key={index}>{number}</span>
    })

    return (
      <div>
        <div>
          <span>{firstRow}</span>
        </div>
        <div>
          <span>{secondRow}</span>
        </div>
        <div>
          <span>{thirdRow}</span>
        </div>
        <div>
          <span>{fourthRow}</span>
        </div>
      </div>
    )
  }
}

export default Keyboard;