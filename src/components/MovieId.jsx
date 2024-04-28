import PropTypes from 'prop-types';

const MovieId = ({ movie }) => {
  // Desestructurar el objeto movie para acceder a sus propiedades individualmente
  const { title, overview } = movie;

  console.log(movie);

  if (!movie) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h1>{title}</h1>
      <img src={movie.poster_path} alt="" />
      <p>{overview}</p>
      <p>{movie.release_date}</p>
    </div>
  );
};

MovieId.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieId;
