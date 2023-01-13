import React from "react";
import { RouteObject } from "react-router-dom";
import Login from "../components/Login";

const LoginRouters: RouteObject = {
  path: "/login",
  element: <Login />,
};

export default LoginRouters;
