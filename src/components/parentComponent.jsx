import React, { Component } from 'react';
import ChildComponent from './childComponent';

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello I am parent'
    };
  }

  greetParent(value) {
    alert(`I am a parent of my ${value}`);
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>{message}</h1>
        <ChildComponent
          message="Parent"
          greetParentHandler={this.greetParent}
        />
      </div>
    );
  }
}

export default ParentComponent;
