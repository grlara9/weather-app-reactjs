import React from 'react'

const getCurrentDayForecast =(data, title)=>({
    weekday: data.applicable_date,
    date: data.created,
    location: title,
    temperature: data.the_temp,
    Description: data.weather_state_name,
    weatherIcon:  `'https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
})

export default getCurrentDayForecast