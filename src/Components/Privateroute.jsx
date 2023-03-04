import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { state } from "../functions";

const Privateroute = () => {
  if (state) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default Privateroute;
