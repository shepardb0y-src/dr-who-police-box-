import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  handleClicki = (e) => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleClickd = (e) => {
    console.log("present");
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClicki}>Score Increase:</button>
        <button onClick={this.handleClickd}>Score decrease:</button>
      </div>
    );
  }
}

export default Counter;
