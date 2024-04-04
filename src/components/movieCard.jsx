import { useSelector } from "react-redux";
import "./styles/movieCard.css";

const MovieCard = () => {
  const moviesData = useSelector(state => state.moviesGlobal);

  console.log(moviesData);

  return (
    <div className="card__movies">
      <section className="ssss">
        {moviesData && moviesData.length > 0 ? (
          moviesData.map(movie => (
            <div className="movie__card" key={movie.id}>
              <img className="img_movie" src={movie.poster_path} alt="" />
              <h2>{movie.title}</h2> 
              {/* Puedes agregar más información de la película aquí si lo deseas */}
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
