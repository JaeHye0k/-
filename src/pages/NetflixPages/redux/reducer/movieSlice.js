import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGenres: {},
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    selectGenre: (state, action) => {
      state.selectedGenres[action.payload.id] = action.payload.name;
    },
    deleteGenre: (state, action) => {
      delete state.selectedGenres[action.payload.id];
    },
  },
});

export const { selectGenre, deleteGenre } = movieSlice.actions;
export default movieSlice.reducer;
