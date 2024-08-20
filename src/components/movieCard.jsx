import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMoviesThunks } from "../store/slices/movies.slices";

const MovieCard = () => {
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;
  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.moviesGlobal);

  useEffect(() => {
    dispatch(getMoviesThunks(filter));
  }, [dispatch, filter]);

  if (!Array.isArray(moviesData)) {
    return <p>Loading or error with movies data.</p>;
  }

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = moviesData.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(moviesData.length / moviesPerPage);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
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
        {currentMovies.length > 0 ? (
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
