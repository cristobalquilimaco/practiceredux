import axios from "axios"
import { useState } from "react"

const useFetch = url =>{
    const [apiInfo, setApiinfo] = useState()
    
    const getMovieById = () => {
        axios.get(url)

        .then(res => setApiinfo(res.data))
        .catch(err => console.log(err))
    }
    return [apiInfo, getMovieById]
}

export default useFetch