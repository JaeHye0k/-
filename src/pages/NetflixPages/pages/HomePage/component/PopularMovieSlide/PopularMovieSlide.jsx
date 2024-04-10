import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import "./PopularMovieSlide.style.css";
import { responsive } from "../../../../constants/responsive";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <MovieSlider
      title="Popular Movies"
      movies={data?.results}
      responsive={responsive}
    />
  );
};

export default PopularMovieSlide;
