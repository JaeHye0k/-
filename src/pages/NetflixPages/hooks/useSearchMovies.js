import { useQuery } from "@tanstack/react-query";
import { api } from "../utills/api";

const fetchSearchMovie = (keyword, page) => {
  return keyword
    ? api.get(`/search/movie?query=${keyword}&page=${page}`)
    : api.get(`/movie/popular?page=${page}`);
};

export const useSearchMoviesQuery = (keyword, page = 1) => {
  return useQuery({
    queryKey: ["movie-search", keyword, page],
    queryFn: () => fetchSearchMovie(keyword, page),
    select: (result) => result.data,
  });
};
