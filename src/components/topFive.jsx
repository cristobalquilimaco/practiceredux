import { useSelector } from "react-redux";
import "./styles/topFive.css";


const TopFive = () => {
  const moviesData = useSelector((state) => state.moviesGlobal);

 
  const topFiveMovies = moviesData
    .filter((movie) => movie.vote_average > 7) 
    .slice(0, 6); 

  return (
    <div className="principal_topfive">
      <h1 className="top__movie__five">Top de peliculas</h1>
      <div className="component__movie">
      {topFiveMovies.map((movie) => (
        <div key={movie.id} className="movie__top__five">
          <img className="top__five__image" src={movie.poster_path} alt={movie.title} />
          <h3 className="top__five__title">{movie.title}</h3>
          <p className="top__five__date" >{movie.release_date}</p>
        </div>
      ))}
      </div>

    </div>
  );
};

export default TopFive;
