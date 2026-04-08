import React, { Component } from "react";
import NavBar from "./navbar";
import Boxes from "./boxes";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <NavBar />
          <Boxes />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
