import React from 'react'
import flower from '../assets/flower.jpg'
import './Usercard.css'
const Usercard=(props)=>{
    return(
        <div className="usercontainer">
            <p id="user-name">{props.name}</p>
            <img id="user-img" src={flower} alt="hii"></img>
            <p id="user-desc">{props.desc}</p>

        </div>
    )
}

export default Usercard