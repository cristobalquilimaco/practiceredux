import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    setMoviesGlobal: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMoviesGlobal } = moviesSlice.actions;

export default moviesSlice.reducer;

export const getMoviesThunks = (
  url = "https://api.themoviedb.org/3/discover/movie?api_key=0c8d154b2b93ccc0da064d6ff2a2575b&with_original_language=en&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
) => async (dispatch) => {
  try {
    const response = await axios.get(url);
    const movies = response.data.results.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        backdrop_path: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
      };
    });
    dispatch(setMoviesGlobal(movies));
    return movies;
  } catch (error) {
    console.error("Error fetching cocktails:", error);
    throw error;
  }
};
