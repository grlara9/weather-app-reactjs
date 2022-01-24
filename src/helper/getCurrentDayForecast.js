import React from 'react'
import Moment from 'react-moment';

const getCurrentDayForecast =(data, title)=>({
    weekday: <Moment>{data.applicable_date}</Moment>,
    date: <Moment format="D MMM YYYY">{data.created}</Moment>,
    location: title,
    temperature: data.the_temp,
    weatherIcon:`https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
    Description: data.weather_state_name,
})

export default getCurrentDayForecast