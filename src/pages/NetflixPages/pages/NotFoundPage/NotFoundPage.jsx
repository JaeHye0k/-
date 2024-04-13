import React from "react";
import { usePopularMoviesQueries } from "../../hooks/usePopularMovies";
import "./NotFoundPage.style.css";

const NotFoundPage = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQueries(
    undefined,
    3
  );
  // 404 콜라주 만들 이미지 52장
  const collage = data.flat().filter((_, i) => i < 52);
  console.log(collage);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div className="not-found-page">
      <section className="message-404 text-white">
        <h1>페이지를 찾을 수 없습니다.</h1>
        <div></div>
      </section>
      <section className="collage-404">
        <div className="collage-404-images">
          {collage?.map((item) => (
            <a href={`/netflix/movies/${item.id}`}>
              <img
                src={`https://media.themoviedb.org/t/p/w300${item?.backdrop_path}`}
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
