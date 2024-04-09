import React from "react";
import "./MovieCard.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStarHalfStroke,
  faStar as faStarEmpty,
} from "@fortawesome/free-regular-svg-icons";
import {
  faStar as faStarFill,
  faPlay,
  faPlus,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  const {
    data: genreData,
    isLoading,
    isError,
    error,
  } = useMovieGenreQuery("ko");
  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map(
      (id) => genreData.find((genre) => genre.id === id).name
    );
    return genreNameList;
  };

  const movieVoteAverage = Math.round(movie.vote_average);
  const halfStar = movieVoteAverage % 2;
  const fillStar = movieVoteAverage >> 1;
  const emptyStar = 5 - (fillStar + halfStar);

  const paintStars = (stars = []) => {
    for (let i = 0; i < fillStar; i++) {
      stars.push(<FontAwesomeIcon icon={faStarFill} width={15} />);
    }
    for (let i = 0; i < halfStar; i++) {
      stars.push(<FontAwesomeIcon icon={faStarHalfStroke} width={15} />);
    }
    for (let i = 0; i < emptyStar; i++) {
      stars.push(<FontAwesomeIcon icon={faStarEmpty} width={15} />);
    }
    return stars;
  };
  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path})`,
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1 className="title">{movie.title}</h1>
        <hr />
        <ul className="genres">
          {showGenre(movie.genre_ids).map((id, key) => (
            <li className="genre-item" key={key}>
              {id}
            </li>
          ))}
        </ul>

        <div>{paintStars()}</div>
        {movie.adult ? (
          <img
            className="adult-img"
            src="/assets/images/netflix/over18.png"
          ></img>
        ) : (
          <img className="adult-img" src="/assets/images/netflix/ALL.png"></img>
        )}
        <div className="movie-card-buttons">
          <div>
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <div>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{ verticalAlign: "baseline" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
