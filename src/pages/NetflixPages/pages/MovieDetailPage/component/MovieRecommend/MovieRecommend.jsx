import React from "react";
import { useMovieRecommendQuery } from "../../../../hooks/useMovieRecommend";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const MovieRecommend = ({ id }) => {
  const { data, isLoading, isError, error } = useMovieRecommendQuery(id, "ko");

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <MovieSlider
      movies={data?.results}
      title={"Movie Recommend"}
      responsive={responsive}
    />
  );
};

export default MovieRecommend;
