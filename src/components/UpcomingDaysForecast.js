import React from 'react'
import UpcomingDayDataItem from './UpcomingDaysForecastItem'

const UpcommingDaysForecast = ({next, darkMode}) =>{
    return(
        <div className='upcomingdays' style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
            {React.Children.toArray(next.map(item =>(
                <UpcomingDayDataItem  {...item} darkMode={darkMode} />
            )))}
        </div>
    )
}
 
export default UpcommingDaysForecast