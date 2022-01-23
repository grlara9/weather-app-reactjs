import React from 'react';

import CurrentDay from './CurrentDay';

const Forecast = ({forecast}) => {
  return(
    <div className='currentday'>
         <CurrentDay {...forecast.currentDay} />
    </div>
  )
}

export default Forecast