import React, { Component } from "react";
import "../ScoreBoard.css";

export default class ScoreBoardClass extends Component {
  render() {
    return (
      <div className={`${this.props.className}`}>
        <div className="player-name">{this.props.player}</div>
        <div
          className={`score-board ${this.props.result === "Win" ? "Win" : ""}`}
        >
          <div className="score">{`${this.props.score} ${
            this.props.goal ? "/ " + this.props.goal : ""
          }`}</div>
        </div>
      </div>
    );
  }
}
