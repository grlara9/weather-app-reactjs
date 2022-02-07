import React from 'react'
import './UpcomingDaysForecast.css'
import { convertToFah } from '../helper/functions'

const UpcomingDaysForecastItem = ({ imgUrl, temperature, weekday, darkMode}) =>{
 return(
     <div className='days'>
         <img src={imgUrl} width="25" alt="weathericon"/>
         <span>{darkMode ? (temperature) + "°C" : convertToFah(temperature) + "°F"}</span>
         <span>{weekday}</span>
     </div>
 )
}

export default UpcomingDaysForecastItem