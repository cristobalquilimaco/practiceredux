import PropTypes from 'prop-types';

const MovieId = ({ movie }) => {

    console.log(movie)
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.image} alt="" />
    </div>
  );
}

MovieId.propTypes = {
  movie: PropTypes.object.isRequired // O el tipo de datos que esperas para movie
};

export default MovieId;