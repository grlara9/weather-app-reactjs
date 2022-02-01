import moment from 'moment'

const getWeekday = date => moment(date).format('dddd').substring(0,3)

const getUpcomingDaysForecast = (data)=>
    data.slice(1).map(day => ({
        imgUrl:  `https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`,
        temperature: Math.round(day.max_temp),
        weekday: getWeekday(day.applicable_date)
    }));

export default getUpcomingDaysForecast