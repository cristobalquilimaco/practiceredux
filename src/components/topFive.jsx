import { useSelector } from "react-redux";
import "./styles/movieCard.css";


const TopFive = () => {
  const moviesData = useSelector((state) => state.moviesGlobal);

 
  const topFiveMovies = moviesData
    .filter((movie) => movie.vote_average > 7) 
    .slice(0, 5); 

  console.log(topFiveMovies);

  return (
    <div className="ssss">
      {topFiveMovies.map((movie) => (
        <div key={movie.id} className="movie__card">
          <img src={movie.poster_path} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default TopFive;
