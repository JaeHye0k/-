import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import "./PopularMovieSlide.style.css";
import { responsive } from "../../../../constants/responsive";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux";

const PopularMovieSlide = () => {
  const language = useSelector((state) => state.global.language);
  const { data, isLoading, isError, error } = usePopularMoviesQuery(language);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <MovieSlider
      title={language === "ko" ? "인기 영화" : "Popular Movies"}
      movies={data?.results}
      responsive={responsive}
    />
  );
};

export default PopularMovieSlide;
