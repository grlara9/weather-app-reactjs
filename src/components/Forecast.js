import React from 'react';

import CurrentDay from './CurrentDay';
import CurrentDayData from './CurrentDayData';
import UpcomingDaysForecast from './UpcomingDaysForecast'
import './Forecast.css'

const Forecast = ({forecast}) => {
  return(
    <div className='currentday'>
      <div className='left'>
         <CurrentDay {...forecast.currentDay} />
      </div>
      <div className='right'>
        <CurrentDayData forecast={forecast.currentDayData} />
        <UpcomingDaysForecast next={forecast.upcomingdays} />
      </div>
    </div>
  )
}

export default Forecast