import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { Container, Row, Col } from "react-bootstrap";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MovieDetailPage.style.css";
import ControllerButton from "../../common/RemoteController/ControllerButton/ControllerButton";
import { useSelector } from "react-redux";
import IsOnController from "./component/IsOnController/IsOnController";
import MovieRecommend from "./component/MovieRecommend/MovieRecommend";
import MoviePreview from "./component/MoviePreview/MoviePreview";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const MovieDetailPage = () => {
  const language = useSelector((state) => state.global.language);
  const { id } = useParams();
  const { data, isLoading, isError, error, refetch } = useMovieDetailQuery(
    id,
    language
  );

  useEffect(() => {
    refetch();
  }, [language]);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    if (error.request.status === 404) {
      return <NotFoundPage />;
    }
    return <h1>{error.message}</h1>;
  }

  return (
    <Container className="movie-detail">
      <Row>
        <Col>
          <MoviePreview data={data} />
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
            <ul className="movie-info-list">
              <li>
                <li>
                  <FontAwesomeIcon icon={faStar} />
                  {data?.vote_average.toFixed(2)}
                </li>
                <li>{data?.release_date}</li>
              </li>
              <li>
                <li>{data?.runtime}분</li>
                <li>{data?.adult ? "성인" : "전체 관람가"}</li>
              </li>
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
        <IsOnController />
      </Row>
      <Row className="movie-recommend">
        <MovieRecommend id={id} />
      </Row>
      <ControllerButton />
    </Container>
  );
};

export default MovieDetailPage;
