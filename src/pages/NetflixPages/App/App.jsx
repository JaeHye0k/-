import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout/AppLayout";
import Homepage from "../pages/HomePage/Homepage";
import MoviePage from "../pages/MoviePage/MoviePage";
import MovieDetailPage from "../pages/MovieDetailPage/MovieDetailPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.style.css";

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
    faviconEl.href = `/assets/images/netflix/favicon.svg`;
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
