import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};

  render_calculator = () => {
    if (this.props.is_login) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/calculator">
            计算器
          </Link>
        </li>
      );
    } else {
      return "";
    }
  };

  render_user = () => {
    if (this.props.is_login) {
      return (
        <React.Fragment>
          <li className="nav-item">
            <Link
              className="nav-link"
              aria-current="page"
              to="/login"
              style={{ cursor: "pointer" }}
            >
              {this.props.username}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              退出
            </Link>
          </li>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/login">
              登录
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              注册
            </Link>
          </li>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Web
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  首页
                </Link>
              </li>
              {this.render_calculator()}
            </ul>
            <ul className="navbar-nav">{this.render_user()}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
