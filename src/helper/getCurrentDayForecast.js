import React from 'react'

const getCurrentDayForecast =(data, title)=>({
    weekday: data.applicable_date,
    date: data.created,
    location: title,
    temperature: data.the_temp,
    weatherIcon:`https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
    Description: data.weather_state_name,
})

export default getCurrentDayForecast