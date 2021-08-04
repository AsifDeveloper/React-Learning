import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  updateCounter() {
    // this.setState(
    //   {
    //     counter: this.state.counter + 1
    //   },
    //   () => { console.log(this.state.counter) }
    // );
    this.setState(
      prevState => ({
        counter: prevState.counter + 1
      }),
      () => {
        console.log(this.state.counter);
      }
    );
  }

  updateCounterByFive() {
    this.updateCounter();
    this.updateCounter();
    this.updateCounter();
    this.updateCounter();
    this.updateCounter();
  }

  render() {
    return (
      <div>
        <p>Counter Value: {this.state.counter}</p>
        <button onClick={() => this.updateCounterByFive()}>Increment </button>
      </div>
    );
  }
}

export default Counter;
