import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useWindowDimensions from "../../../../../hooks/useWindowDimensions";
import "./SideBar.style.css";
import Search from "../Search/Search";
import LoginButton from "../../../Login/component/LoginButton/LoginButton";
import { menuList } from "../NavBar/NavBar";

const SideBar = ({ auth, setAuth }) => {
  const { height, width } = useWindowDimensions();
  const [showingSideBar, setShowingSideBar] = useState(false);

  const showSideNavbar = () => {
    setShowingSideBar(!showingSideBar);
  };

  useEffect(() => {}, [width]);
  return width <= 1000 ? (
    <div className="side_bar">
      <button className="navbar_hamburger" onClick={showSideNavbar}>
        <FontAwesomeIcon className="hamburger_icon" icon={faBars} />
      </button>
      <div
        className="side"
        style={
          showingSideBar
            ? { transform: "translateX(0)" }
            : { transform: "translateX(100vw)" }
        }
      >
        <div className="menu_section">
          <ul className="menu_list">
            <li>
              <Search />
            </li>
            {menuList.map((menu, i) => (
              <li key={i}>{menu}</li>
            ))}
            <li onClick={showSideNavbar}>
              <LoginButton auth={auth} setAuth={setAuth} />
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
