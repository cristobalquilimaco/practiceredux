import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMoviesThunks } from "../store/slices/movies.slices";
import "./styles/movieCard.css";


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
        <button onClick={() => handleFilterChange("popular")}>Populares</button>
        <button onClick={() => handleFilterChange("upcoming")}>Próximos Estrenos</button>
        <button onClick={() => handleFilterChange("now_playing")}>En Cartelera</button>
      </div>
      <section className="ssss">
        {moviesData && moviesData.length > 0 ? (
          moviesData.map(movie => (
            <div className="movie__card" key={movie.id}>
              <img className="img_movie" src={movie.poster_path} alt="" />
              <h2>{movie.title}</h2> 
            </div>
          ))
        ) : (
          <p>No hay datos de películas disponibles</p>
        )}
      </section>
    </div>
  );
};

export default MovieCard;
