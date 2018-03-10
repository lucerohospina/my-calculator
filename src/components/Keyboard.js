import React, { Component } from 'react';

class Keyboard extends Component {
  render() {
    const firstRow = this.props.numbers.map((number, index) => {
      return <span key={index} className="box-span">{number}</span>
    })
    const secondRow = this.props.numbers2.map((number, index) => {
      return <span key={index} className="box-span">{number}</span>
    })
    const thirdRow = this.props.numbers3.map((number, index) => {
      return <span key={index} className="box-span">{number}</span>
    })
    const fourthRow = this.props.numbers4.map((number, index) => {

      return <span key={index} className="box-span2 font-weight-bold">{number}</span>
    })

    return (
      <div className = "ml-2">
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