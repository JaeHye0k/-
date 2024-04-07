import React from "react";
import "./NavBar.style.css";
import { useNavigate, useLocation } from "react-router-dom";
import Search from "../Search/Search";
import LoginButton from "../../../Login/component/LoginButton/LoginButton";
import IndexButton from "../../../../IndexPage/component/IndexButton/IndexButton";

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
    <header className="navbar">
      <IndexButton />
      <LoginButton auth={auth} setAuth={setAuth} />
      <div className="logo_section" onClick={() => navigate("")}>
        <img
          alt="logo"
          width={100}
          src="/assets/images/shoppingmall/logo.png"
        />
      </div>
      <div className="top">
        <ul className="menu_list">
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
