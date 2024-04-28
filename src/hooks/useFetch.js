import { useState } from "react";
import axios from "axios";

const useFetch = () => {
    const [apiInfo, setApiInfo] = useState(false);

    const getMovieById = async (url) => {
        try {
            const response = await axios.get(url);
            setApiInfo(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return [apiInfo, getMovieById];
};

export default useFetch;
