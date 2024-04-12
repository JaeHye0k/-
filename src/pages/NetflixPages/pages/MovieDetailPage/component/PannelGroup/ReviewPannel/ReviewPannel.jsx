import React from "react";
import MovieReview from "../../MovieReview/MovieReview";
import { useParams } from "react-router-dom";
import { useMovieReviewQuery } from "../../../../../hooks/useMovieReview";

const ReviewPannel = () => {
  const { id } = useParams();
  const { data: reviews } = useMovieReviewQuery(id);
  return (
    <div className="movie-review">
      <h2>Reviews</h2>
      {reviews?.map((review) => (
        <MovieReview review={review} />
      ))}
    </div>
  );
};

export default ReviewPannel;
