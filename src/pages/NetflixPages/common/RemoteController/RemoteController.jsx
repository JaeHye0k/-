import React, { useEffect } from "react";
import "./RemoteController.style.css";
import GenrePannel from "../../pages/MoviePage/component/GenrePannel/GenrePannel";
import dragElement from "../../utills/dragElement";

const RemoteController = () => {
  useEffect(() => {
    dragElement(document.querySelector(".remote-controller"));
  }, []);
  return (
    <div className="remote-controller">
      <div className="pannel">
        <img src="/assets/images/netflix/netflix_logo.svg" alt="netflix logo" />
      </div>
      <GenrePannel />
    </div>
  );
};

export default RemoteController;
