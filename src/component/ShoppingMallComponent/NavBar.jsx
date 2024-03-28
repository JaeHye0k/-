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
          src="data:image/png;base64,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"
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
