import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ auth, path }) => {
  if (!auth) localStorage.clear();
  return auth ? path : <Navigate to="../login" />;
};

export default PrivateRoute;
