
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMoviesThunks } from "./store/slices/movies.slices";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Aquí puedes llamar a la acción para obtener los datos de las películas
    dispatch(getMoviesThunks());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
      
    </div>
  );
};

export default App;
