import React, { Component } from 'react';
import LifeCycleB from './lifeCycleB';

class LifeCycleA extends Component {
  constructor() {
    super();
    console.log('LifeCycle A Constructor');
  }

  static getDerivedStateFromProps() {
    console.log('LifeCycle A getDerivedStateFromProps');
  }

  componentDidMount() {
    console.log('LifeCycle A ComponentDidMount');
  }

  render() {
    console.log('LifeCycle A render');
    return (
      <div>
        {' '}
        LifeCycle A
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
