import React from 'react';

import CurrentDay from './CurrentDay';
import CurrentDayData from './CurrentDayData';

import './Forecast.css'

const Forecast = ({forecast}) => {
  return(
    <div className='currentday'>
      <div className='left'>
         <CurrentDay {...forecast.currentDay} />
      </div>
      <div className='right'>
        <CurrentDayData forecast={forecast.currentDayData} />
      </div>
    </div>
  )
}

export default Forecast