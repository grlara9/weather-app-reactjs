import React, {useState} from 'react'
import './Form.css'
const Form = props => {
    const [location, setLocation]= useState('')

    const onSubmit = e =>{
        e.preventDefault();
        console.log("location", location)
        props.submitLocation(location)
    }
    return(
        <div>
        <form>
            <h3>Weather</h3>
           <div>
               <input 
                   type="text"
                   placeholder='Search Location'
                   value={location}
                   required
                   onChange={e=>setLocation(e.target.value)}
               />
           </div>
               <div className="search-button">
                   <button onClick={onSubmit}>Login</button>
               </div>    
       </form>
   </div>
    )
}
export default Form