import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./ShoppingMallReduxPages/ProductAll";
import Login from "./ShoppingMallReduxPages/Login";
import NavBar from "../component/ShoppingMallReduxComponent/NavBar";
import PrivateRoute from "../Routes/PrivateRoute";
import style from "../styles/ShoppingMallRedux/ShoppingMallRedux.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductBuy from "./ShoppingMallReduxPages/ProductBuy";
import ProductDetail from "./ShoppingMallReduxPages/ProductDetail";
import SideBar from "../component/ShoppingMallReduxComponent/SideBar";

const url = {
  main: "/",
  login: "/login",
  detail: "/products/:id",
  buy: "/products/:id/buy",
};
const ShoppingMall = () => {
  return (
    <div className={style.IBM_font}>
      <NavBar />
      <main>
        <Routes>
          <Route path={url.main} element={<ProductAll />} />
          <Route path={url.login} element={<Login />} />
          <Route
            path={url.detail}
            element={<PrivateRoute path={<ProductDetail />} />}
          />
          <Route
            path={url.buy}
            element={<PrivateRoute path={<ProductBuy />} />}
          />
        </Routes>
      </main>
      <aside>
        <SideBar />
      </aside>
    </div>
  );
};

export default ShoppingMall;
