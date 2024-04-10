import React from "react";
import { useMovieGenreQuery } from "../../../../hooks/useMovieGenre";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { selectGenre, deleteGenre } from "../../../../redux/reducer/movieSlice";
import "./GenrePannel.style.css";

const GenrePannel = () => {
  const { data, isLoading, isError, error } = useMovieGenreQuery("ko");
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.movie.selectedGenres);
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <div className="genre-tag-container">
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
      <div className="genre-button-container">
        {data.map(({ id, name }) => (
          <button
            onClick={() => dispatch(selectGenre({ id, name }))}
            className="genre-button"
            key={id}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenrePannel;
