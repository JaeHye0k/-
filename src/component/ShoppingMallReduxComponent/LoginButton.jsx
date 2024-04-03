import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../../styles/ShoppingMallRedux/ShoppingMallRedux.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { authenticateAction } from "../../redux/ShoppingMallRedux/actions/authenticateAction";

const LoginButton = () => {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToLoginPage = () => {
    if (auth) {
      dispatch(authenticateAction.logout());
      localStorage.clear();
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
