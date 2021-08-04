import React, { Component } from 'react';

class footer extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome to Mindtree'
    };
  }

  changeMessage = () => {
    this.setState({
      message: 'A Larsen & Toubro group of company'
    });
  };
  render() {
    return (
      <div>
        <p>
          {this.props.name} {this.state.message}
        </p>
        <button onClick={this.changeMessage}>Subscribe</button>
      </div>
    );
  }
}

export default footer;
