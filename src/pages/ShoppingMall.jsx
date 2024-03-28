import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./ShoppingMallPages/ProductAll";
import Login from "./ShoppingMallPages/Login";
import NavBar from "../component/ShoppingMallComponent/NavBar";
import PrivateRoute from "../Routes/PrivateRoute";
import style from "../styles/ShoppingMall.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductBuy from "./ShoppingMallPages/ProductBuy";
import ProductDetail from "./ShoppingMallPages/ProductDetail";

// 1. 전체 상품 페이지, 로그인 페이지, 상품 상세 페이지
// 1-1. nav바
// 2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다. (홈페이지)
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품 디테일을 누르면
// 4-1. 로그인이 되어있지 않을 경우에는 로그인 페이지로 리다이렉션 된다.
// 4-2. 로그인이 되어 있을 경우 상품 디테일 페이지가 나온다.
// 5. 로그아웃 버튼을 클릭하면 로그아웃 된다.
// 6. 로그아웃 되면 상품 디테일 페이지를 볼 수 없다.
// 7. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
// 8. 상품을 검색할 수 있다.

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
    </div>
  );
};

export default ShoppingMall;
