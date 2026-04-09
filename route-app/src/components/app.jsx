import React, { Component } from "react";
import NavBar from "./navbar";
import Home from "./home";
import Linux from "./linux";
import Django from "./django";
import Web from "./web";
import NotFound from "./notFound";
import WebContent from "./webContent";
import { Routes, Route, Navigate } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linux" element={<Linux />}>
            <Route path="homework" element={<h4>homework</h4>}></Route>
            <Route path="terminal" element={<h4>terminal</h4>}></Route>
          </Route>
          <Route path="/web" element={<Web />} />
          <Route path="/web/content/:chapter" element={<WebContent />} />
          <Route path="/django" element={<Django />} />
          <Route path="/404" element={<NotFound />}></Route>
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
