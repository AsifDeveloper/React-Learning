import React, { Component } from 'react';

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      gender: '',
      IsMarried: false
    };
  }

  genderHandleChange = event => {
    this.setState({
      gender: event.target.value
    });
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleAgeChange = event => {
    this.setState({
      age: event.target.value
    });
  };

  submitData = data => {
    console.log(this.state);
    data.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitData}>
          <div>
            <label>Username</label>
            <input type="text" onChange={this.handleNameChange} />
          </div>
          <div>
            <label>Age</label>
            <input type="text" onChange={this.handleAgeChange} />
          </div>
          <div>
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={this.genderHandleChange}
            />
            <label>Female</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={this.genderHandleChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          <div />
        </form>
      </div>
    );
  }
}

export default Forms;
