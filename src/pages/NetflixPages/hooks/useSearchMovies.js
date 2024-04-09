import { useQuery } from "@tanstack/react-query";
import { api } from "../utills/api";

const fetchSearchMovie = (keyword) => {
  return keyword
    ? api.get(`/search/movie?query=${keyword}`)
    : api.get("/movie/popular");
};

export const useSearchMoviesQuery = (keyword) => {
  return useQuery({
    queryKey: ["movie-search", keyword],
    queryFn: () => fetchSearchMovie(keyword),
    select: (result) => result.data,
  });
};
