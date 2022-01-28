import React from 'react'

const UpcomingDaysForecastItem = ({temperature, weekday}) =>{
 return(
     <div className='item'>
         <h1>{temperature}</h1>
         <h3>{weekday}</h3>
     </div>
 )
}

export default UpcomingDaysForecastItem