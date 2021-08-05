import React, { Component } from 'react';
import axios from 'axios';

class postForm extends Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      title: '',
      body: ''
    };
  }

  submitHandler = event => {
    event.preventDefault();
    console.log(this.state);

    axios
      .post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(res => {
        alert('User form has been successfully submitted');
        event.preventDefault();
        console.log('response:::::', res);
      })
      .catch(error => {
        console.log('error::::::::', error);
      });
  };

  updateHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <h1>Post User Data</h1>
        <div>
          <form onSubmit={this.submitHandler}>
            <div>
              <label name="User ID">User ID</label>
              <input
                type="text"
                value={userId}
                name="userId"
                onChange={this.updateHandler}
              />
            </div>
            <div>
              <label name="User ID">Title</label>
              <input
                type="text"
                value={title}
                name="title"
                onChange={this.updateHandler}
              />
            </div>
            <div>
              <label name="User ID">Body</label>
              <input
                type="text"
                value={body}
                name="body"
                onChange={this.updateHandler}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default postForm;
