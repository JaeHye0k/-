import React from "react";

const Box = (props) => {
  return (
    <div>
      <div className={`box ${props.result}`}>
        <div className={`${props.result === "Lose" ? "loser" : ""}`} />
        <div className="title">
          <h1>{props.title.name}</h1>
        </div>
        <div className="img-box">
          <img
            className="item-img"
            src={props.item ? props.item.img : props.title.img}
          ></img>
        </div>
        <div className="result">
          <h2>{props.result}</h2>
        </div>
      </div>
    </div>
  );
};

export default Box;
