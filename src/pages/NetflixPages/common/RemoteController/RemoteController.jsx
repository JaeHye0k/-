import React, { useEffect } from "react";
import "./RemoteController.style.css";
import dragElement from "../../utills/dragElement";
import { useParams } from "react-router-dom";

const RemoteController = ({ PannelGroup, ButtonGroup }) => {
  const { id } = useParams();

  useEffect(() => {
    dragElement(document.querySelector(".remote-controller"));
  }, []);
  return (
    <div
      className={`remote-controller ${id ? "movie-detail-page" : "movie-page"}`}
    >
      <div className="logo">
        <img src="/assets/images/netflix/netflix_logo.svg" alt="netflix logo" />
      </div>
      <div className="control">
        {PannelGroup}
        {ButtonGroup}
      </div>
    </div>
  );
};

export default RemoteController;
