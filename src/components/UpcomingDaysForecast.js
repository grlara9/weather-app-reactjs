import React from 'react'
import UpcomingDayDataItem from './UpcomingDaysForecastItem'

const UpcommingDaysForecast = ({next}) =>{
    return(
        <div className='upcomingdays' style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
            {next.map(item =>(
                <UpcomingDayDataItem  {...item} />
            ))}
        </div>
    )
}
 
export default UpcommingDaysForecast