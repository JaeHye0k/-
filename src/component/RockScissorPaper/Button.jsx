import React from "react";
import "../../styles/Button.css";

const Button = (props) => {
  return (
    <button className={`rcp-button`}>
      <div className="button-content">
        <img src={props.item && props.item.img} alt="button"></img>
      </div>
    </button>
  );
};

export default Button;
