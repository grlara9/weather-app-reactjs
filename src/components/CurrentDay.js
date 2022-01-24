import React from 'react'
import './CurrentDay.css'
const CurrentDay = ({weekday, date, location, temperature, Description, weatherIcon}) => {
    return(
        <div className='current'>
            <div>
                <p><span>{location}</span></p>
                <h2 className="font-weight-bold mb-1">{date}</h2>
            </div>
            <div className='asd'>
                <div className='icon'>
                    <img width="80" src={weatherIcon} alt="icon" />
                </div>
                <div className='temperature'>
                <h2>
                    <span>{temperature}</span>°C
                </h2>
                <h5>{Description}</h5>
                </div>
            </div>
        </div>
   
    )
}
export default CurrentDay