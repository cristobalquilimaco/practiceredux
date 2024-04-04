import { configureStore } from "@reduxjs/toolkit";
import moviesGlobal from "./slices/movies.slices";

const store = configureStore({
    reducer:{
        moviesGlobal,
    }
})
//No olvidar exportar la funcion store para que pueda ser utilizada en otro componente
export default store