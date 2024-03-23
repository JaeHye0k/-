import React, { Component } from "react";
import "../styles/Button.css";

export default class BoxClass extends Component {
  render() {
    return (
      <div className="box-container">
        <img
          className="player-img"
          src={this.props.player.img}
          alt="player"
        ></img>
        <div className={`box ${this.props.result}`}>
          <div className={`${this.props.result === "Lose" && "loser"}`} />
          <img
            className={`item-img`}
            src={
              this.props.item
                ? this.props.item.img
                : "./assets/images/transparentImage.png"
            }
            alt="Rock Scissor Paper"
          ></img>
        </div>
        {/* <div className="result">
            <h2>{props.result}</h2>
          </div> */}
      </div>
    );
  }
}
