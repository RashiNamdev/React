import React from 'react'
import flower from '../assets/flower.jpg'
const Usercart=()=>{
    return(
        <div className="usercontainer">
            <p id="user-name">rashi</p>
            <img id="user-img" src={flower} alt="hii"></img>
            <p id="user-desc">Description of the user</p>

        </div>
    )
}

export default Usercart