import React from 'react';

import CurrentDay from './CurrentDay';

import './Forecast.css'

const Forecast = ({forecast}) => {
  return(
    <div className='currentday'>
         <CurrentDay {...forecast.currentDay} />
    </div>
  )
}

export default Forecast