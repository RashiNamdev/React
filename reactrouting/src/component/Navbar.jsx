import React from "react"
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
import {Link,NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = ()=>{
    return(
        <div>
            <ul>
                <li>
                    {/* this Navbar is preferred to use beacause it has a class isActive through which we can style it */}
                    <NavLink to="/" className = {({isActive})=> isActive ? "acitve-link":""}>
                    Home
                    </NavLink>
                </li>
                  <li>
                    <NavLink to="/About" className = {({isActive})=> isActive ? "acitve-link":""}> 
                    About
                    </NavLink>
                </li>
                  <li>
                    <NavLink to="/Dashboard" className = {({isActive})=> isActive ? "acitve-link":""}>
                    Dashboard
                     </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar