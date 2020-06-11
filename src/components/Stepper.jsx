import React, { Component } from 'react'
import './stepper.css';

export default class Stepper extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    }
  }

  onChange = (event) => {
    // if (typeof(event.target.value) === Number) {
      const newValue = event.target.value;
      this.setState({ count: newValue })
    // } else {
    //   alert('Enter a number fool!')
    // }
  }

  onIncrementClick = () => {
    let newCount = this.state.count;
    newCount++;
    this.setState({ count: newCount });
  }

  onDecrementClick = () => {
    let newCount = this.state.count;
    newCount--;
    this.setState({ count: newCount });
  }

  render() {
    return (
      <div>
        <div className="stepper">
          <button onClick={ this.onIncrementClick }>+</button>
          <input type="number" value={ this.state.count } onChange={ this.onChange }></input>
          <button onClick={ this.onDecrementClick }>-</button>
        </div>
      </div>
    )
  }
}
