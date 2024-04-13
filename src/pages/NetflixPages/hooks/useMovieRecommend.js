import { useQuery } from "@tanstack/react-query";
import { api } from "../utills/api";

const fetchMovieRecommend = (id, language) => {
  return api.get(`/movie/${id}/recommendations?language=${language}`);
};

export const useMovieRecommendQuery = (id, language = "en-US") => {
  return useQuery({
    queryKey: ["movie-recommend", id],
    queryFn: () => fetchMovieRecommend(id, language),
    select: (result) => result.data,
  });
};
