import React, { Component } from 'react';
import axios from 'axios';

class showList extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      hasError: false
    };
  }

  render() {
    const { posts } = this.state;
    if (!this.state.hasError) {
      return (
        <div>
          Posts Lists
          {posts.length > 0
            ? posts.map(elem => <div> {elem.title} </div>)
            : null}
        </div>
      );
    }
    return (
      <div>
        <h1 />
      </div>
    );
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response);
        this.setState({
          posts: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default showList;
