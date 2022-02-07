import React from 'react'

const getCurrentDayData = (data) => [
    {
        name: 'Humidity',
        value: data.humidity,
        unit: '%', 
    },    
    {
        name: 'Wind',
        value: Math.round(data.wind_speed),
        unit: 'MPH',
    }, 
    {
        name: 'Max',
        value:Math.round(data.max_temp),
        unit: '°C'
    }, 
    {
        name: 'Min',
        value: Math.round(data.min_temp),
        unit: '°C'
    }, 
   

]

export default getCurrentDayData