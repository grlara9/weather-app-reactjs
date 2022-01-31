import React from 'react';
import CurrentDay from './CurrentDay';
import CurrentDayData from './CurrentDayData';
import UpcomingDaysForecast from './UpcomingDaysForecast'
import './Forecast.css'

const Forecast = ({forecast}) => {
  return(
    <div className='currentday'>
      <div className='top'>
        <div className='top-left'>
          <CurrentDay {...forecast.currentDay} />
        </div>
        <div className='top-right'>
          <CurrentDayData forecast={forecast.currentDayData} />
        </div> 
      </div>
      <div className='botton'>
        <UpcomingDaysForecast next={forecast.upcomingdays} />
      </div>
    </div>
  )
}

export default Forecast