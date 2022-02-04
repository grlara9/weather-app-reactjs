import React, {useState} from 'react'
import './Toggler.css'

const Toggler = ( ) =>{
    const [darkMode, setDarkMode] = useState(true)
return(
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>°C</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>°F</span>
      </div>
    </div>
)

}
export default Toggler