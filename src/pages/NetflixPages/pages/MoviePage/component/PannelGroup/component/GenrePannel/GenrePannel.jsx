import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteGenre } from "../../../../../../redux/reducer/rcSlice";
import "./GenrePannel.style.css";

const GenrePannel = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.movie.selectedGenres);
  return (
    <div className="genre-pannel">
      {Object.entries(genres).map(([id, name]) => (
        <div
          className="genre-tag"
          key={id}
          onClick={() => dispatch(deleteGenre({ id }))}
        >
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
};

export default GenrePannel;
