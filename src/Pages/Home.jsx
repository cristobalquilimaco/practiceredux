import MovieCard from "../components/movieCard"
import Poster from "../components/Poster"
import TopFive from "../components/topfive"


const Home = () => {
  return (
    <div>
        <Poster/>
        <MovieCard /> {/* Renderiza el componente MovieCards aquí */}
        <TopFive/>
    </div>
  )
}

export default Home