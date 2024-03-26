import React from "react";
import style from "../../styles/RockScissorPaper.module.css";

const Box = (props) => {
  return (
    <div className={style.box_container}>
      <img
        className={style.player_img}
        src={props.player.img}
        alt="player"
      ></img>
      <div
        className={`${style.box} ${
          props.result === "Win"
            ? style.Win
            : props.result === "Lose"
            ? style.Lose
            : style.Tie
        }`}
      >
        <div className={props.result === "Lose" ? style.loser : ""} />
        <img
          className={style.item_img}
          src={
            props.item
              ? props.item.img
              : "./assets/images/rockscissorpaper/transparentImage.png"
          }
          alt="Rock Scissor Paper"
        ></img>
      </div>
      {/* <div className="result">
        <h2>{props.result}</h2>
      </div> */}
    </div>
  );
};

export default Box;
