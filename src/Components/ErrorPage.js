import React, { Component } from 'react';

class ErrorPage extends Component {
  state = { throwError: false };

  handleClick = () => {
    this.setState({ throwError: true });
  };

  render() {
    if (this.state.throwError) {
      throw new Error('This is a simulated error.');
    }

    return (
      <div>
        <h1>Error Testing Page</h1>
        <button onClick={this.handleClick}>Simulate Error</button>
      </div>
    );
  }
}

export default ErrorPage;
