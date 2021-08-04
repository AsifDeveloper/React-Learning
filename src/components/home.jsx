import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      content1: 'In Mindtree everything is possible',
      content2: 'It is a Larsen & toubro group of company'
    };
  }
  render() {
    const { content1, content2 } = this.state;
    const { name, company, position, children } = this.props;
    return (
      <div>
        <h2>
          {name} has recently joined {company} as a {position}
        </h2>
        <h3>{children}</h3>
        <h5>{content1}</h5>
        <h6>{content2}</h6>
      </div>
    );
  }
}

export default Home;
