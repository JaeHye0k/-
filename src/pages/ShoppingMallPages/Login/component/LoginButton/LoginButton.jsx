import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginButton.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const LoginButton = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const goToLoginPage = () => {
    if (auth) {
      setAuth(false);
      localStorage.clear();
    } else {
      navigate("login");
    }
  };
  return (
    <div className="login_button" onClick={() => goToLoginPage()}>
      <FontAwesomeIcon className="login_icon" icon={faUser} />
      <div>{auth ? "로그아웃" : "로그인"}</div>
    </div>
  );
};

export default LoginButton;
