import React from 'react'

const getCurrentDayData = (data) => [
    {
        name: 'humidity',
        value: data.humidity,
        unit: '%',
    },    
    {
        name: 'wind',
        value: data.wind_speed,
        unit: 'm/h',
    }, 
    {
        name: 'max',
        value: data.max_temp,
        unit: 'C'
    }, 
    {
        name: 'min',
        value: data.min_temp,
        unit: 'C'
    }, 
   

]

export default getCurrentDayData