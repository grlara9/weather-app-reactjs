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
        <div className="main">
     <div className="sub-main">
       <div>
         <div>
           <h1>Login Page</h1>
           <div>
            
             <input 
                type="text"
                placeholder='Search Location'
                value={location}
                required
                onChange={e=>setLocation(e.target.value)}
             />
           </div>
           <div className="second-input">
            
             <input type="password" placeholder="user name" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
            </div>
       </div>
    </div>
    </div>
    )
}
export default Form