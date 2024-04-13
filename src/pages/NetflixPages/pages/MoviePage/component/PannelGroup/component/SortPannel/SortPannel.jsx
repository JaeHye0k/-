import React from "react";
import "./SortPannel.style.css";
import { useSelector } from "react-redux";

const SortPannel = () => {
  const selectedSortButton = useSelector(
    (state) => state.remoteController.selectedSortButton
  );
  return (
    <div className="sort-pannel">
      {selectedSortButton && (
        <div className="sorted-by">
          <span>{selectedSortButton}</span>
        </div>
      )}
    </div>
  );
};

export default SortPannel;
