import React, { Component } from "react";
import style from "../../styles/RockScissorPaper.module.css";

export default class ScoreBoardClass extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className={style.player_name}>{this.props.player}</div>
        <div
          className={`${style.score_board} ${
            this.props.result === "Win"
              ? style.Win
              : this.props.result === "Lose"
              ? style.Lose
              : style.Tie
          }`}
        >
          <div className={style.score}>{`${this.props.score} ${
            this.props.goal ? "/ " + this.props.goal : ""
          }`}</div>
        </div>
      </div>
    );
  }
}
