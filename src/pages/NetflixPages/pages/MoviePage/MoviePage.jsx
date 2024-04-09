import React from "react";
import { useSearchMoviesQuery } from "../../hooks/useSearchMovies";
import { useSearchParams } from "react-router-dom";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import "./MoviePage.style.css";

// nav바에서 클릭해서 넘어오는 경우 => popularMovie 보여주기
// 검색을 통해 넘어오는 경우 => keyword와 관련된 영화들 보여주기

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const { data, isLoading, isError, error, isFetched } =
    useSearchMoviesQuery(keyword);
  if (isLoading) {
    return (
      <Spinner className="loading-spinner" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <Container>
        <Col lg={4} xs={12}></Col>
        <Col lg={8} xs={12}>
          <Row>
            {data.results.map((movie, index) => (
              <Col>
                <MovieCard movie={movie} key={index} />
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default MoviePage;
