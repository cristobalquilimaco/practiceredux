import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getMoviesThunks } from "./store/slices/movies.slices";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./shared/Navbar";
import "./app.css";
import LoadingPage from "./components/LoadingPage";
import MovieInfo from "./Pages/MovieInfo";


const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesThunks())
      .then(() => setLoadingComplete(true))
      .catch(() => setLoadingComplete(true));
  }, [dispatch]);

  if (!loadingComplete) {
    return <LoadingPage />;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieInfo />} /> {/* Ruta para el detalle de la película */}
      </Routes>
    </div>
  );
};

export default App;
