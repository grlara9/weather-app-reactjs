import React from 'react'
import UpcomingDayDataItem from './UpcomingDaysForecastItem'

const UpcommingDaysForecast = ({next}) =>{
    return(
        <div className='upcomingdays'>
            {next.map(item =>(
                <UpcomingDayDataItem  {...item} key={item.name}/>
            ))}
        </div>
    )
}
 
export default UpcommingDaysForecast