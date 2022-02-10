import React, {useState} from 'react'
import Alert from "react-bootstrap/Alert";

import './Error.css'

const Error = ({message}) =>{
    
    return(
        <div className='error'>
           <Alert variant="danger"><span>{message}</span> </Alert>
        </div>
    )
    
   
}

export default Error