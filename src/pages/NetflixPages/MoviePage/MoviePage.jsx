import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { intervalActions } from "../../../redux/Netflix/reducers/intervalSlice";

const MoviePage = () => {
  const isOnBannerInterval = useSelector(
    (state) => state.interval.isOnBannerInterval
  );
  const bannerIntervalId = useSelector(
    (state) => state.interval.bannerIntervalId
  );
  const dispatch = useDispatch();
  // 배너 이미지 전환 interval 종료
  if (isOnBannerInterval) {
    clearInterval(bannerIntervalId);
    dispatch(intervalActions.setIsOnBannerInterval(false));
  }
  return <div>MoviePage</div>;
};

export default MoviePage;
