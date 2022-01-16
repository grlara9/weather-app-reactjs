import axios from 'axios';
import React, {useState} from 'react'

const useForecast = () =>{
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null)

    const BASE_URL = 'https://the-ultimate-api-challenge.herokuapp.com/https://www.metaweather.com/api/location'

    const submitRequest = async location =>{
        console.log("si es location", location)
        const {data} = await axios(`${BASE_URL}/search`, 
        {
            params: {query: location}
        })

        console.log("ID", {data})
    }
    return{
        isError,
        isLoading,
        forecast,
        submitRequest
    }
}

export default useForecast