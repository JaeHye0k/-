import React from "react";
import style from "../../styles/index.module.css";
import { useNavigate } from "react-router-dom";

const IndexButton = () => {
  const navigate = useNavigate();
  const goToBack = () => {
    navigate("/");
  };
  return (
    <button className={style.index_button} onClick={() => goToBack()}></button>
  );
};

export default IndexButton;
