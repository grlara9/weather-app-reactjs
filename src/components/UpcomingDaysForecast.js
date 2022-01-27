import React from 'react'
import UpcomingDayDataItem from './UpcomingDaysForecastItem'

const UpcommingDaysForecast = ({next}) =>{
    return(
        <div className='upcomingdays'>
            {next.map(item =>(
                <UpcomingDayDataItem  {...item} />
            ))}
        </div>
    )
}
 
export default UpcommingDaysForecast