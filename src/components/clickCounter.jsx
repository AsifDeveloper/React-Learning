import React, { Component } from 'react';
import withCounter from './withCounter';

class clickCounter extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     count: 0
  //   };
  // }

  // incrementCounter = () => {
  //   this.setState(prevState => ({
  //     count: prevState.count + 1
  //   }));
  // };

  render() {
    const { count, incrementCounter } = this.props;
    return (
      <div>
        <div>Count Value: {count}</div>
        <button onClick={incrementCounter}>Hit me</button>
      </div>
    );
  }
}

export default withCounter(clickCounter);
