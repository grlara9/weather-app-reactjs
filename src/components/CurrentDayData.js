import React from  'react'

import CurrentDayDataItem from './CurrentDayDataItem';

const CurrentDayData =({ forecast, darkMode}) => {
    return(
        <div className='descriptionData'>
            {forecast.map(item =>(
                <CurrentDayDataItem {...item} key={item.name} darkMode={darkMode}/>
            ))}
        </div>
    )
}
export default CurrentDayData