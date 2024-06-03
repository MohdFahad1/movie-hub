// favoritesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export const { addMovie, removeMovie } = favoritesSlice.actions;
export default favoritesSlice.reducer;
