import { useQuery, useQueries } from "@tanstack/react-query";
import { api } from "../utills/api";

const fetchPopularMovies = (language, page) => {
  return api.get(`/movie/popular?language=${language}&page=${page}`);
};

export const usePopularMoviesQuery = (language = "en-US", page = 1) => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: () => fetchPopularMovies(language, page),
    select: (data) => data.data,
  });
};

export const usePopularMoviesQueries = (language = "en-US", page = 1) => {
  const pages = Array.from({ length: page }, (_, index) => index + 1);
  return useQueries({
    queries: pages.map((pageNum) => ({
      queryKey: ["movie-popular", pageNum],
      queryFn: () => fetchPopularMovies(language, pageNum),
      select: (data) => data.data,
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data?.results),
      };
    },
  });
};
