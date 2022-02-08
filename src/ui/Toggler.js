import React, {useState} from 'react'
import './Toggler.css'

const Toggler = props =>{

 
return(
    <div>
      <div className="container">
        <span style={{ color: props.darkMode ? "grey" : "black" }}>°C</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => props.setDarkMode(!props.darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: props.darkMode ? "#c96dfd" : "blue" }}>°F</span>
      </div>
    </div>
)

}
export default Toggler