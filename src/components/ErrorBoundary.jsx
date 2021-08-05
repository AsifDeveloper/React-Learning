import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    console.log('error::::', error);
    console.log('info::::', info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h3>Sorry! Something Went Wrong!!</h3>
        </div>
      );
    } else {
      console.log('props:::', this.props);
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
