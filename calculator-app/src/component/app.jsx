import React, { Component } from "react";
import NavBar from "./navBar";
import { Route, Routes } from "react-router-dom";
import Home from "./content/home";
import Calculator from "./content/calculator";
import Login from "./content/login";
import Register from "./content/register";
import NotFound from "./content/notFound";
import { Navigate } from "react-router-dom";
import $ from "jquery";

class App extends Component {
  state = {
    is_login: true,
    username: "jyp",
  };

  componentDidMount() {
    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/calculator/get_status/",
      type: "get",
      success: (resp) => {
        if (resp.result === "success") {
          this.setState({
            is_login: true,
            username: resp.username,
          });
        } else {
          this.setState({
            // is_login: false,
          });
        }
      },
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar is_login={this.state.is_login} username={this.state.username} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/calculator"
              element={
                this.state.is_login ? (
                  <Calculator />
                ) : (
                  <Navigate replace to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={
                this.state.is_login ? (
                  <Navigate replace to="/home" />
                ) : (
                  <Login />
                )
              }
            />
            <Route
              path="/register"
              element={
                this.state.is_login ? (
                  <Navigate replace to="/home" />
                ) : (
                  <Register />
                )
              }
            />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
