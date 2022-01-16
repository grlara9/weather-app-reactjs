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

        if(!data || data.length === 0){
            setError("Location Not Found")
            return
        }

        const promise = await axios(`${BASE_URL}/${data[0].woeid}`)
        console.log("It worked", promise)
    }
    return{
        isError,
        isLoading,
        forecast,
        submitRequest
    }
}

export default useForecast