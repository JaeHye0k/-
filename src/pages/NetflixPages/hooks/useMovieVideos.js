import { useQuery } from "@tanstack/react-query";
import { api } from "../utills/api";

const fetchMovieVideos = (id, language) => {
  return api.get(`/movie/${id}/videos`);
};

export const useMovieVideosQuery = (id, language = "en-US") => {
  return useQuery({
    queryKey: ["movie-video", id],
    queryFn: () => fetchMovieVideos(id, language),
    select: (result) => result.data,
  });
};
