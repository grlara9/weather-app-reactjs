import axios from 'axios';
import React, {useState} from 'react'

const useForecast = () =>{
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null)

    const BASE_URL = 'https://the-ultimate-api-challenge.herokuapp.com/https://www.metaweather.com/api/location'

    const getWoeid = async location => {
       const {data} = await axios(`${BASE_URL}/search`, 
        {
            params: {query: location}
        })
        if(!data || data.length === 0){
            setError("Location Not Found")
            setLoading(false);
            return
        }
        console.log("woeid", data)
    return data[0];
    }

    const getForecast = async woeid => {
        const {data} = await axios(`${BASE_URL}/${woeid}`)
       
        if (!data || data.length === 0) {
            setError('Something went wrong');
            setLoading(false);
            return;
        }
        return data
    }   

    const  prepareForecastData =()=>{
        const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title);
        const currentDayDetails = getCurrentDayDetailedForecast(data.consolidated_weather[0]);
        const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);

        setForecast({ currentDay, currentDayDetails, upcomingDays });
        setLoading(false);
    }

    const submitRequest = async location =>{
        setLoading(true);
        const response = await getWoeid(location);
        
        const data = await getForecast(response.woeid);

        console.log("este es el bueno", data)

        prepareForecastData(data)
    }


    return{
        isError,
        isLoading,
        forecast,
        submitRequest
    }
}

export default useForecast