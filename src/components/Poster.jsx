import { useSelector } from "react-redux";
import "./styles/poster.css";

const Poster = () => {
    const posterMovies = useSelector(state => state.moviesGlobal);

    // Verificar si posterMovies es un array antes de usar el método map
    if (!Array.isArray(posterMovies)) {
        return null; // Otra acción apropiada, dependiendo de tu lógica
    }

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {posterMovies.map((_, index) => (
                    <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : "false"} aria-label={`Slide ${index + 1}`}></button>
                ))}
            </div>
            <div className="carousel-inner">
                {posterMovies.map((poster, index) => {
                    const firstDotIndex = poster.overview.indexOf('.');
                    const trimmedOverview = poster.overview.substring(0, firstDotIndex + 1);
                    return (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <img src={poster.backdrop_path} className="img__poster w-100" alt="" />
                            <div className="poster_title">
                                <h1 className="movie_title">{poster.title}</h1>
                                <p>{trimmedOverview}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    );
};

export default Poster;
