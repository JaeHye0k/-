import React from "react";
import { Badge } from "react-bootstrap";
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

const MovieCard = ({ movie }) => {
  const movieVoteAverage = Math.round(movie.vote_average);
  const halfStar = movieVoteAverage % 2;
  const fillStar = movieVoteAverage >> 1;
  const emptyStar = 5 - (fillStar + halfStar);

  const paintStars = (stars = []) => {
    for (let i = 0; i < fillStar; i++) {
      stars.push(<FontAwesomeIcon icon={faStarFill} />);
    }
    for (let i = 0; i < halfStar; i++) {
      stars.push(<FontAwesomeIcon icon={faStarHalfStroke} />);
    }
    for (let i = 0; i < emptyStar; i++) {
      stars.push(<FontAwesomeIcon icon={faStarEmpty} />);
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
        {movie.genre_ids.map((id, key) => (
          <Badge bg="danger" key={key}>
            {id}
          </Badge>
        ))}
        <div>{paintStars()}</div>
        {movie.adult ? (
          <img src="assets/images/netflix/over18.png" width={50}></img>
        ) : (
          <img src="assets/images/netflix/ALL.png" width={50}></img>
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
