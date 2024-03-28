import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../../styles/ShoppingMall.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const LoginButton = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const goToLoginPage = () => {
    if (auth) {
      setAuth(false);
    } else {
      navigate("login");
    }
  };
  return (
    <div className={style.login_button} onClick={() => goToLoginPage()}>
      <FontAwesomeIcon className={style.login_icon} icon={faUser} />
      <div>{auth ? "로그아웃" : "로그인"}</div>
    </div>
  );
};

export default LoginButton;
