import { useQuery } from "@tanstack/react-query";
import { api } from "../utills/api";

const fetchUpcomingMovies = (language, page) => {
  return api.get(`/movie/upcoming?language=${language}&page=${page}`);
};

export const useUpcomingMovies = (language = "en-US", page = 1) => {
  return useQuery({
    queryKey: ["movie-upcoming"],
    queryFn: () => fetchUpcomingMovies(language, page),
    select: (data) => data.data,
  });
};
