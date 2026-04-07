import React, { Component } from "react";

class Box extends Component {
  // state = {
  //   x: this.props.x,
  //   colors: ["red", "green", "blue"],
  // };

  render() {
    return (
      <React.Fragment>
        <div style={this.getStyles()}>{this.toString()}</div>
        <button
          onClick={() => this.props.handleClickLeft(this.props.box.id, 10)}
          className="btn btn-primary m-2"
        >
          left
        </button>
        <button
          onClick={() => this.props.handleClickRight(this.props.box.id, 20)}
          className="btn btn-success m-2"
        >
          right
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  toString() {
    const x = this.props.box.x;
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
      marginLeft: this.props.box.x,
    };

    if (this.props.box.x === 0) styles.backgroundColor = "orange";
    return styles;
  }
}

export default Box;
