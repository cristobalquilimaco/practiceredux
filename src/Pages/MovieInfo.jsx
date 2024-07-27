import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Pages/styles/movieInfo.css";
import ModalVideo from "../components/ModalVideo";

const MovieInfo = () => {
  const { id } = useParams();
  const apiKeyMovie = "0c8d154b2b93ccc0da064d6ff2a2575b";
  const [movie, setMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKeyMovie}`
        );
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getMovieVideos = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKeyMovie}`
        );
        if (response.data.results && response.data.results.length > 0) {
          const trailer = response.data.results.find(
            (video) => video.type === "Trailer"
          );
          if (trailer) {
            setMovie((prevState) => ({
              ...prevState,
              trailerLink: `https://www.youtube.com/embed/${trailer.key}`,
            }));
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      getMovieDetails();
      getMovieVideos();
    }
  }, [id, apiKeyMovie]);

  if (!movie) {
    return <div>Cargando...</div>;
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="movie_info">
      <h1 className="movie_info_title">{movie.title}</h1>
      <p className="movie_overview">{movie.overview}</p>
      <p>Fecha de lanzamiento: {movie.release_date}</p>
      <p>Calificación: {movie.vote_average}</p>
      <img
        className="principal__movie__img"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
      />
      <button onClick={handleOpenModal}>Ver Trailer</button>
      <ModalVideo
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoSrc={movie.trailerLink}
      />
    </div>
  );
};

export default MovieInfo;
