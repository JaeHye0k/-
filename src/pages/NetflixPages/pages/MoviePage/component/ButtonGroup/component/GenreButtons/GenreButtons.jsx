import React from "react";
import { useMovieGenreQuery } from "../../../../../../hooks/useMovieGenre";
import LoadingSpinner from "../../../../../../common/LoadingSpinner/LoadingSpinner";
import { useDispatch } from "react-redux";
import { selectGenre } from "../../../../../../redux/reducer/rcSlice";
import "./GenreButtons.style.css";

const GenreButtons = () => {
  const { data, isLoading, isError, error } = useMovieGenreQuery("ko");
  const dispatch = useDispatch();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
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
  );
};

export default GenreButtons;
