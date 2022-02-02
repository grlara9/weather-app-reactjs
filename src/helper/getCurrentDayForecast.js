import React from 'react'
import moment from 'moment';

const getCurrentDayForecast =(data, title)=>({
    weekday: moment(data.applicable_date).format('dddd'),
    date: moment(data.created).format('MMMM Do'),
    location: title,
    temperature: Math.floor(data.the_temp),
    weatherIcon:`https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
    Description: data.weather_state_name,
})

export default getCurrentDayForecast