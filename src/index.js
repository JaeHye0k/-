import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Index from "./pages/Index";
import RockScissorPaper from "./pages/RockScissorPaper";
import RockScissorPaperClass from "./pages/RockScissorPaperClass";
import Weather from "./pages/Weather";
import ShoppingMall from "./pages/ShoppingMall";
import ReduxCounter from "./pages/ReduxCounter";
import PhoneBook from "./pages/PhoneBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store1 from "./redux/ReduxCounter/store1";
import store2 from "./redux/PhoneBook/store2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/rock-scissor-paper" element={<RockScissorPaper />} />
      <Route
        path="/rock-scissor-paper-class"
        element={<RockScissorPaperClass />}
      />
      <Route path="/weather" element={<Weather />} />
      <Route path="/shopping-mall/*" element={<ShoppingMall />} />

      <Route
        path="/redux-counter"
        element={
          <Provider store={store1}>
            <ReduxCounter />
          </Provider>
        }
      />
      <Route
        path="/phone-book"
        element={
          <Provider store={store2}>
            <PhoneBook />
          </Provider>
        }
      />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
