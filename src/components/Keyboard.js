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
      return <span key={index} className="box-span">{number}</span>
    })

    return (
      <div>
        <div>
          {firstRow}
        </div>
        <div>
          {secondRow}
        </div>
        <div>
          {thirdRow}
        </div>
        <div>
          {fourthRow}
        </div>
      </div>
    )
  }
}

export default Keyboard;