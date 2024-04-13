import React, { useEffect } from "react";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux";

const TopRatedMovieSlide = () => {
  const language = useSelector((state) => state.global.language);
  const { data, isLoading, isError, error, refetch } =
    useTopRatedMoviesQuery(language);
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
    <div>
      <MovieSlider
        title={language === "ko" ? "극찬받는 영화" : "Top Rated Movies"}
        movies={data?.results}
        responsive={responsive}
      />
    </div>
  );
};

export default TopRatedMovieSlide;
