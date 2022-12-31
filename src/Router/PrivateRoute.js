import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../authContext/AuthProvider";

const PrivateRoute = ({ children }) => {
  const data = useContext(AuthContext);
  const isLoggedIn = data ? true : false;
  const location = useLocation();
  const { pathname } = location || {};
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: pathname }} />
  );
};

export default PrivateRoute;
