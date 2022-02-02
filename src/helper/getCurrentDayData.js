import React from 'react'

const getCurrentDayData = (data) => [
    {
        name: 'humidity',
        value: data.humidity,
        unit: '%',
    },    
    {
        name: 'wind',
        value: Math.round(data.wind_speed),
        unit: 'MPH',
    }, 
    {
        name: 'max',
        value:Math.round(data.max_temp),
        unit: '°C'
    }, 
    {
        name: 'min',
        value: Math.round(data.min_temp),
        unit: '°C'
    }, 
   

]

export default getCurrentDayData