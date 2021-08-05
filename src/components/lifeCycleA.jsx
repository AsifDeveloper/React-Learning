import React, { Component } from 'react';
import LifeCycleB from './lifeCycleB';

class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    console.log('LifeCycle A Constructor');
    this.state = {
      name: 'Mohamed Asif'
    };
    console.log(this.props);
  }

  udpateStateHandling = () => {
    this.setState({
      name: 'Manjunathan'
    });
  };

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycle A getDerivedStateFromPropss', state);
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('LifeCycle A shouldComponentUpdate', nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevState, prevProps) {
    console.log('LifeCycle A getSnapshotBeforeUpdate', prevState);
    return true;
  }

  componentDidUpdate(prevState, prevProps, snapshot) {
    console.log('LifeCycle A componentDidUpdate', prevState);
  }

  componentDidMount() {
    console.log('LifeCycle A ComponentDidMount');
  }

  render() {
    console.log('LifeCycle A render');
    return (
      <div>
        {' '}
        LifeCycle A<LifeCycleB />
        <button onClick={this.udpateStateHandling}>Update State</button>
      </div>
    );
  }
}

export default LifeCycleA;
