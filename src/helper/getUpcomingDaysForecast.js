const getUpcomingDaysForecast = (data)=>{
    data.slice(1).map(day => ({
        imgUrl: day.weather_state_abbr,
        temperature: Math.round(day.max_temp),
        weekday: day.applicable_date,
    }));

}