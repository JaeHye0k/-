import React, { useEffect, useRef } from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import "./Banner.style.css";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux";

const Banner = () => {
  const language = useSelector((state) => state.global.language);
  const { data, isLoading, isError, error, refetch } =
    usePopularMoviesQuery(language);
  const elementRef = useRef([]);
  const currentBannerImageIndex = useRef(0);
  const resultsPerPage = 20;
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
  useEffect(() => {
    const intervalId = setInterval(changeBannerImage, 4000);
    refetch();
    return () => {
      clearInterval(intervalId);
    };
  }, [language]);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="banner-container">
      {data.results.map((result, key) => (
        <div
          style={{
            backgroundImage: `url(https://media.themoviedb.org/t/p/original${result.backdrop_path})`,
          }}
          className={`banner ${
            key === currentBannerImageIndex.current ? "current" : ""
          }`}
          ref={(el) => (elementRef.current[key] = el)}
          key={key}
        >
          <div className="text-white banner-text-area">
            <h1 className="banner-title">{result.title}</h1>
            <p className="banner-overview">{result.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
