import React, {useState} from 'react'

const useForecast = () =>{
    const [forecast, setForecast] = useState(null)

    const submitRequest = location =>{
        console.log({location})
    }
    return{
        submitRequest
    }
}

export default useForecast