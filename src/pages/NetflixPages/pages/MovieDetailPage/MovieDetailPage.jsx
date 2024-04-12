import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { useMovieReviewQuery } from "../../hooks/useMovieReview";
import { Container, Row, Col } from "react-bootstrap";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MovieDetailPage.style.css";
import MovieReview from "./component/MovieReview";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery(id, "ko");
  const { data: reviews } = useMovieReviewQuery(id);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <Container className="movie-detail">
      <Row>
        <Col className="movie-detail-image">
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,
            }}
            className="movie-detail-backdrop"
          ></div>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.poster_path})`,
            }}
            className="movie-detail-poster"
          ></div>
        </Col>
      </Row>
      <Row>
        <div className="movie-info">
          <ul className="top">
            <li>
              <div className="movie-title">{data?.title}</div>
            </li>
            <li>
              <div className="movie-tagline">"{data?.tagline}"</div>
            </li>
            <ul>
              <li>
                <FontAwesomeIcon icon={faStar} />
                {data?.vote_average.toFixed(2)}
              </li>
              <li>{data?.release_date}</li>
              <li>{data?.runtime}</li>
              <li>{data?.adult ? "성인" : "전체 관람가"}</li>
            </ul>
          </ul>
          <hr />
          <ul className="mid">
            <li className="staff">
              <span>감독</span>
              {data?.credits.crew.map((staff) => (
                <span>{staff.name}</span>
              ))}
            </li>
            <li className="actor">
              <span>출연</span>
              {data?.credits.cast.map((actor) => (
                <span>{actor.name}</span>
              ))}
            </li>
            <li className="genre">
              <span>장르</span>
              {data?.genres.map((genre) => (
                <span>{genre.name}</span>
              ))}
            </li>
            <li className="overview">
              <span>소개</span>
              <span>{data?.overview}</span>
            </li>
          </ul>
          <hr />
          <ul className="bottom">
            <li>
              <span>예산</span>
              <span>
                ${" "}
                {data?.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </li>
            <li>
              <span>수익</span>
              <span>
                ${" "}
                {data?.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </li>
          </ul>
          <hr />
        </div>
      </Row>
      <Row>
        <div className="movie-review">
          <h2>Reviews</h2>
          {reviews?.slice(0, 5).map((review) => (
            <MovieReview review={review} />
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default MovieDetailPage;
