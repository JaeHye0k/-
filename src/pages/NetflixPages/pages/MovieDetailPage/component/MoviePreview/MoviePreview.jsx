import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./MoviePreview.style.css";
import YouTube from "react-youtube";
import { useMovieVideosQuery } from "../../../../hooks/useMovieVideos";

const MoviePreview = ({ data }) => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const {
    data: videoData,
    isLoading,
    isError,
    error,
  } = useMovieVideosQuery(data?.id);
  console.log(videoData);
  const [isPlay, setIsPlay] = useState(false);
  const opts = {
    playerVars: {
      rel: 0, // 동영상 정지 시 관련 동영상 뜨지 않도록 처리
      autoplay: 1,
    },
  };

  return (
    <div className="movie-preview">
      {isPlay ? (
        <YouTube
          videoId={videoData.results[0].key}
          className="preview-video"
          opts={opts}
          onClick={() => setIsPlay(false)}
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
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouTube />
        </Modal.Body>
      </Modal> */}
    </div>
  );
};

export default MoviePreview;
