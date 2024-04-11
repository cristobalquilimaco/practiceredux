import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiKeyMovie = "0c8d154b2b93ccc0da064d6ff2a2575b";

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

export const getMoviesThunks = (filterType) => async (dispatch) => {
  let url;
  switch (filterType) {
    case "popular":
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKeyMovie}`;
      break;
    case "upcoming":
      url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKeyMovie}`;
      break;
    case "now_playing":
      url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKeyMovie}`;
      break;
    // Agrega más casos según sea necesario para otros tipos de filtro
    default:
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKeyMovie}`;
      break;
  }
  try {
    const response = await axios.get(url);
    const movies = response.data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
      backdrop_path: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
    }));
    dispatch(setMoviesGlobal(movies));
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
