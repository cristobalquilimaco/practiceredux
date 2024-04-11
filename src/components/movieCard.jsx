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

  const getColorClass = (voteAverage) => {
    if (voteAverage >= 7.5) {
      return "green";
    } else if (voteAverage >= 5) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <div className="card__movies">
      <div className="filter-buttons">
        <button className="button__filter" onClick={() => handleFilterChange("popular")}>Populares</button>
        <button className="button__filter" onClick={() => handleFilterChange("upcoming")}>Próximos Estrenos</button>
        <button className="button__filter" onClick={() => handleFilterChange("now_playing")}>En Cartelera</button>
      </div>
      <section className="ssss">
        {moviesData && moviesData.length > 0 ? (
          moviesData.map(movie => (
            <div className="movie__card" key={movie.id}>
                            <div className={`circle_number ${getColorClass(movie.vote_average)}`}>
                <p className="vote_value">{movie.vote_average}</p>
              </div>
              <img className="img_movie" src={movie.poster_path} alt="" />
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>

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
