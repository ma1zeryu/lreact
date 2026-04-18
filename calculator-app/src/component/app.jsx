import React, { Component, useEffect, useState } from "react";
import NavBar from "./navBar";
import { Route, Routes } from "react-router-dom";
import Home from "./content/home";
import Calculator from "./content/calculator";
import Login from "./content/login";
import Register from "./content/register";
import NotFound from "./content/notFound";
import { Navigate } from "react-router-dom";
import $ from "jquery";

const App = () => {
  const [is_login, setIsLogin] = useState(true);
  const [username, setUsername] = useState("jyp");
  useEffect(() => {
    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/calculator/get_status/",
      type: "get",
      success: (resp) => {
        if (resp.result === "success") {
          setIsLogin(true);
          setUsername(resp.username);
        } else {
          setIsLogin(true);
        }
      },
    });
  }, []);
  return (
    <React.Fragment>
      <NavBar is_login={is_login} username={username} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/calculator"
            element={
              is_login ? <Calculator /> : <Navigate replace to="/login" />
            }
          />
          <Route
            path="/login"
            element={is_login ? <Navigate replace to="/home" /> : <Login />}
          />
          <Route
            path="/register"
            element={is_login ? <Navigate replace to="/home" /> : <Register />}
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
