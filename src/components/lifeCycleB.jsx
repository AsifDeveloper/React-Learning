import React, { Component } from 'react';

class LifeCycleB extends Component {
  constructor() {
    super();
    console.log('LifeCycle B Constructor');
  }

  static getDerivedStateFromProps() {
    console.log('LifeCycle B getDerivedStateFromProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('LifeCycle B shouldComponentUpdate', nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevState, prevProps) {
    console.log('LifeCycle B getSnapshotBeforeUpdate', prevState);
    return true;
  }

  componentDidUpdate(prevState, prevProps, snapshot) {
    console.log('LifeCycle B componentDidUpdate', prevState);
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
