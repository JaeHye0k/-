import React, { useEffect, useState } from "react";
import { useSearchMoviesQuery } from "../../hooks/useSearchMovies";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import "./MoviePage.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faAnglesLeft,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import RemoteController from "../../common/RemoteController/RemoteController";
import { useSelector } from "react-redux";
import ControllerButton from "../../common/RemoteController/ControllerButton/ControllerButton";
import ButtonGroup from "./component/ButtonGroup/ButtonGroup";
import PannelGroup from "./component/PannelGroup/PannelGroup";

// nav바에서 클릭해서 넘어오는 경우 => popularMovie 보여주기
// 검색을 통해 넘어오는 경우 => keyword와 관련된 영화들 보여주기

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const page = +query.get("page") || 1;
  const { data, isLoading, isError, error, refetch } = useSearchMoviesQuery(
    keyword,
    page
  );
  const selectedSortButton = useSelector(
    (state) => state.movie.selectedSortButton
  );
  const isOnController = useSelector((state) => state.movie.isOnController);

  const sortMovies = (movies) => {
    switch (selectedSortButton) {
      case "인기 높은 순":
        movies.sort((a, b) => b.popularity - a.popularity);
        break;
      case "인기 낮은 순":
        movies.sort((a, b) => a.popularity - b.popularity);
        break;
      case "최신 순":
        movies.sort((a, b) => b.release_date.localeCompare(a.release_date));
        break;
      case "오래된 순":
        movies.sort((a, b) => a.release_date.localeCompare(b.release_date));
        break;
      default:
        break;
    }
    return movies;
  };

  const genres = useSelector((state) => state.movie.selectedGenres);

  const filterByGenre = () => {
    const filterdMovies = data?.results.filter((movie) => {
      return Object.keys(genres).every((genre) =>
        movie.genre_ids.includes(+genre)
      );
    });
    return Object.keys(genres).length > 0 ? filterdMovies : data.results;
  };

  const pagenationButtons = Array.from(
    { length: data?.total_pages },
    (_, i) => i + 1
  );
  // 페이지네이션 버튼 그룹의 시작과 끝
  const start = page < 10 ? 0 : Math.floor(page / 10) * 10 - 1;
  const end = Math.floor(page / 10) * 10 + 9;

  // page가 바뀔 때마다 refetch
  useEffect(() => {
    refetch();
  }, [page, selectedSortButton]);

  const handlePagenation = (value) => {
    let newPage = Number(page) + value;
    // 페이지 범위 초과할 경우
    if (newPage < 1) newPage = 1;
    else if (newPage > data.total_pages) newPage = data.total_pages;
    // keyword가 없으면 popular movies에서 pagenation 수행
    keyword
      ? setQuery(`?q=${keyword}&page=${newPage}`)
      : setQuery(`?page=${newPage}`);

    // 현재 페이지에 따라 페이지네이션 버튼 안에 숫자가 바뀌도록 함
    pagenationButtons.forEach((num, i) => {
      if (newPage % 10 === 1) {
        pagenationButtons[i] = i + 1 + Math.floor(newPage / 10) * 10;
      } else {
        pagenationButtons[i] = i + 1 + Math.floor(newPage / 11) * 10;
      }
    });
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <Container>
        <Row>
          <Col lg={10} xs={12}>
            <Row>
              {sortMovies(filterByGenre())?.map((movie, index) => (
                <Col lg={3} xs={6}>
                  <MovieCard movie={movie} key={index} />
                </Col>
              ))}
            </Row>
            <Row className="pagenation">
              <Col lg={3} xs={2} className="pagenation-left">
                <button onClick={() => handlePagenation(-10)}>
                  <FontAwesomeIcon icon={faAnglesLeft} />
                </button>
                <button onClick={() => handlePagenation(-1)}>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
              </Col>
              <Col lg={6} xs={8} className="pagenation-button-group">
                {pagenationButtons?.slice(start, end).map((num, index) => (
                  <button
                    id={`page-btn-${num}`}
                    className={num === page ? "current" : ""}
                    onClick={() =>
                      setQuery(
                        keyword ? `?q=${keyword}&page=${num}` : `?page=${num}`
                      )
                    }
                  >
                    {num}
                  </button>
                ))}
              </Col>
              <Col lg={3} xs={2} className="pagenation-right">
                <button onClick={() => handlePagenation(1)}>
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button onClick={() => handlePagenation(10)}>
                  <FontAwesomeIcon icon={faAnglesRight} />
                </button>
              </Col>
            </Row>
          </Col>
          {isOnController && (
            <RemoteController
              PannelGroup={<PannelGroup />}
              ButtonGroup={<ButtonGroup />}
            />
          )}
        </Row>
      </Container>
      <ControllerButton />
    </div>
  );
};

export default MoviePage;
