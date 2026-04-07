import React, { Component } from "react";
import Box from "./box";

class Boxes extends Component {
  state = {
    boxes: [
      { id: 1, x: 1 },
      { id: 2, x: 2 },
      { id: 3, x: 3 },
      { id: 4, x: 4 },
    ],
  };

  handleDelete = (boxId) => {
    const boxes = this.state.boxes.filter((b) => b.id !== boxId);
    this.setState({ boxes });
  };

  handleReset = () => {
    const boxes = this.state.boxes.map((b) => {
      return {
        id: b.id,
        x: 0,
      };
    });
    this.setState({ boxes });
  };

  handleClickLeft = (boxId, step) => {
    const boxes = this.state.boxes.filter((box) => {
      if (box.id === boxId) box.x -= step;
      return box;
    });
    this.setState({
      boxes,
    });
  };

  handleClickRight = (boxId, step) => {
    const boxes = this.state.boxes.filter((box) => {
      if (box.id === boxId) box.x += step;
      return box;
    });
    this.setState({
      boxes,
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.boxes.map((box) => (
          <Box
            key={box.id}
            box={box}
            id={box.id}
            onDelete={this.handleDelete}
            handleClickLeft={this.handleClickLeft}
            handleClickRight={this.handleClickRight}
          />
        ))}
        <br />
        <button className="btn btn-info m-2" onClick={this.handleReset}>
          Reset
        </button>
      </React.Fragment>
    );
  }
}

export default Boxes;
