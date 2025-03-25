import React, { Component } from "react";

class UserGreeting extends Component {
  render() {
    return <h1>Hello, {this.props.firstName} {this.props.lastName}!</h1>;
  }
}

export default UserGreeting;
