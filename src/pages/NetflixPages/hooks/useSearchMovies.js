import { useQuery } from "@tanstack/react-query";
import { api } from "../utills/api";

const fetchSearchMovie = (keyword, page, language) => {
  return keyword
    ? api.get(
        `/search/movie?query=${keyword}&page=${page}&language=${language}`
      )
    : api.get(`/movie/popular?page=${page}&language=${language}`);
};

export const useSearchMoviesQuery = (keyword, page = 1, language = "en-US") => {
  return useQuery({
    queryKey: ["movie-search", keyword, page],
    queryFn: () => fetchSearchMovie(keyword, page, language),
    select: (result) => result.data,
  });
};
