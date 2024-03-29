import React from "react";
import style from "../../styles/ShoppingMall.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import Search from "./Search";

import LoginButton from "./LoginButton";
import IndexButton from "../IndexComponent/IndexButton";

export const menuList = [
  "Women",
  "Men",
  "Baby",
  "Kids",
  "H&M HOME",
  "SportSale",
  "지속가능성",
];

const NavBar = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className={style.navbar}>
      <IndexButton />
      <LoginButton auth={auth} setAuth={setAuth} />
      <div className={style.logo_section} onClick={() => navigate("")}>
        <img
          alt="logo"
          width={100}
          src="/assets/images/shoppingmall/logo.png"
        />
      </div>
      <div className={style.top}>
        <ul className={style.menu_list}>
          {menuList.map((menu, i) => (
            <li key={i}>{menu}</li>
          ))}
          {location.pathname === "/shopping-mall/login" ? "" : <Search />}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
