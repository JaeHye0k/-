import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import style from "../../styles/ShoppingMall.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import Search from "./Search";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import LoginButton from "./LoginButton";

const NavBar = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { height, width } = useWindowDimensions();
  const [showingSideBar, setShowingSideBar] = useState(false);

  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "SportSale",
    "지속가능성",
  ];

  const showSideNavbar = () => {
    setShowingSideBar(!showingSideBar);
  };

  useEffect(() => {}, [width]);
  return (
    <header>
      {width > 1000 ? <LoginButton auth={auth} setAuth={setAuth} /> : ""}
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
      {width <= 1000 ? (
        <>
          <button className={style.navbar_hamburger} onClick={showSideNavbar}>
            <FontAwesomeIcon className={style.hamburger_icon} icon={faBars} />
          </button>
          <div
            className={style.side}
            style={
              showingSideBar
                ? { transform: "translateX(0)" }
                : { transform: "translateX(300px)" }
            }
          >
            <div className={style.menu_section}>
              <ul className={style.menu_list}>
                <li>
                  <Search />
                </li>
                {menuList.map((menu, i) => (
                  <li key={i}>{menu}</li>
                ))}
                <li>
                  <LoginButton auth={auth} setAuth={setAuth} />
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </header>
  );
};

export default NavBar;
