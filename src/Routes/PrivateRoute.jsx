import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ auth, path }) => {
  return auth ? path : <Navigate to="../login" />;
};

export default PrivateRoute;
