import { useEffect } from "react"
import { useParams } from "react-router-dom"
import MovieId from "./MovieId";
import useFetch from "../hooks/useFetch";

const MovieInfo = () => {
  const {id} = useParams()

  const apiKeyMovie = "0c8d154b2b93ccc0da064d6ff2a2575b";
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKeyMovie}`

  const [movie, getMovieById] = useFetch(url)

  useEffect(() => {
  getMovieById()
  }, [id])
  

  return (
    <div>
      <MovieId movie={movie}/>
    </div>
  )
}

export default MovieInfo