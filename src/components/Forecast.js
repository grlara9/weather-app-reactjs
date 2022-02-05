import React, {useState} from 'react';
import CurrentDay from './CurrentDay';
import CurrentDayData from './CurrentDayData';
import UpcomingDaysForecast from './UpcomingDaysForecast'
import Toggler from '../ui/Toggler';
import './Forecast.css'

const Forecast = ({forecast}) => {
  const [darkMode, setDarkMode] = useState(true)

  console.log("DARRKMODE>>", darkMode)
  return(
    <div className='currentday'>
      <div className='top'>
        <div className='top-left'>
          <CurrentDay {...forecast.currentDay} darkMode={darkMode}/>
        </div>
        <div className='top-right'>
          <CurrentDayData forecast={forecast.currentDayData} />
        </div> 
      </div>
      <div className='botton'>
        <UpcomingDaysForecast next={forecast.upcomingdays} />
      </div>

      <Toggler setDarkMode={setDarkMode} darkMode={darkMode}/>
    </div>
  )
}

export default Forecast