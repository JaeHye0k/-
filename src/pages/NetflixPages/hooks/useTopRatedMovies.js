import { useQuery } from "@tanstack/react-query";
import { api } from "../utills/api";

const fetchTopRatedMovies = (language, page) => {
  return api.get(`/movie/top_rated?language=${language}&page=${page}`);
};

export const useTopRatedMoviesQuery = (language = "en-US", page = 1) => {
  return useQuery({
    queryKey: ["movie-top-rated"],
    queryFn: () => fetchTopRatedMovies(language, page),
    select: (data) => data.data,
  });
};
