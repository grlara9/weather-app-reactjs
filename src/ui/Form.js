import React, {useState} from 'react'

const Form = props => {
    const [location, setLocation]= useState('')

    const onSubmit = e =>{
        e.preventDefault();
        console.log("location", location)
        props.submitLocation(location)
    }
    return(
        <form>
            <input
            type="text"
            placeholder='Search Location'
            value={location}
            required
            onChange={e=>setLocation(e.target.value)}
            />
            <button onClick={onSubmit}>submit</button>
            </form>
    )
}
export default Form