import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./MoviePreview.style.css";
import YouTube from "react-youtube";
import { useMovieVideosQuery } from "../../../../hooks/useMovieVideos";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";

const MoviePreview = ({ data }) => {
  const { data: videoData, isLoading, isError } = useMovieVideosQuery(data?.id);
  const [isPlay, setIsPlay] = useState(false);
  const randomVideo = useRef(0);
  randomVideo.current = Math.floor(Math.random() * videoData?.results.length);
  const opts = {
    playerVars: {
      rel: 0, // 동영상 정지 시 관련 동영상 뜨지 않도록 처리
      autoplay: 1,
    },
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <h1>동영상을 찾을 수 없습니다.</h1>;
  }

  return (
    <div className="movie-preview">
      {isPlay ? (
        <YouTube
          videoId={videoData.results[randomVideo.current].key}
          className="preview-video"
          opts={opts}
          onEnd={() => setIsPlay(false)}
        />
      ) : (
        <>
          <div className="overlay"></div>
          <button className="play-button" onClick={() => setIsPlay(true)}>
            <FontAwesomeIcon icon={faPlay} />
            <div className="preview-text">미리보기</div>
          </button>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,
            }}
            className="movie-detail-backdrop"
          ></div>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.poster_path})`,
            }}
            className="movie-detail-poster"
          ></div>
        </>
      )}
    </div>
  );
};

export default MoviePreview;
