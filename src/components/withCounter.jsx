import React, { Component } from 'react';

const withCounter = WrappedComponent => {
  class WithCounter extends React.Component {
    constructor() {
      super();

      this.state = {
        count: 0
      };
    }

    incrementCounter = () => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    };

    render() {
      return (
        <WrappedComponent
          incrementCounter={this.incrementCounter}
          count={this.state.count}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
