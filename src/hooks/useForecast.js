import axios from 'axios';
import React, {useState} from 'react'

const useForecast = () =>{
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null)

    const BASE_URL = 'https://the-ultimate-api-challenge.herokuapp.com/https://www.metaweather.com/api/location'

    const getWoeid = async location => {
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
    return data;
    }

    const submitRequest = async woeid =>{
     
        const {data} = await axios(`${BASE_URL}/${woeid}`)
       
        if (!data || data.length === 0) {
            setError('Something went wrong');
            setLoading(false);
            return;
        }
        return data
    }


    return{
        isError,
        isLoading,
        forecast,
        submitRequest
    }
}

export default useForecast