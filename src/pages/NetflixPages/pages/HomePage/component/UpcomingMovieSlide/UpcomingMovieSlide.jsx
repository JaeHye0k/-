import React, { useEffect } from "react";
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomingMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux";

const UpcomingMovieSlide = () => {
  const language = useSelector((state) => state.global.language);
  const { data, isLoading, isError, error, refetch } =
    useUpcomingMoviesQuery(language);
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
        title={language === "ko" ? "개봉 예정" : "Upcoming Movies"}
        movies={data?.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcomingMovieSlide;
