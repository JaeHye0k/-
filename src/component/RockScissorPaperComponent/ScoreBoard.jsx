import React from "react";
import style from "../../styles/RockScissorPaper.module.css";

const ScoreBoard = (props) => {
  return (
    <div className={style.score_component}>
      <div className={style.player_name}>{props.player.name}</div>
      <div
        className={`${style.score_board} ${
          props.result === "Win" ? style.Win : ""
        }`}
      >
        <div className={style.score}>{props.score}</div>
      </div>
    </div>
  );
};

export default ScoreBoard;
