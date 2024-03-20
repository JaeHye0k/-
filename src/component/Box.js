import React from "react";

const Box = (props) => {
  return (
    <div className="box-container">
      <img
        className="player-img"
        src={props.player.img}
        alt="player Image"
      ></img>
      <div className={`box ${props.result}`}>
        <div className={`${props.result === "Lose" && "loser"}`} />
        <img
          style={{ transition: `opacity ${props.interval}ms` }}
          className={`item-img fade-out ${props.opacity ? "fade-in" : ""}`}
          src={props.item ? props.item.img : "./image/transparentImage.png"}
          alt="Rock Scissor Paper Image"
        ></img>
      </div>
      {/* <div className="result">
        <h2>{props.result}</h2>
      </div> */}
    </div>
  );
};

export default Box;
