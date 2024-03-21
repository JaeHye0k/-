import React, { Component } from "react";

export default class ButtonClass extends Component {
  render() {
    return (
      <button className={`rcp-button`}>
        <div className="button-content">
          <img src={this.props.item && this.props.item.img} alt="button"></img>
        </div>
      </button>
    );
  }
}
