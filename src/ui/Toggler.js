import React, {useState} from 'react'
import './Toggler.css'

const Toggler = props =>{


return(
    <div className={props.darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: props.darkMode ? "grey" : "yellow" }}>°C</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => props.setDarkMode(!props.darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: props.darkMode ? "#c96dfd" : "grey" }}>°F</span>
      </div>
    </div>
)

}
export default Toggler