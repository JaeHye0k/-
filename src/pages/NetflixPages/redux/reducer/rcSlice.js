import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGenres: {},
  selectedSortButton: null,
  selectedButton: "filter",
  isOnController: false,
};

export const rcSlice = createSlice({
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
    turnOnRemoteController: (state) => {
      state.isOnController = !state.isOnController;
    },
  },
});

export const {
  selectGenre,
  deleteGenre,
  selectSortButton,
  selectButton,
  turnOnRemoteController,
} = rcSlice.actions;
export default rcSlice.reducer;
