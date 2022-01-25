import React from  'react'

import CurrentDayDataItem from './CurrentDayDataItem';

const CurrentDayData =({ forecast }) => {
    return(
        <div className='descriptionData'>
            {forecast.map(item =>(
                <CurrentDayDataItem {...item} key={item.name} />
            ))}
        </div>
    )
}
export default CurrentDayData