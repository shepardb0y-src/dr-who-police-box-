import React, { Component } from "react";

class Jeporady extends Component {
  state = {
    visible: true,
  };

  handleClick = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    // console.log(this.props.game[0]);
    const buttonText = !this.state.visible ? "hide" : "show";
    // console.log(this.props.game[0]);

    return (
      <div className="answer-box">
        <button type="submit" onClick={this.handleClick}>
          {buttonText}
        </button>
        {!this.state.visible ? (
          <h2>Answer:{this.props.game[0].answer} </h2>
        ) : null}
      </div>
    );
  }
}

export default Jeporady;
