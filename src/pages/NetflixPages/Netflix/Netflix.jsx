import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "../../../layout/NetflixLayout/AppLayout";
import Homepage from "../HomePage/Homepage";
import MoviePage from "../MoviePage/MoviePage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Netflix.style.css";

// 홈페이지 path="/"
// 전체 영화 페이지 path="/movies"
// 영화 상세 페이지 path="/movies/:id"

const Netflix = () => {
  const titleEl = document.querySelector("title");
  const faviconEl = document.querySelector("link[rel~='icon']");
  const resetTitle = () => {
    faviconEl.href = `/favicon.ico`;
    titleEl.innerText = "React App";
  };
  // title, favicon 변경
  useEffect(() => {
    faviconEl.href = `assets/images/netflix/favicon.svg`;
    titleEl.innerText = "Netflix";
    return resetTitle;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="movies">
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default Netflix;
