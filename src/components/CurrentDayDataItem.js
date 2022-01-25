import React from 'react'

const CurrentDayDataItem = ({ name, value, unit}) =>{
    return(
        <div className='item'>

            <h1>{name}</h1>
            <p><span>{value}</span>{unit}</p>
        </div>
    )
}

export default CurrentDayDataItem;