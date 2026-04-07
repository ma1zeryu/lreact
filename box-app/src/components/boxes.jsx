import React, { Component } from "react";
import Box from "./box";

class Boxes extends Component {
  state = {
    boxes: [
      { id: 1, x: 0 },
      { id: 2, x: 0 },
      { id: 3, x: 0 },
      { id: 4, x: 0 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.boxes.map((box) => (
          <Box key={box.id} />
        ))}
      </React.Fragment>
    );
  }
}

export default Boxes;
