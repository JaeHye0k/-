import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGenres: {},
  selectedSortButton: null,
  selectedButton: "filter",
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
    selectSortButton: (state, action) => {
      state.selectedSortButton = action.payload;
    },
    selectButton: (state, action) => {
      state.selectedButton = action.payload;
    },
  },
});

export const { selectGenre, deleteGenre, selectSortButton, selectButton } =
  movieSlice.actions;
export default movieSlice.reducer;
