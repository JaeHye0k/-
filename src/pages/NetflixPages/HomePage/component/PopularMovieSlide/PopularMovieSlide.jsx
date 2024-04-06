import React from "react";
import { usePopularMoviesQuery } from "../../../../../hooks/netflix/usePopularMovies";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return <div>PopularMovieSlide</div>;
};

export default PopularMovieSlide;
