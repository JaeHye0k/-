import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RockScissorPaper from "./pages/RockScissorPaper";
import RockScissorPaperClass from "./pages/RockScissorPaperClass";
import Weather from "./pages/Weather";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/rock-scissor-paper" element={<RockScissorPaper />} />
        <Route
          path="/rock-scissor-paper-class"
          element={<RockScissorPaperClass />}
        />
        <Route path="/weather" element={<Weather />}></Route>
      </Routes>
    </div>
  );
};

export default App;
