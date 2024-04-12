import React, { useEffect, useState } from "react";
import "./RemoteController.style.css";
import GenreButtons from "./component/GenreButtons/GenreButtons";
import GenrePannel from "./component/GenrePannel/GenrePannel";
import dragElement from "../../../../utills/dragElement";
import SortButtons from "./component/SortButtons/SortButtons";
import SortPannel from "./component/SortPannel/SortPannel";
import { useSelector, useDispatch } from "react-redux";
import { selectButton } from "../../../../redux/reducer/movieSlice";

const RemoteController = () => {
  const selectedButton = useSelector((state) => state.movie.selectedButton);
  const dispatch = useDispatch();

  useEffect(() => {
    dragElement(document.querySelector(".remote-controller"));
  }, []);

  return (
    <div className="remote-controller">
      <div className="logo">
        <img src="/assets/images/netflix/netflix_logo.svg" alt="netflix logo" />
      </div>

      {selectedButton === "filter" ? <GenrePannel /> : <SortPannel />}
      <div className="sort-filter">
        <button id="sort" onClick={(e) => dispatch(selectButton(e.target.id))}>
          정렬
        </button>
        <button
          id="filter"
          onClick={(e) => dispatch(selectButton(e.target.id))}
        >
          필터
        </button>
      </div>
      {selectedButton === "filter" ? <GenreButtons /> : <SortButtons />}
    </div>
  );
};

export default RemoteController;
