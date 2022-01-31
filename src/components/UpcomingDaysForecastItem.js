import React from 'react'
import './UpcomingDaysForecast.css'

const UpcomingDaysForecastItem = ({temperature, weekday}) =>{
 return(
     <div className='days'>
         <p>{temperature}</p>
         <p>{weekday}</p>
     </div>
 )
}

export default UpcomingDaysForecastItem