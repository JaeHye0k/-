import React, { Component } from "react";
import style from "../../styles/RockScissorPaper.module.css";

export default class BoxClass extends Component {
  render() {
    return (
      <div className={style.box_container}>
        <img
          className={style.player_img}
          src={this.props.player.img}
          alt="player"
        ></img>
        <div
          className={`${style.box} ${
            this.props.result === "Win"
              ? style.Win
              : this.props.result === "Lose"
              ? style.Lose
              : style.Tie
          }`}
        >
          <div className={this.props.result === "Lose" ? style.loser : ""} />
          <img
            className={style.item_img}
            src={
              this.props.item
                ? this.props.item.img
                : "./assets/images/rockscissorpaper/transparentImage.png"
            }
            alt="Rock Scissor Paper"
          ></img>
        </div>
      </div>
    );
  }
}
