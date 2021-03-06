import axios from 'axios';
import React, {useState} from 'react'
import getCurrentDayForecast from '../helper/getCurrentDayForecast';

import getCurrentDayData from '../helper/getCurrentDayData';

import getUpcomingDaysForecast from '../helper/getUpcomingDaysForecast'

const useForecast = () =>{
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null)
    const BASE_URL = 'https://the-ultimate-api-challenge.herokuapp.com/https://www.metaweather.com/api/location';

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

    const  prepareForecastData =(data)=>{
        const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title);
        const currentDayData = getCurrentDayData(data.consolidated_weather[0])
        const upcomingdays = getUpcomingDaysForecast(data.consolidated_weather)
        
        console.log("UPCOMINGDAYFORECAST>>>>>", upcomingdays)
        setForecast({ currentDay, currentDayData, upcomingdays });
        setLoading(false);
    }

    const submitRequest = async location =>{
        setLoading(true);
        const response = await getWoeid(location);
        if (!response?.woeid) return;

        const data = await getForecast(response.woeid);
        if (!data) return;

        console.log("este es el bueno", data)

        prepareForecastData(data)
    }
console.log("FORECASTTTTT>>>>", forecast)

    return{
        isError,
        isLoading,
        forecast,
        submitRequest
    }
}

export default useForecast