import React from "react";
import LoginBox from "../component/ReduxCounterComponent/LoginBox";
import CharacterCard from "../component/ReduxCounterComponent/CharacterCard";
import { useSelector } from "react-redux";
import style from "../styles/ReduxCounter.module.css";

const ReduxCounter = () => {
  const fullName = useSelector((state) => state.fullName);
  return (
    <div className={style.center_box}>
      {fullName ? <CharacterCard /> : <LoginBox />}
    </div>
  );
};

export default ReduxCounter;
