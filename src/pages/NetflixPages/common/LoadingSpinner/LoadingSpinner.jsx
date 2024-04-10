import React from "react";
import { Spinner } from "react-bootstrap";
import "./LoadingSpinner.style.css";

const LoadingSpinner = () => {
  return (
    <Spinner className="loading-spinner" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default LoadingSpinner;
