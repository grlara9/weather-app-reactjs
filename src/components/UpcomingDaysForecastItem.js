import React from 'react'

const UpcomingDaysForecastItem = ({temperature}) =>{
 return(
     <div className='item'>
         <h1>{temperature}</h1>
     </div>
 )
}

export default UpcomingDaysForecastItem