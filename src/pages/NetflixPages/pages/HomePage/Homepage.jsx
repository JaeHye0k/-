import React from "react";
import Banner from "./component/Banner/Banner";
import PopularMovieSlide from "./component/PopularMovieSlide/PopularMovieSlide";
import TopRatedMovieSlide from "./component/TopRatedMovieSlide/TopRatedMovieSlide";

// 1. 배너
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie

const Homepage = () => {
  return (
    <>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
    </>
  );
};

export default Homepage;
