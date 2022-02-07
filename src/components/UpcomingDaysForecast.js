import React from 'react'
import UpcomingDayDataItem from './UpcomingDaysForecastItem'
import './UpcomingDaysForecast.css'

const UpcommingDaysForecast = ({next, darkMode}) =>{
    return(
        <div className='upcomingdays'>
            {React.Children.toArray(next.map(item =>(
                <UpcomingDayDataItem  {...item} darkMode={darkMode} />
            )))}
        </div>
    )
}
 
export default UpcommingDaysForecast