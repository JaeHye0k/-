import React, { useState } from "react";
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
  const [auth, setAuth] = useState(false);

  return (
    <div className={style.IBM_font}>
      <NavBar auth={auth} setAuth={setAuth} />
      <main>
        <Routes>
          <Route path={url.main} element={<ProductAll auth={auth} />} />
          <Route path={url.login} element={<Login setAuth={setAuth} />} />
          <Route
            path={url.detail}
            element={<PrivateRoute auth={auth} path={<ProductDetail />} />}
          />
          <Route
            path={url.buy}
            element={<PrivateRoute auth={auth} path={<ProductBuy />} />}
          />
        </Routes>
      </main>
      <aside>
        <SideBar auth={auth} setAuth={setAuth} />
      </aside>
    </div>
  );
};

export default ShoppingMall;
