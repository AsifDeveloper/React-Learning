import React, { Component } from 'react';
import withCounter from './withCounter';

class hoverCounter extends Component {
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
        <div>Hover Value: {count}</div>
        <div onMouseOver={incrementCounter}>Hover me</div>
      </div>
    );
  }
}

export default withCounter(hoverCounter);
