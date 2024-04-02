import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import style from "../../styles/ShoppingMallRedux/ShoppingMallRedux.module.css";
import Search from "./Search";
import LoginButton from "./LoginButton";
import { menuList } from "./NavBar";

const SideBar = () => {
  const { height, width } = useWindowDimensions();
  const [showingSideBar, setShowingSideBar] = useState(false);

  const showSideNavbar = () => {
    setShowingSideBar(!showingSideBar);
  };

  useEffect(() => {}, [width]);
  return width <= 1000 ? (
    <div className={style.side_bar}>
      <button className={style.navbar_hamburger} onClick={showSideNavbar}>
        <FontAwesomeIcon className={style.hamburger_icon} icon={faBars} />
      </button>
      <div
        className={style.side}
        style={
          showingSideBar
            ? { transform: "translateX(0)" }
            : { transform: "translateX(100vw)" }
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
            <li onClick={showSideNavbar}>
              <LoginButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default SideBar;
