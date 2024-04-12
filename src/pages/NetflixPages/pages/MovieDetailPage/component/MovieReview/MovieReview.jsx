import React, { useState } from "react";
import "./MovieReview.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const MovieReview = ({ review }) => {
  let isUpdated = false;
  const [isFolded, setIsFolded] = useState(true);
  const { author, created_at: created, content, updated_at: updated } = review;
  if (updated !== created) isUpdated = true;
  // console.log(review);
  return (
    <div className="review-box">
      <div className="review-title">
        <span className="author">
          <FontAwesomeIcon icon={faUser} />
          {author}
        </span>
        <span className="date">
          {isUpdated
            ? updated.match(/\d{4}-\d{2}-\d{2}/)[0]
            : created.match(/\d{4}-\d{2}-\d{2}/)[0]}
        </span>
        <span className="updated">{isUpdated ? "(updated)" : ""}</span>
      </div>
      <div className={`content ${isFolded ? "folded" : ""}`}>
        {isFolded ? (
          <FontAwesomeIcon
            icon={faCaretDown}
            onClick={() => setIsFolded(false)}
          />
        ) : (
          <FontAwesomeIcon icon={faCaretUp} onClick={() => setIsFolded(true)} />
        )}
        {content}
      </div>
    </div>
  );
};

export default MovieReview;
