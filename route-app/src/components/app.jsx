import React, { Component } from "react";
import NavBar from "./navbar";
import Home from "./home";
import Linux from "./linux";
import Django from "./django";
import Web from "./web";
import NotFound from "./notFound";
import { Routes, Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linux" element={<Linux />} />
          <Route path="/web" element={<Web />} />
          <Route path="/django" element={<Django />} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
