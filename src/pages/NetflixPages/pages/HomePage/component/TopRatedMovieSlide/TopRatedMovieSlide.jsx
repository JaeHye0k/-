import React from "react";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <MovieSlider
        title="Top Rated Movies"
        movies={data?.results}
        responsive={responsive}
      />
    </div>
  );
};

export default TopRatedMovieSlide;
