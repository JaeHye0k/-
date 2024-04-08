import React from "react";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error, isFetched } =
    useTopRatedMoviesQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  if (isFetched) {
    return (
      <div>
        <MovieSlider
          title="Top Rated Movies"
          movies={data.results}
          responsive={responsive}
        />
      </div>
    );
  }
};

export default TopRatedMovieSlide;
