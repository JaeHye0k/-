import React, { useEffect } from "react";
import "./RemoteController.style.css";
import dragElement from "../../utills/dragElement";

const RemoteController = ({ PannelGroup, ButtonGroup }) => {
  console.log(PannelGroup);
  useEffect(() => {
    dragElement(document.querySelector(".remote-controller"));
  }, []);
  return (
    <div className="remote-controller">
      <div className="logo">
        <img src="/assets/images/netflix/netflix_logo.svg" alt="netflix logo" />
      </div>
      {PannelGroup}
      {ButtonGroup}
    </div>
  );
};

export default RemoteController;
