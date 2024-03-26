import React from "react";
import style from "../../styles/RockScissorPaper.module.css";

const Button = (props) => {
  return (
    <button className={style.rcp_button}>
      <div className={style.button_content}>
        <img src={props.item && props.item.img} alt="button"></img>
      </div>
    </button>
  );
};

export default Button;
