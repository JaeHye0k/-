import React from "react";
import { useUpcomingMovies } from "../../../../hooks/useUpcomingMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMovies();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <MovieSlider
        title="Upcoming Movies"
        movies={data?.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcomingMovieSlide;
