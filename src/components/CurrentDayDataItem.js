import React from 'react'
import { convertToFah } from '../helper/functions'
import './CurrentDayDataItem.css'

const CurrentDayDataItem = ({ name, value, unit}) =>{
    return(
        <div className='item'>
            <p>{name}: <span>{value}</span>{unit}</p>
        </div>
    ) 
}

export default CurrentDayDataItem;