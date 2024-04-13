import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SortButtons from "./component/SortButtons/SortButtons";
import GenreButtons from "./component/GenreButtons/GenreButtons";
import { selectButton } from "../../../../redux/reducer/rcSlice";
import "./ButtonGroup.style.css";

const ButtonGroup = () => {
  const dispatch = useDispatch();
  const selectedButton = useSelector(
    (state) => state.remoteController.selectedButton
  );
  return (
    <div>
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

export default ButtonGroup;
