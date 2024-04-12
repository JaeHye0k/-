import { useQuery } from "@tanstack/react-query";
import { api } from "../utills/api";

const fetchMovieGenre = (language) => {
  return api.get(`genre/movie/list?language=${language}`);
};

export const useMovieGenreQuery = (language = "en-US") => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: () => fetchMovieGenre(language),
    select: (result) => result.data.genres,
    staleTime: 300000, // 매번 장르 리스트를 가져오지 않도록
  });
};
