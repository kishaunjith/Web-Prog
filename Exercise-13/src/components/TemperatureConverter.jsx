import React, { Component } from "react";

class TemperatureConverter extends Component {
  constructor() {
    super();
    this.state = { celsius: "", fahrenheit: "" };
  }

  convertToFahrenheit = (e) => {
    const celsius = e.target.value;
    this.setState({ celsius, fahrenheit: (celsius * 9/5 + 32).toFixed(2) });
  };

  render() {
    return (
      <div>
        <input type="number" value={this.state.celsius} onChange={this.convertToFahrenheit} placeholder="Celsius" />
        <p>Fahrenheit: {this.state.fahrenheit}</p>
      </div>
    );
  }
}

export default TemperatureConverter;
