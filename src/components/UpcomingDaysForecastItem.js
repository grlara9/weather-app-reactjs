import React from 'react'
import './UpcomingDaysForecast.css'

const UpcomingDaysForecastItem = ({ imgUrl, temperature, weekday}) =>{
 return(
     <div className='days'>
         <img src={imgUrl} width="25" alt="weathericon"/>
         <span>{temperature}</span>
         <span>{weekday}</span>
     </div>
 )
}

export default UpcomingDaysForecastItem