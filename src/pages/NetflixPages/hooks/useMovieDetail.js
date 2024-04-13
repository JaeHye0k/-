import { useQuery, useQueries } from "@tanstack/react-query";
import { api } from "../utills/api";

const fetchMovieDetail = (id, language) => {
  return api.get(
    `/movie/${id}?language=${language}&append_to_response=credits`
  );
};

export const useMovieDetailQuery = (id, language = "en-US") => {
  return useQuery({
    queryKey: ["movie-detail", id],
    queryFn: () => fetchMovieDetail(id, language),
    select: (result) => result.data,
    retry: 0,
  });
};

// export const useMovieDetailQueries = (id, languages = []) => {
//   return useQueries({
//     queries: languages.map((language) => ({
//       queryKey: ["movie-detail", id, language],
//       queryFn: () => fetchMovieDetail(id, language),
//       select: (result) => result.data,
//     })),
//     combine: (results) => {
//       return {
//         data: results.map((result) => result.data?.results),
//       };
//     },
//   });
// };
