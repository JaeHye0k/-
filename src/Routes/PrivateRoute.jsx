import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ path }) => {
  const auth = useSelector((state) => state.auth.auth);
  if (!auth) localStorage.clear();
  return auth ? path : <Navigate to="../login" />;
};

export default PrivateRoute;
