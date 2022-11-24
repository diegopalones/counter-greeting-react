import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: this.props.initialValue,
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  incrementByTwo = () => {
    this.setState({ counter: this.state.counter + 2 });
  };
  render() {
    return (
      <div>
        <span>{this.state.counter}</span><br></br>
        <button onClick={this.increment}>suma 1</button> <br></br>
        <button onClick={this.decrement}>Resta 1</button> <br></br>
        <button onClick={this.incrementByTwo}>Suma 2</button>
      </div>
    );
  }
}