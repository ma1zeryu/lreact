import React, { Component } from "react";

class Box extends Component {
  state = {
    x: 0,
    colors: ["red", "green", "blue"],
  };

  handleClickLeft = (step) => {
    this.setState({
      x: this.state.x - step,
    });
  };

  handleClickRight = (step) => {
    this.setState({
      x: this.state.x + step,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div style={this.getStyles()}>{this.toString()}</div>
        <button
          onClick={() => this.handleClickLeft(10)}
          className="btn btn-primary m-2"
        >
          left
        </button>
        <button
          onClick={() => this.handleClickRight(20)}
          className="btn btn-success m-2"
        >
          right
        </button>
        {this.state.colors.map((color) => (
          <div key={color}>{color}</div>
        ))}
      </React.Fragment>
    );
  }

  toString() {
    const { x } = this.state;
    return `x: ${x}`;
  }

  getStyles() {
    let styles = {
      width: "50px",
      height: "50px",
      backgroundColor: "lightblue",
      textAlign: "center",
      lineHeight: "50px",
      borderRadius: "5px",
      marginLeft: this.state.x,
    };

    if (this.state.x === 0) styles.backgroundColor = "orange";
    return styles;
  }
}

export default Box;
