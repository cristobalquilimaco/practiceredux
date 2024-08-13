import MovieCard from "../components/movieCard"
import Poster from "../components/Poster"
import TopFive from "../components/topfive"
import "../Pages/styles/home.css";

const Home = () => {
  return (
    <div>
        <Poster/>
        <div className="component__home">
        <MovieCard /> {/* Renderiza el componente MovieCards aquí */}
        <TopFive/>
        </div>
    </div>
  )
}

export default Home