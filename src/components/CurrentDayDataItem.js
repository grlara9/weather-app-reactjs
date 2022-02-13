import React from 'react'
import { convertToFah } from '../helper/functions'
import './CurrentDayDataItem.css'

const CurrentDayDataItem = ({ name, value, unit}) =>{
    return(
        <div className='item'>
            <p className='item__name'>{name}: </p> 
            <p>{value}{unit}</p>
        </div> 
    )  
}

export default CurrentDayDataItem;