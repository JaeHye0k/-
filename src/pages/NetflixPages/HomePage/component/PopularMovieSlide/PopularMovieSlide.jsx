import React, { useState } from "react";
import { usePopularMoviesQuery } from "../../../../../hooks/netflix/usePopularMovies";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
import "./PopularMovieSlide.style.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

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
    <div className="popular-movie-slide">
      <h3>Popular Movies</h3>
      <Carousel
        responsive={responsive}
        infinite={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
      >
        {data.results.map((movie, key) => (
          <MovieCard movie={movie} key={key} />
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMovieSlide;
