import React, { useEffect } from "react";
import { useMovieRecommendQuery } from "../../../../hooks/useMovieRecommend";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
import { useSelector } from "react-redux";

const MovieRecommend = ({ id }) => {
  const language = useSelector((state) => state.global.language);
  const { data, isLoading, isError, error, refetch } = useMovieRecommendQuery(
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
    return <h1>{error.message}</h1>;
  }
  return (
    <MovieSlider
      movies={data?.results}
      title={language === "ko" ? "추천 영화" : "Movie Recommend"}
      responsive={responsive}
    />
  );
};

export default MovieRecommend;
