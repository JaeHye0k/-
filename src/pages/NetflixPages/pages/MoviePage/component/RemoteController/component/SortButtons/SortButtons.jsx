import React from "react";
import "./SortButtons.style.css";
import { useDispatch } from "react-redux";
import { selectSortButton } from "../../../../../../redux/reducer/movieSlice";

const SortButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className="sort-button-container">
      <button onClick={() => dispatch(selectSortButton("별점 높은 순"))}>
        별점순↑
      </button>
      <button onClick={() => dispatch(selectSortButton("별점 낮은 순"))}>
        별점순↓
      </button>
      <button onClick={() => dispatch(selectSortButton("최신 순"))}>
        날짜순↑
      </button>
      <button onClick={() => dispatch(selectSortButton("오래된 순"))}>
        날짜순↓
      </button>
      <button
        className="clear-button"
        onClick={() => dispatch(selectSortButton(null))}
      >
        초기화
      </button>
    </div>
  );
};

export default SortButtons;
