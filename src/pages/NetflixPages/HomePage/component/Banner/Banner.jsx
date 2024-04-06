import React, { useRef } from "react";
import { usePopularMoviesQuery } from "../../../../../hooks/netflix/usePopularMovies";
import "./Banner.style.css";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  const elementRef = useRef([]);
  const currentBannerImageIndex = useRef(0);
  const resultsPerPage = 20;
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeBannerImage = () => {
    currentBannerImageIndex.current =
      (currentBannerImageIndex.current + 1) % resultsPerPage;
    const idx = currentBannerImageIndex.current;
    if (idx === 0) {
      elementRef.current[resultsPerPage - 1].className = "banner ";
    }
    if (elementRef.current[idx - 1]) {
      elementRef.current[idx - 1].className = "banner ";
    }
    elementRef.current[idx].className += "current";
  };
  // 4초마다 한 번씩 배너 이미지를 바꿈
  setInterval(changeBannerImage, 4000);

  return (
    <>
      {data.results.map((result, key) => (
        <div
          style={{
            backgroundImage: `url(https://media.themoviedb.org/t/p/original${result.backdrop_path})`,
          }}
          className={`banner ${
            key === currentBannerImageIndex.current ? "current" : ""
          }`}
          ref={(el) => (elementRef.current[key] = el)}
        >
          <div className="text-white banner-text-area">
            <h1>{result.title}</h1>
            <p>{result.overview}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Banner;
