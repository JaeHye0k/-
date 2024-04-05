import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "../layout/NetflixLayout/AppLayout";

const Netflix = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} />
    </Routes>
  );
};

export default Netflix;
