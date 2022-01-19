import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner'

const Loader = () =>{
    return(
        <>
        <Spinner animation="border" role="status" size="lg" variant="dark" />
        <h3>Loader...</h3>
        </>
      ); 
}
export default Loader