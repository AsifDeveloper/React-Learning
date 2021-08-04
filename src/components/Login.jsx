import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
      name: 'Guest'
    };
  }

  login = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  render() {
    let { isLoggedIn, name } = this.state;
    name = isLoggedIn ? 'Asif' : name;
    // if (isLoggedIn) {
    //   return (
    //     <div>
    //       <h3>Welcome Asif</h3>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h3>Welcome Guest</h3>
    //       <button onClick={this.login}>Sign In</button>
    //     </div>
    //   );
    // }
    return (
      <div>
        <h3>Welcome {name}</h3>
        <button onClick={this.login}>Sign In</button>
      </div>
    );
  }
}

export default Login;
