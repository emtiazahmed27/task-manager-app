import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../authContext/AuthProvider";

const PublicRoute = ({ children }) => {
  const data = useContext(AuthContext);
  const isLoggedIn = data ? true : false;
  const location = useLocation();
  const { from } = location.state || {};
  return isLoggedIn ? <Navigate to={from ? from : "/"} /> : children;
};

export default PublicRoute;
