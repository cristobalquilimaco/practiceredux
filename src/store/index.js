import { configureStore } from "@reduxjs/toolkit";
import moviesGlobal from "./slices/movies.slices";

const store = configureStore({
    reducer:{
        moviesGlobal,
    }
})

export default store