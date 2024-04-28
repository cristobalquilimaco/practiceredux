import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieId from "../components/MovieId";

const MovieInfo = () => {
    const { id } = useParams();
    const apiKeyMovie = "0c8d154b2b93ccc0da064d6ff2a2575b";
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovieById = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKeyMovie}`);
                console.log(response.data); // Verifica la estructura de la respuesta de la API
                setMovie(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        // Llama a la función para obtener los detalles de la película cuando el ID cambie
        if (id) {
            getMovieById();
        }
    }, [id]); // Ejecuta la llamada cuando el ID cambie

    // Si movie es null, muestra un mensaje de carga
    if (!movie) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <MovieId movie={movie} />
        </div>
    );
};

export default MovieInfo;
