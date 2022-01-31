import React from 'react'
import './CurrentDayDataItem.css'

const CurrentDayDataItem = ({ name, value, unit}) =>{
    return(
        <div className='item'>
            <p>{name}<span>{value}</span>{unit}</p>
        </div>
    ) 
}

export default CurrentDayDataItem;