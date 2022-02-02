import React from 'react'
import './CurrentDay.css'
const CurrentDay = ({weekday, date, location, temperature, Description, weatherIcon}) => {
    return(
        <div className='current'>
            <div>
                <h4><span>{location}</span></h4>
                <h5 className="font-weight-bold mb-1">{date}</h5>
            </div>
            <div className='asd'>
                <div className='icon'>
                    <img width="90" src={weatherIcon} alt="icon" />
                </div>
                <div className='temperature'>
                <h1>{temperature}°C</h1>
                <h3>{Description}</h3>
                </div>
            </div>
        </div>
   
    )
}
export default CurrentDay