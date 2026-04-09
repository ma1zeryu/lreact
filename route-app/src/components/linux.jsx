import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
class Linux extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Linux</h1>
        <Link to={"/linux/homework"}>homework</Link>
        <br />
        <Link to={"/linux/terminal"}>terminal</Link>
        <Outlet />
      </React.Fragment>
    );
  }
}

export default Linux;
