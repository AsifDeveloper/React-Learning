import React, { Component } from 'react';

class LifeCycleB extends Component {
  constructor() {
    super();
    console.log('LifeCycle B Constructor');
  }

  static getDerivedStateFromProps() {
    console.log('LifeCycle B getDerivedStateFromProps');
  }

  componentDidMount() {
    console.log('LifeCycle B ComponentDidMount');
  }

  render() {
    console.log('LifeCycle B render');
    return <div>LifeCycle B</div>;
  }
}

export default LifeCycleB;
