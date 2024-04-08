import React, { useState } from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import "react-multi-carousel/lib/styles.css";
import "./PopularMovieSlide.style.css";
import { responsive } from "../../../../constants/responsive";

const PopularMovieSlide = () => {
  const [i, setI] = useState(false);
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  setTimeout(() => setI(true), 4500);
  return (
    <MovieSlider
      title="Popular Movies"
      movies={data.results}
      responsive={responsive}
    />
  );
};

export default PopularMovieSlide;
