
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getMoviesThunks } from "./store/slices/movies.slices";
import MovieCard from "./components/movieCard";



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Aquí puedes llamar a la acción para obtener los datos de las películas
    dispatch(getMoviesThunks());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Lista de Películas</h1>
      <MovieCard /> {/* Renderiza el componente CocktailsCard aquí */}
    </div>
  );
};

export default App;
