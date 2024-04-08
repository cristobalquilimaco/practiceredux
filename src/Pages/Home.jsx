import MovieCard from "../components/movieCard"
import Poster from "../components/poster"

const Home = () => {
  return (
    <div>
        <Poster/>
        <MovieCard /> {/* Renderiza el componente MovieCards aquí */}
    </div>
  )
}

export default Home