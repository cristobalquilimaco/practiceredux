import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMoviesThunks } from "../store/slices/movies.slices";
import "./styles/movieCard.css";
import { Link } from "react-router-dom";

const MovieCard = () => {
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const moviesPerPage = 10; // Número de películas por página
  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.moviesGlobal);

  useEffect(() => {
    dispatch(getMoviesThunks(filter));
  }, [dispatch, filter]);

  // Calcular los índices de las películas que se mostrarán en la página actual
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = moviesData.slice(indexOfFirstMovie, indexOfLastMovie);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total de páginas
  const totalPages = Math.ceil(moviesData.length / moviesPerPage);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1); // Reinicia la página a la primera cuando se cambia el filtro
  };

  return (
    <div className="card__movies">
      <div className="filter-buttons">
      <button className="button__filter" onClick={() => handleFilterChange("action")}>Action</button>
        <button className="button__filter" onClick={() => handleFilterChange("popular")}>Populares</button>
        <button className="button__filter" onClick={() => handleFilterChange("upcoming")}>Próximos Estrenos</button>
        <button className="button__filter" onClick={() => handleFilterChange("now_playing")}>En Cartelera</button>
        <button className="button__filter" onClick={() => handleFilterChange("movie")}>Top rated</button>
      </div>
      <section className="ssss">
        {currentMovies && currentMovies.length > 0 ? (
          currentMovies.map((movie) => (
            <Link to={`/movie/${movie.id}`} className="movie__card" key={movie.id}>
              <img className="img_movie" src={movie.poster_path} alt={movie.title} />
              <h2 className="title_movie">{movie.title}</h2>
              <p className="date_movie">{movie.release_date}</p>
            </Link>
          ))
        ) : (
          <p>No hay datos de películas disponibles</p>
        )}
      </section>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`page-link ${index + 1 === currentPage ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
