import  { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMoviesThunks } from "../store/slices/movies.slices";
import "./styles/movieCard.css";
import { Link } from "react-router-dom"; // Importa Link desde React Router

const MovieCard = () => {
  const [filter, setFilter] = useState("popular"); 
  const dispatch = useDispatch();
  const moviesData = useSelector(state => state.moviesGlobal);

  useEffect(() => {
    dispatch(getMoviesThunks(filter)); 
  }, [dispatch, filter]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="card__movies">
      <div className="filter-buttons">
        <button className="button__filter" onClick={() => handleFilterChange("popular")}>Populares</button>
        <button className="button__filter" onClick={() => handleFilterChange("upcoming")}>Próximos Estrenos</button>
        <button className="button__filter" onClick={() => handleFilterChange("now_playing")}>En Cartelera</button>
        <button className="button__filter" onClick={() => handleFilterChange("movie")}>Top rated</button>
      </div>
      <section className="ssss">
        {moviesData && moviesData.length > 0 ? (
          moviesData.map(movie => (
            <Link to={`/movie/${movie.id}`} className="movie__card" key={movie.id}>
              <img className="img_movie" src={movie.poster_path} alt="" />
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
            </Link>
          ))
        ) : (
          <p>No hay datos de películas disponibles</p>
        )}
      </section>
    </div>
  );
};

export default MovieCard;
