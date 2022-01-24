import React from 'react'

const getCurrentDayData = (data) => [{
    max: data.max_temp,
    min:data.min_temp,
    humidity: data.humidity,
    wind: data.wind_speed,
}]

export default getCurrentDayData