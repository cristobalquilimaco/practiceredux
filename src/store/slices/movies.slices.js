import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiKeyMovie = "0c8d154b2b93ccc0da064d6ff2a2575b";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    details: {}
  },
  reducers: {
    setMoviesGlobal: (state, action) => {
      return action.payload;
    }
  }
});

export const { setMoviesGlobal } = moviesSlice.actions;

export default moviesSlice.reducer;

export const getMoviesThunks = (filterType) => async (dispatch) => {
  let url;
  switch (filterType) {
    case "all_movies":
      url = `https://api.themoviedb.org/3/movie/changes?page=1?api_key=${apiKeyMovie}`;
      break;
    case "popular":
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKeyMovie}`;
      break;
    case "upcoming":
      url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKeyMovie}`;
      break;
    case "now_playing":
      url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKeyMovie}`;
      break;
    default:
      url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKeyMovie}`;
      break;
  }
  try {
    const response = await axios.get(url);
    const movies = response.data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      release_date: movie.release_date,
      vote_average: formatVoteAverage(movie.vote_average),
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

const formatVoteAverage = (voteAverage) => {
  if(!isNaN(voteAverage)) {
    return parseFloat(voteAverage).toFixed(1);
  }
  return voteAverage;
}
