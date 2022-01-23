import React from 'react'

const CurrentDay = ({weekday, date, location, temperature, Description, weatherIcon}) => {
    return(
        <div className={` d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
            <div>
                <p className="d-flex align-items-baseline font-weight-lighter mb-1"><span>{location}</span></p>
                <h2 className="font-weight-bold mb-1">{weekday} | {date}</h2>
                
            </div>
            <div>
                <img width="45" src={weatherIcon} alt="icon" />
                <h2 className="font-weight-bold mb-1">
                    <span>{temperature}</span>°C
                </h2>
                <h5 className="font-weight-lighter">{Description}</h5>
            </div>
        </div>
   
    )
}
export default CurrentDay