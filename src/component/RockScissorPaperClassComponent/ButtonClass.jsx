import React, { Component } from "react";
import style from "../../styles/RockScissorPaper.module.css";

export default class ButtonClass extends Component {
  render() {
    return (
      <button className={style.rcp_button}>
        <div className={style.button_content}>
          <img src={this.props.item && this.props.item.img} alt="button"></img>
        </div>
      </button>
    );
  }
}
