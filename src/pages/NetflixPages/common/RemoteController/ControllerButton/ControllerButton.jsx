import React from "react";
import "./ControllerButton.style.css";
import { turnOnRemoteController } from "../../../redux/reducer/rcSlice";
import { useDispatch } from "react-redux";

const ControllerButton = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="controller-button"
      onClick={() => dispatch(turnOnRemoteController())}
    >
      📱
    </div>
  );
};

export default ControllerButton;
